// import { QuartzPlugin } from "@quartz/plugins"
// import fs from "fs"
// import path from "path"

// export const FilterSecretPlugin: QuartzPlugin = {
//   name: "filter-secret",
//   build: async ({ contentDir }: { contentDir: string }) => {
//     const walkDir = (dir: string) => {
//       const files = fs.readdirSync(dir)
//       for (const file of files) {
//         const fullPath = path.join(dir, file)
//         const stat = fs.statSync(fullPath)
//         if (stat.isDirectory()) {
//           walkDir(fullPath)
//         } else if (file.endsWith(".md")) {
//           let markdown = fs.readFileSync(fullPath, "utf-8")
//           markdown = markdown.replace(
//             /<!--\s*secret:start\s*-->[\s\S]*?<!--\s*secret:end\s*-->/gi,
//             ""
//           )
//           fs.writeFileSync(fullPath, markdown, "utf-8")
//         }
//       }
//     }
//     walkDir(contentDir)
//   },
// }


// export const FilterSecretPlugin = () => ({
//   name: "FilterSecretPlugin",
//   textTransform: (text: string) => {
//     // Rimuove blocchi racchiusi tra <!-- secret:start --> e <!-- secret:end -->
//     return text.replace(
//       /<!--\s*secret:start\s*-->[\s\S]*?<!--\s*secret:end\s*-->/g,
//       ""
//     )
//   },
// })


// plugins/filterSecret.ts
import { QuartzTransformerPlugin } from "../quartz/plugins/types"

export const FilterSecretPlugin: QuartzTransformerPlugin = () => {
  return {
    // il nome non va nell’oggetto, ma come proprietà della funzione stessa
    name: "FilterSecretPlugin",
    textTransform(ctx, src) {
      return src.replace(
        /<!--\s*secret:start\s*-->[\s\S]*?<!--\s*secret:end\s*-->/gi,
        ""
      )
    },
  }
}