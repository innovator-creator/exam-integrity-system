# Exam Integrity System (EIS) — Concept Note

## Executive Summary
EIS is an AI + Blockchain biometric verification platform to prevent impersonation and unauthorized officials in exams (NPSE, BECE, WASSCE, university exams). It verifies students and staff at venue entry (fingerprint, face, index/ID fallback), displays their profile and subjects/modules scheduled for that session, and records every verification as an immutable audit trail.

## Core Problem
- Student impersonation (substitutes)
- Unauthorized people posing as supervisors
- Weak audit trail for disputes

## Proposed Solution
- Multi-biometric registration (all 10 fingerprints + face capture) at registration
- Exam-day verification flow: fingerprint → fallback face → fallback index/ID or name
- System displays: photo, name, index, school/university, faculty/department, and subjects/modules scheduled for the session
- Staff verification: photo, phone, office, role, assigned center
- Each verification generates a SHA256 hash stored as an immutable log (on-chain CID or testnet tx)
- Offline mode available; syncs when back online

## Key Features
- Student & staff registration (biometrics + academic/role details)
- Verification terminal (tablet/web) showing profile + subjects for that session
- Multi-backup verification (finger + face + ID/index)
- Staff role validation to prevent fake supervisors
- Audit trail (hash + tx id or CID)
- Admin dashboard: attendance reports, flagged mismatches, CSV export

## Pilot & Rollout
- Phase 1: Pilot in selected urban centers (Freetown)
- Phase 2: Expand district centers; add AI hall monitoring
- Phase 3: Nationwide integration; link with national ID systems

## Tech (recommended)
- Face: face-api.js (browser) or DeepFace (Python)
- Fingerprint: simulated for MVP; SecuGen/Futronic SDKs for production
- Backend: Node.js + Express; DB: MongoDB/Postgres (encrypted)
- Blockchain: IPFS CIDs + testnet tx / Hyperledger for permissioned deployments

## Privacy & Security
- TLS in transit; AES encryption at rest
- Role-based access (WAEC / Ministry only)
- Retention: keep records for dispute resolution (recommend 5 years)
- Consent captured at registration; breach response plan included

## Team & Contact
Lead: JOHN_MARK_FORNAH — Email: fornahinnovator@gmail.com — Phone: +232 30334634 / +232 32580629 / +232 76587491
