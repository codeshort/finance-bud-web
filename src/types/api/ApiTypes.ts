export const API_BASE_URL = 'https://pay-buddy.onrender.com/api/';
export type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  authToken?: string;
  queryParams?: Record<string, string>;
};
