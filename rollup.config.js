import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const pkg = require("./package.json");
const external = Object.keys(pkg.peerDependencies || {});

export default {
  input: `src/index.jsx`,
  external,
  output: [
    {
      format: "es",
      file: `es/paginator.es.js`,
    },
    {
      format: "cjs",
      file: `dist/paginator.js`,
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    resolve({
      extensions: [".js", ".jsx"],
      modulesOnly: true,
    }),
    commonjs(),
  ],
};
