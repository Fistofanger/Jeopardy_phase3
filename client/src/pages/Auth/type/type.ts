export type User = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

export type UserWithoutId = Omit<User, 'id'>;

export type UserId = User['id'];

export type ActionUser =
  | { type: 'users/registration'; payload: User }
  | { type: 'users/login'; payload: User }
  | { type: 'users/logout' };

export type UsersState = {
  user: User | undefined;
};

export type UsersResponse = {
  message: string;
  user: User;
  accessToken: string;
};
