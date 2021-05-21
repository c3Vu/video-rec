export interface User {
  username?: string;
  password?: string;
  preference?: Preference;
}

export interface Preference {
  genre: string;
  actor: string;
  director: string;
}
