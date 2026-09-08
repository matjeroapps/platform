# Phase UI-7: Local MatjerHub SSO OAuth Fix Report

## Outcome

Browser OAuth now uses an issuer URL rather than a provider domain. Local development uses `http://localhost:8081`; production supplies the public issuer through `ZITADEL_ISSUER`. Product UI calls the service **MatjerHub SSO**. Zitadel remains an implementation detail in operational configuration only.

## Configuration contract

Each repository uses `ZITADEL_ISSUER` as its common server/deployment setting. The Platform Infra `.env` and `.env.example` contain no framework-prefixed OAuth variables. Docker Compose maps the common setting into the web application's public setting:

| Application | Browser variable | Compose source |
| --- | --- | --- |
| Platform | `NEXT_PUBLIC_ZITADEL_ISSUER` | `ZITADEL_ISSUER` |
| Seller | `NEXT_PUBLIC_ZITADEL_ISSUER` | `ZITADEL_ISSUER` |
| Supplier | `VITE_ZITADEL_ISSUER` | `ZITADEL_ISSUER` |
| Admin | `VITE_ZITADEL_ISSUER` | `ZITADEL_ISSUER` |

Compose likewise maps the framework-specific client-ID variables from `ZITADEL_PLATFORM_CLIENT_ID`, `ZITADEL_SELLER_CLIENT_ID`, `ZITADEL_SUPPLIER_CLIENT_ID`, and `ZITADEL_ADMIN_CLIENT_ID`. Backend containers use `ZITADEL_INTERNAL_ISSUER=http://zitadel:8080` for their private Docker-network connection. It is not a browser setting.

## Required Zitadel setup

1. Start local infrastructure with the `infra` profile and open `http://localhost:8081`.
2. In the MatjerHub organization/project, create one OIDC authorization-code application for each browser application: Platform, Seller, Supplier, and Admin.
3. Enable PKCE (S256), then copy each generated client ID into the matching `ZITADEL_*_CLIENT_ID` value in `platform-infra/.env`.
4. Add the exact local redirect URIs:
   - Platform: `http://localhost:3001/auth/callback` when launched through Compose; `http://localhost:3000/auth/callback` for `npm run dev`.
   - Seller: `http://localhost:5174/auth/callback`.
   - Supplier: `http://localhost:5175/auth/callback`.
   - Admin: `http://localhost:5173/auth/callback`.
5. Add each matching local application URL as an allowed post-logout redirect URI. For production, replace `ZITADEL_ISSUER` and the redirect URIs with the public HTTPS application origins; do not hardcode a cloud tenant URL in source code.

## Local verification

With the platform web service and local Zitadel running, select **Continue with MatjerHub SSO**. The browser must navigate to `http://localhost:8081/oauth/v2/authorize` (or the issuer's configured authorize endpoint), return to the registered `/auth/callback`, exchange the authorization code, and create the application session. A cloud URL, an `https://` prefix added to the local issuer, or an unregistered callback URI indicates configuration drift.

The provider needs to be initialized with `ZITADEL_EXTERNALDOMAIN=localhost` and TLS disabled for this local HTTP setup. Docker's internal service URL remains private and is never shown to browser users.
