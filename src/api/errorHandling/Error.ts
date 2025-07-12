import type { ErrorCode, ErrorResponse } from '../../types/api/ErrorTypes';
import CustomError from '../../utils/ErrorUtils';

export function errorHandler(error: ErrorResponse) {
  const customError = new CustomError(error.code as ErrorCode, error.message);
  throw customError;
}
