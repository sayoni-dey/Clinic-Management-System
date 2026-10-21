
import "dotenv/config";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


async function startServer() {
  try {
    // Establish the database connection
    await prisma.$connect();

    // Verify that PostgreSQL can execute a query
    await prisma.$queryRaw`SELECT 1`;

    console.log("✅ Database Connected Successfully!");

    // Start accepting requests only after the database is ready
    app.listen(PORT, () => {
      console.log(`🚀 Clinic Management API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed!");
    console.error(error.message);

    await prisma.$disconnect().catch(() => {});
    process.exit(1);
  }
}


// Check required environment configuration
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing from your .env file");
}

// Basic health check
app.get("/", (req, res) => {
  res.json({ message: "Clinic Management API is running!" });
});

// Register a new patient
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      password.length < 8
    ) {
      return res.status(400).json({
        message:
          "Name and email are required. Password must be at least 8 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        phone: typeof phone === "string" ? phone.trim() || null : null,
        // Public registration can only create patient accounts.
        role: "PATIENT",
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      message: "Account created successfully.",
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);

    // Handles simultaneous registrations using the same email.
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    return res.status(500).json({
      message: "Unable to register right now.",
    });
  }
});

// Log in an existing user
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    // Use a generic error so the endpoint doesn't reveal
    // whether a particular email is registered.
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        message: "This account is inactive. Please contact the clinic.",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Unable to log in right now.",
    });
  }
});

// Start the server
const server = app.listen(PORT, () => {
  startServer();
  console.log(`Clinic Management API running on port ${PORT}`);
});

// Graceful shutdown
async function shutdown() {
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
