export type Language = {
  id: number;
  name: string;
};

export type Lecturer = {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  description: string;
  languages: Array<number>;
};

export type Lecturers = Array<Lecturer>;

export type Languages = Array<Language>;

export type Data = {
  Lecturers: Lecturers;
  Languages: Languages;
};
