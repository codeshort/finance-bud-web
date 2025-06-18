export type ErrorResponse = {
  status: number;
  message: string;
  code: string;
};

export function isErrorResponse(response: unknown): response is ErrorResponse {
  return (
    typeof response === 'object' &&
    response !== null &&
    'code' in response &&
    'message' in response
  );
}
