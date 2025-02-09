import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Disable the require() rule for TypeScript files
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "app/(main)/(components)/waves-bg.tsx"], // Ignore Next.js build files and dependencies
  },
];

export default eslintConfig;
