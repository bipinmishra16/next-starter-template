import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "react/react-in-jsx-scope": "off",

      "@next/next/no-img-element": "warn",

      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
]);

export default eslintConfig;
