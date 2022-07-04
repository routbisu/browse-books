const baseUrl = process.env.REACT_APP_BASE_URL

/** Get a JSON response for a HTTP end-point */
export const getData = async (url: string) => {
  // Added delay to simulate a real world production API
  await new Promise((r) => setTimeout(r, 700))
  const result = await fetch(`${baseUrl}/${url}`)
  return result.json()
}
