import type { ErrorResponse } from '../../types/api/ErrorTypes';

export function errorHandler(error: ErrorResponse) {
  console.log(error);
}
