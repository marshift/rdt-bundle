import { readFile } from "node:fs/promises";
import { build } from "esbuild";

const meta = await readFile("./package.json").then(JSON.parse);
const version = meta.dependencies["react-devtools-core"].replace(/\^|~/, "");

await build({
    entryPoints: ["in.js"],
    outfile: "dist/out.js",
    format: "iife",
    minify: true,
    bundle: true,
    legalComments: "none",
    define: {
        __rdtVersion: `"${version}"`,
    },
})
