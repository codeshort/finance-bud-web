import { API_BASE_URL, type RequestOptions } from '../types/api/ApiTypes';

export async function request(
  url: string,
  options: RequestOptions = {} as RequestOptions,
) {
  const fullUrl = `${API_BASE_URL}${url}`;
  const res = await fetch(fullUrl, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.authToken && {
        Authorization: `Bearer ${options.authToken}`,
      }),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    let errorBody;
    try {
      errorBody = await res.json();
    } catch {
      errorBody = {
        code: 'PARSE_ERROR',
        message: 'Unable to parse error response',
      };
    }

    throw {
      status: res.status,
      code: errorBody.code || 'UNKNOWN_ERROR',
      message: errorBody.message || 'An error occurred',
    };
  }
  return await res.json();
}
