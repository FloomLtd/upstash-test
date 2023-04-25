import { Client } from "@upstash/qstash";

/**
 * Import a fetch polyfill only if you are using node prior to v18.
 * This is not necessary for nextjs, deno or cloudflare workers.
 */
import "isomorphic-fetch";

require("dotenv").config();

const UpstashClient = new Client({
  token: process.env.UPSTASH_TOKEN
});

export {
  UpstashClient
};
