import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // React specific rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // General rules
      "prefer-const": "error",
      "no-var": "error",
      
      // Import rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external", 
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ]
    }
  }
];

export default eslintConfig;