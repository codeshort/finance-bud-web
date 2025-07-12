import { userStore } from '../stores/UserStore/UserStore';
import { isErrorResponse, type ErrorResponse } from '../types/api/ErrorTypes';
import type { UserLoginResponse, UserPayload } from '../types/api/UserApi';
import type { UserDetails } from '../types/stores/UserTypes';
import { errorHandler } from './errorHandling/Error';
import { request } from './FetchClient';

export async function addUser(user: UserPayload) {
  const response: UserLoginResponse | ErrorResponse = await request(
    'users/register',
    {
      method: 'POST',
      body: user,
    },
  );
  if (isErrorResponse(response)) {
    errorHandler(response);
  } else {
    const userDetails: UserDetails = {
      id: response.userId || '',
      username: response.username || '',
      email: user.email,
    };
    userStore.setCurrentUser(userDetails);
    userStore.setAuthToken(response['access_token']);
  }
}

export const loginUser = async (user: UserPayload) => {
  const response: UserLoginResponse | ErrorResponse = await request(
    'users/login',
    {
      method: 'POST',
      body: user,
    },
  );

  if (isErrorResponse(response)) {
    errorHandler(response);
  } else {
    const userDetails: UserDetails = {
      id: response.userId || '',
      username: user.name || '',
      email: user.email,
    };
    userStore.setCurrentUser(userDetails);
    userStore.setAuthToken(response['access_token']);
  }
};
