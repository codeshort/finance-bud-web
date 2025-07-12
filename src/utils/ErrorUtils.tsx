import { ErrorCodeToUserMessage } from '../configs/errors/ErrorMappings';
import { ErrorCode } from '../types/api/ErrorTypes';

function getErrorMessage(errorCode: ErrorCode) {
  return (
    ErrorCodeToUserMessage[errorCode] ??
    'Something went wrong, please try again later'
  );
}

class CustomError extends Error {
  errorCode: ErrorCode;
  errorUserMessage: string;
  errorMessage: string;

  constructor(errorCode: ErrorCode, message: string) {
    super(message);
    this.errorCode = errorCode;
    this.errorUserMessage = getErrorMessage(errorCode);
    this.errorMessage = message;
  }
}

export default CustomError;
