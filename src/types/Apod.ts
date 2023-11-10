export type Apod = {
  copyright?: string,
  date: string,
  explanation: string,
  hdurl?: string,
  url: string,
  media_type: 'image' | 'video',
  service_version: string,
  title: string,
  thumbnail_url?: string,
}