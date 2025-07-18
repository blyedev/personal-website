/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard", // Default config
    "stylelint-config-recommended-vue", // Vue specific config
    "stylelint-config-clean-order/error", // Order css declarations
  ],
  rules: {
    "order/order": [
      [
        { type: "at-rule", name: "import" },
        { type: "at-rule", name: "forward" },
        { type: "at-rule", name: "use" },
        "dollar-variables",
        "at-variables",
        "custom-properties",
        { type: "at-rule", name: "custom-media" },
        { type: "at-rule", name: "function" },
        { type: "at-rule", name: "mixin" },
        { type: "at-rule", name: "extend" },
        "declarations",
        {
          type: "rule",
          selector: /^&::[\w-]+/,
          hasBlock: true,
        },
        { type: "at-rule", name: "media", hasBlock: true },
        "rules",
      ],
    ],
  },
  ignoreFiles: [
    "**/.nuxt/**",
    "**/.output/**",
    "**/node_modules/**",
    "**/dist/**",
  ],
};
