import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Define the AxiosClient interface
interface AxiosClient {
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

// Create an instance of Axios and implement the AxiosClient interface
const axiosClient: AxiosInstance & AxiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;