export interface User {
  username?: string;
  password?: string;
  preference?: Preference;
  nickname?: string;
  email?: string;
}

export interface Preference {
  genre: string;
  actor: string;
  director: string;
}
