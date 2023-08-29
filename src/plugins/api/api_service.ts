import axios, { AxiosRequestConfig } from 'axios'
const apiService = async (
  method: string,
  url: string,
  data: any,
  baseURL: string = 'http://localhost:6001'
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

export const getHello = (data: any) => {
  return apiService('GET','',data);
};

export const getProducts = (data: any) => {
  return apiService('GET','/api/v1/product',data);
};

export const getProduct = (id: number) => {
  return apiService('GET',`/api/v1/product/${id}`, {});
};

export const getTrendingProducts = (data: any) => {
  return apiService('GET','/api/v1/product/trending',data);
};

export const searchOrder = (id: number) => {
  return apiService('GET',`/api/v1/order/${id}`,{});
};

export const createOrder = (data: any) => {
  return apiService('POST','/api/v1/order',data);
};

export const updateOrder = (id: number, data: any) => {
  return apiService('PUT',`/api/v1/order/${id}`,data);
};

export const deleteOrder = (id: number) => {
  return apiService('DELETE',`/api/v1/order/${id}`,{});
};
