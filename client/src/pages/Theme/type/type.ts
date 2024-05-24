export type Theme = {
  id: number;
  name: string;
  Questions: Question[]
};

export type ThemeId = Theme['id'];

export type Question = {
  id: number;
  question: string;
  answer: string;
  themeId: ThemeId;
  score: number;
  isAnswered: boolean
}

export type QuestionId = Question['id'];

export type ActionTheme = {
  type: 'themes/load';
  payload: Theme[]
}

export type ThemeState = {
  themes: Theme[] ;
};

export type ThemesResponse = {
  message: string;
  themes: Theme[];
};
