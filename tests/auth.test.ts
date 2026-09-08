import { afterEach, describe, expect, it } from "vitest";

import { getZitadelConfig, getZitadelEndpoints } from "@/lib/auth/zitadel";

const originalIssuer = process.env.ZITADEL_ISSUER;

afterEach(() => {
  if (originalIssuer === undefined) {
    delete process.env.ZITADEL_ISSUER;
  } else {
    process.env.ZITADEL_ISSUER = originalIssuer;
  }
});

describe("MatjerHub SSO issuer configuration", () => {
  it("uses the local issuer and does not add an https scheme", () => {
    process.env.ZITADEL_ISSUER = "http://localhost:8081/";

    const config = getZitadelConfig();
    const endpoints = getZitadelEndpoints(config);

    expect(config.issuer).toBe("http://localhost:8081");
    expect(endpoints.authorization).toBe("http://localhost:8081/oauth/v2/authorize");
  });
});
