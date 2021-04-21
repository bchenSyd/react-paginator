import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const pkg = require("./package.json");
const external = Object.keys(pkg.peerDependencies || {});

export default {
  input: `src/index.js`,
  external,
  output: [
    {
      format: "es",
      file: `es/optus-gel.esm.js`,
    },
    {
      format: "cjs",
      file: `dist/optus-gel.js`,
      exports:'named' // export.default = yourComponent ; when used by es module, do:  const Paginator = require('yourPackageName').default
      //exports:'default' //module.exports= yourComponent; when used by es module, do: const Pageinator = require('yourPackageName')
      // see babel-plugin-add-module-exports  
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
  ],
};
