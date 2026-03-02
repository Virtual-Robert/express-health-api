// =============================================================================
// Default ESLint Configuration (Flat Config — ESLint 9+)
// =============================================================================
// This is the fallback config used when a repo doesn't have its own.
// Intentionally lightweight — catches real bugs, not style opinions.
// Style is handled by Prettier (a separate deterministic step).
//
// When your repos mature, create per-repo eslint.config.mjs files
// that override this. The pipeline checks for a repo-level config first.
// =============================================================================

export default [
  {
    // Apply to all JS/TS files
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],

    // Ignore common non-source directories
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".next/**",
      "coverage/**",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      // --- Real bugs ---
      "no-undef": "error",                    // Using variables that don't exist
      "no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",              // Allow _unused params (common pattern)
        varsIgnorePattern: "^_",
      }],
      "no-constant-condition": "error",        // if (true) — almost always a mistake
      "no-dupe-keys": "error",                 // Duplicate keys in objects
      "no-duplicate-case": "error",            // Duplicate cases in switch
      "no-unreachable": "error",               // Code after return/throw
      "no-empty": "warn",                      // Empty blocks — usually forgotten code
      "no-debugger": "error",                  // Left-in debugger statements
      "no-console": "warn",                    // Flag console.log — not an error, just a nudge

      // --- Potential issues ---
      "eqeqeq": ["error", "always"],          // Force === over == (type coercion bugs)
      "no-var": "error",                       // Use let/const, not var
      "prefer-const": "warn",                  // Use const when variable isn't reassigned
      "no-throw-literal": "error",             // throw "string" → throw new Error("string")

      // --- Everything else is Prettier's job ---
      // No formatting rules here. Prettier handles all style.
    },
  },
];
