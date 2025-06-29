export type UserPayload = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginResponse = {
  userId: string;
  username: string;
  accessToken: string;
  refreshToken: string;
};
