// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NASA_API_KEY: string,
  readonly VITE_NASA_API: string,
  readonly VITE_NASA_FIRST_APOD_DATE: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}