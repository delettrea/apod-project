export async function fetcher<JSON = never>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res: Response = await fetch(input, init)
  return res.json();
}