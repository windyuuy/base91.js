const fs = require("fs")
const base91 = require("./base91.js")

let content = fs.readFileSync("./my_project_bg.wasm")
let str = base91.encode(content)
let exportContent = `export const wasmstr="${str}"\n`
fs.writeFileSync("wasmexport.ts", exportContent, "utf8")