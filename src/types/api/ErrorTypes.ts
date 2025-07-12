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

export enum ErrorCode {
  ALREADY_EXISTS = 'ALREADY_EXISTS',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  PASSWORD_MISMATCH = 'PASSWORD_MISMATCH',
  SERVER_ERROR = 'SERVER_ERROR',
  DEFAULT = 'DEFAULT',
  PARSE_ERROR = 'PARSE_ERROR',
}
