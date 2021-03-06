import { apiKey } from '../config/apiKey'

export const getLatest = async () => {
  const response = await window.fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
  const jsonData = response.json()
  if (!response.ok) {
    throw new Error(jsonData, response.statusCode)
  }
  return jsonData
}
