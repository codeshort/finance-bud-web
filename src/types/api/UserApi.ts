export type UserPayload = {
  name?: string;
  email: string;
  password: string;
};

export type UserLoginResponse = {
  userId?: string;
  username?: string;
  access_token: string;
  refresh_token: string;
};
