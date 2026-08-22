import { readFileSync, writeFileSync } from "node:fs";

const source = "/home/ubuntu/webdev-static-assets/ayash-celestial-guardian-hero.png";
const output = "/home/ubuntu/aurelis-vpn-landing/client/src/lib/guardianEmbedded.ts";
const base64 = readFileSync(source).toString("base64");

writeFileSync(
  output,
  `/** Luminous Systems Atelier: bundled guardian fallback for browsers that cannot retrieve remote media. */\nexport const guardianEmbedded = \"data:image/png;base64,${base64}\";\n`,
);
