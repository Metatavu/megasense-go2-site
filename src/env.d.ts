/// <reference types="astro/client" />

interface ImportMetaEnv {
  // PUBLIC ENV VARIABLE DEFINITIONS HERE
  readonly PUBLIC_VIDEO_URL_WEBM: string;
  readonly PUBLIC_VIDEO_URL_MP4: string;
  readonly PUBLIC_VIDEO_PLACEHOLDER: string;
  readonly PUBLIC_SUBTITLES_URL: string;
  readonly PUBLIC_SUPPORT_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}