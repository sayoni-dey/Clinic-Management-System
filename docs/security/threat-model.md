# Security Threat Model

## 1. Purpose

This document identifies initial security threats affecting
authentication and authorization.

It defines minimum protections for Phase 1.

This is an initial threat model, not a claim that the
application is fully secure.

## 2. Assets

The system must protect:

- Authentication credentials.
- Session tokens and cookies.
- User identity information.
- User profiles.
- Doctor profiles and approval status.
- Application secrets.
- Private application resources.

Future phases may introduce additional sensitive assets,
including appointments and medical records.

## 3. Trust Boundaries

### Untrusted Client

The browser must be treated as untrusted.

Users can modify requests, alter client-side state, and invoke
API operations outside the intended interface.

### Backend

The backend must validate authentication and enforce
authorization for protected operations.

### Database

The database must enforce appropriate RLS policies and
constraints.

### Authentication Provider

Supabase Auth is responsible for its documented authentication
and session-management functions.

The application must still configure and integrate the provider
correctly.

## 4. Threats and Mitigations

### THREAT-001: Privilege Escalation

Threat:

A user changes a role field in a request to obtain doctor access.

Mitigations:

- Never trust client-supplied role assignments.
- Restrict updates to protected fields.
- Assign privileged roles through trusted processes.
- Test unauthorized role changes.

### THREAT-002: Cross-User Data Access

Threat:

A user changes a resource identifier to access another user's
private information.

Mitigations:

- Validate ownership and permissions on the backend.
- Enforce database RLS policies.
- Test direct API and database access.

### THREAT-003: Unauthorized Doctor Access

Threat:

A doctor accesses information outside the doctor's permitted
scope.

Mitigations:

- Enforce doctor-specific permissions.
- Check resource relationships where applicable.
- Enforce database access policies.
- Test access by multiple doctor accounts.

### THREAT-004: Session Theft or Exposure

Threat:

An attacker obtains a valid session token or credential.

Mitigations:

- Follow provider-supported session-security practices.
- Avoid exposing tokens unnecessarily.
- Use appropriate secure transport.
- Never log passwords or authentication tokens.
- Avoid storing authentication credentials in browser
  localStorage or sessionStorage without a specifically
  reviewed architecture.

### THREAT-005: Brute-Force Attempts

Threat:

An attacker repeatedly attempts to authenticate using
guessed credentials.

Mitigations:

- Configure appropriate authentication-provider protections.
- Apply rate limiting where appropriate.
- Handle failures safely.
- Monitor relevant authentication events where supported.

### THREAT-006: Account Enumeration

Threat:

Authentication or recovery responses reveal whether an
account exists.

Mitigations:

- Use appropriately generic responses where needed.
- Avoid exposing unnecessary account information.
- Follow provider guidance.

### THREAT-007: Secret Exposure

Threat:

Privileged credentials are exposed through source control,
frontend bundles, logs, or responses.

Mitigations:

- Keep privileged secrets server-side.
- Use environment configuration or secret management.
- Exclude secrets from source control.
- Review logging and error responses.

### THREAT-008: Insecure Database Policies

Threat:

An RLS policy permits unauthorized access or is missing
from a protected table.

Mitigations:

- Enable RLS on applicable tables.
- Review policies for every permitted operation.
- Test with different authenticated identities.
- Avoid assuming that frontend restrictions provide security.

## 5. Security Testing

Security tests must include:

- Unauthenticated requests to protected endpoints.
- Invalid or expired sessions.
- User-to-user access attempts.
- Doctor-to-doctor access attempts.
- Unauthorized role changes.
- Attempts to access resources outside permitted relationships.
- Direct database operations against protected tables.

## 6. Risk Acceptance

Known critical or high-severity authentication and authorization
issues must not be treated as resolved merely because the
application works in the browser.

Any exception requires explicit review, documented reasoning,
and an appropriate remediation plan.