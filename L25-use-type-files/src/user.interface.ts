export interface UserMeta {
  name: string;
  lastName: string;
}

export interface User extends UserMeta {
  uuid: string,
}
