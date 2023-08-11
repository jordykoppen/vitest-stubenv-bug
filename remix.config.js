/* eslint-disable camelcase */
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: "/vitest-stubenv-bug/build/",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["worker"],
  serverMainFields: ["browser", "module", "main"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverDependenciesToBundle: "all",
  serverMinify: true,
  server: "./app/server.js",
  assetsBuildDirectory: "public/vitest-stubenv-bug/build",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  watchPaths: ["node_modules/@dotcom/**"],
  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
  },
};
