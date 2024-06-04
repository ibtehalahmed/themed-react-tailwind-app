import merge from "deepmerge";
import { Config } from "tailwindcss";


const reactComponentsTailwindConfig: Config = {
  theme: {
    extend: {
      transitionProperty: { width: "width" },
    },
  },
  content: [
    // Add content
  ],
};

/**
 * Merge @dolthub/react-components and Tailwind CSS configurations
 */
export function mergeConfig(tailwindConfig: Config): Config {
  const merged = merge(reactComponentsTailwindConfig, { ...tailwindConfig });
  return merged;
}