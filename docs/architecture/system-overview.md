# System Architecture Overview

## 1. Architecture Goals

The architecture must prioritize:

- Clear separation of responsibilities.
- Secure authentication and authorization.
- Maintainability.
- Testability.
- Consistency with the existing Phase 0 setup.
- Minimal unnecessary dependencies.

## 2. Existing Infrastructure

The repository currently contains:

- A backend application.
- A frontend application.
- A Supabase project connection.

The exact frameworks, versions, runtime configuration, and
communication patterns must be verified against the repository.

Do not assume that the backend and frontend use a particular
framework without inspecting the existing implementation.

## 3. Authentication Provider

The proposed authentication provider is Supabase Auth.

The application must use the official SDK and supported
authentication flows appropriate to the existing architecture.

Authentication must not be reimplemented unnecessarily.

## 4. Identity and Profile Data

Supabase Auth is the source of truth for authentication identity.

The application profile is stored separately and linked to
the corresponding authentication identity.

Proposed initial relationship:

- `auth.users`: Authentication identity.
- `public.profiles`: Application profile and role.
- `public.doctor_profiles`: Optional doctor-specific information
  and approval status, if required by the finalized schema.

The final schema must be reviewed against existing migrations
before implementation.

## 5. Authorization Boundaries

Authorization is enforced at multiple layers.

### Frontend

- Display the appropriate interface for the current role.
- Prevent inappropriate navigation where practical.
- Handle missing or expired sessions.

The frontend is not a trusted security boundary.

### Backend

- Validate the authenticated identity.
- Check permissions for protected operations.
- Validate request input.
- Enforce ownership and role constraints.
- Avoid trusting client-supplied identity or role fields.

### Database

- Enable RLS on applicable tables.
- Define explicit policies for permitted operations.
- Restrict access to records according to identity and permissions.
- Test policies independently of frontend behavior.

## 6. Secrets and Environment Variables

Secrets must be stored in appropriate environment configuration
or secret-management systems.

The Supabase publishable key may be exposed to the browser
when required by the client architecture.

The Supabase secret key, service-role credentials, database
passwords, and other privileged secrets must never be exposed
to the browser or committed to source control.

Privileged server-side credentials must not be used as a
substitute for user-level authorization.

## 7. Architectural Constraints

- Reuse the existing project structure where appropriate.
- Avoid introducing a second authentication provider without
  an approved architecture decision.
- Do not duplicate authentication logic across roles.
- Do not use frontend-only role checks as authorization.
- Do not bypass RLS without an explicit and reviewed reason.
- Document material changes to the architecture.

## 8. Open Questions

The following must be resolved by inspecting the repository:

- What frontend framework is in use?
- What backend framework is in use?
- Does the backend already have a Supabase client abstraction?
- Are server-side sessions or token-based requests currently used?
- Does the existing database contain a profiles table?
- Are there existing migrations or RLS policies?
- How will doctor applications be approved?