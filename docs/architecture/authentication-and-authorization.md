# Authentication and Authorization Architecture

## 1. Purpose

This document defines the authentication and authorization
architecture for the Clinic Management System.

The implementation must follow these rules unless an approved
Architecture Decision Record changes them.

## 2. Authentication Provider

Use Supabase Auth for authentication.

The provider is responsible for credential authentication
and its supported session-management functionality.

The application is responsible for its own business permissions.

## 3. Application Roles

The initial roles are:

- `user`
- `doctor`

Roles must use consistent identifiers across the database,
backend, and frontend.

Role values must not be inferred from arbitrary request data.

## 4. Identity and Profiles

Each application profile must correspond to a valid
authentication identity.

The proposed profile identifier is the Supabase Auth user UUID.

Profile creation must be reliable and must not allow an
untrusted client to assign privileged fields.

Profile creation may be implemented using a database trigger
or a trusted server-side process after reviewing the existing
schema and operational requirements.

Whichever approach is selected must be documented and tested.

## 5. Role Assignment

Ordinary user registration must not grant doctor privileges.

Doctor privileges must be enabled only through a trusted
onboarding or approval process.

Users must not be able to modify protected role fields through
ordinary profile-update endpoints.

Doctor approval status must be stored and enforced using a
trusted source of application state.

## 6. Login and Session Validation

Use the official Supabase Auth SDK and supported authentication
flows.

Protected backend operations must establish the authenticated
identity using trusted authentication information.

A client-supplied user ID is not proof of identity.

A client-supplied role is not proof of authorization.

Expired or invalid sessions must not grant access.

## 7. Frontend Route Protection

The frontend must:

- Display authentication screens to unauthenticated visitors
  where appropriate.
- Protect authenticated application areas.
- Resolve the current application role.
- Restrict navigation to the appropriate role-specific areas.
- Handle missing profiles and incomplete onboarding.
- Handle expired sessions gracefully.

Frontend protection is not sufficient to secure data or APIs.

## 8. Backend Authorization

Protected backend operations must check the permissions required
for the requested action.

Authorization checks must consider, as applicable:

- Authenticated identity.
- Current application role.
- Doctor approval status.
- Resource ownership.
- Relationship to the requested resource.
- Additional business rules.

Do not authorize a request solely because a user has reached
a particular frontend route.

## 9. Database Authorization

Applicable tables must have RLS enabled.

Policies must explicitly define permitted SELECT, INSERT,
UPDATE, and DELETE operations.

Policies must be designed for the actual data relationships
and application requirements.

At minimum:

- Users must not read or modify another user's private profile.
- Users must not modify their own role.
- Users must not grant themselves doctor approval.
- Doctors must not automatically access every user's private data.
- Access to shared clinical resources must follow explicit,
  documented permissions.

Policy behavior must be tested directly against the database
or through an integration test environment.

## 10. Security-Sensitive Configuration

Privileged Supabase credentials must remain server-side.

Do not place privileged keys in frontend environment variables.

Do not commit secrets to source control.

Do not disable RLS to resolve an application bug without
investigating the underlying policy or identity issue.

## 11. Error Handling

Authentication failures must not expose sensitive credentials,
tokens, or internal implementation details.

Errors should be handled consistently.

Detailed diagnostic information may be logged securely on the
server, provided sensitive information is excluded.

## 12. Required Tests

The implementation must test:

- Successful registration and login.
- Invalid credentials.
- Logout.
- Session expiration.
- Password recovery.
- Email verification.
- User and doctor route restrictions.
- Unauthorized role changes.
- Doctor approval restrictions.
- Cross-user resource access.
- Cross-doctor resource access where applicable.
- Database RLS policies.