import { ErrorCode } from '../../types/api/ErrorTypes';

export const ErrorCodeToUserMessage: Partial<Record<ErrorCode, string>> = {
  [ErrorCode.ALREADY_EXISTS]: 'User already exists, please login',
  [ErrorCode.USER_NOT_FOUND]: 'User not found, please signup',
  [ErrorCode.INVALID_CREDENTIALS]:
    'Invalid credentials, please check your email and password',
  [ErrorCode.PASSWORD_MISMATCH]: 'Passwords do not match',
  [ErrorCode.SERVER_ERROR]: 'We are facing some issues, please try again later',
  [ErrorCode.DEFAULT]: 'Something went wrong, please try again later',
};
