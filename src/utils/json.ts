export const toJson = (str: string) => {
  try {
    return JSON.parse(str)
  } catch (err) {
    return str
  }
}
