import { contextBridge } from 'electron';

// This line is needed due to "module" not being available in
// sandboxed preload script, and webpack tries to define module.exports
// resulting in error "module is not defined"
// @ts-ignore
globalThis.module = {};

contextBridge.exposeInMainWorld('electron', {});
