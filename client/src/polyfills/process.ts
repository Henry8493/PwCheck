// Provide a minimal `process` shim so browser runtimes (especially Safari or embedded webviews)
// don't crash when dependencies check `process.env`.
if (typeof globalThis.process === "undefined") {
  (globalThis as any).process = { env: {} };
} else if (typeof (globalThis as any).process.env === "undefined") {
  (globalThis as any).process.env = {};
}
