import path from "path";
import { type Configuration } from "webpack";

export default {
  mode: "development",
  entry: path.resolve(__dirname, "./src/client/index.tsx"),
  output: {
    path: path.resolve(__dirname, "public/js"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  devtool: "eval",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    ],
  },
} as Configuration;
