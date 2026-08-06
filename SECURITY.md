# Security Log

## 2026-08-06

### ChainDrop / Shai-Hulud

Status: Checked

- No compromised package versions identified.
- Project dependencies reviewed.
- `npm audit fix --force` intentionally not executed.

### npm audit

Known vulnerabilities:

- postcss (transitive dependency from Next.js)
- sharp (transitive dependency from Next.js)

Decision:

Wait for an official stable Next.js update before upgrading dependencies.

Verified by:

- npm audit
- npm ls
- Dependency tree review
