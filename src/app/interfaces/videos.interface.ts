export interface Video {
  id?: number;
  title?: string;
  image?: string;
  rating?: number;
  director?: string[];
  imdbid?: string;
  genre?: string[];
  date?: string;
  length?: number;
  stars?: string[];
  intro?: string;
  language?: string[];
  liked?: boolean;
}

export type Videos = Video[];
