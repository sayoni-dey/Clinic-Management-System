# Project Scope

## 1. Project Overview

The Clinic Management System is a web application intended to
support interactions between users and doctors.

The application will provide role-specific functionality while
protecting user data and restricting access to authorized resources.

## 2. Current Development Status

### Phase 0: Initialization

Status: Completed, subject to repository verification.

Scope:

- Initialize the backend directory.
- Initialize the frontend directory.
- Configure the development environment.
- Configure the required project dependencies.
- Establish the Supabase connection.

### Phase 1: Authentication and Authorization

Status: Planned.

Scope:

- User authentication.
- Doctor authentication.
- User registration.
- Controlled doctor onboarding.
- Login and logout.
- Session handling through Supabase Auth.
- Email verification.
- Password recovery.
- Application profile management.
- Role-aware frontend routing.
- Backend authentication checks.
- Backend authorization checks.
- Database access restrictions using Supabase RLS.
- Authentication and authorization testing.

## 3. Roles

The initial application roles are:

- `user`
- `doctor`

Roles represent application permissions, not authentication methods.

Both roles use Supabase Auth unless an approved architecture
decision changes the authentication provider.

A user must not be able to grant themselves doctor privileges
through client-controlled registration data or profile updates.

Doctor access must follow an explicitly defined, trusted
onboarding and approval process.

## 4. Out of Scope for Phase 1

Unless explicitly approved, Phase 1 does not include:

- Appointment booking.
- Doctor scheduling.
- Medical record management.
- Prescriptions.
- Billing and payments.
- Pharmacy management.
- Laboratory management.
- Video consultations.
- Notifications beyond those required for authentication.
- Administrative dashboards unrelated to authentication.
- Multi-factor authentication beyond the selected provider's
  necessary baseline configuration.

These features may be addressed in later phases.

## 5. Security Priorities

The system must:

- Authenticate protected requests.
- Enforce authorization independently of the frontend.
- Prevent users from accessing other users' private resources.
- Prevent doctors from accessing unauthorized clinical resources.
- Prevent unauthorized privilege escalation.
- Keep credentials and secrets out of source control.
- Protect sensitive session information.
- Apply appropriate database access policies.

## 6. Definition of Done

Phase 1 is complete when:

- Required authentication flows work.
- User and doctor onboarding rules are enforced.
- Protected frontend routes behave correctly.
- Backend endpoints enforce authentication and authorization.
- Database RLS policies are enabled and tested for applicable tables.
- Unauthorized access attempts are rejected.
- Relevant automated tests pass.
- Required documentation reflects the implemented behavior.
- No known critical or high-severity authentication or
  authorization defects remain unresolved.