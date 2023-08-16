import axios, { AxiosRequestConfig } from 'axios'
const apiService = async (
  method: string,
  url: string,
  data: any,
  baseURL: string = 'http://localhost:3000'
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    throw error
  }
}
