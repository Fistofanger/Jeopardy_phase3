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
  image: string
}

export type QuestionId = Question['id'];

export type ActionTheme = {
  type: 'themes/load';
  payload: Theme[]
} | {
  type: 'themes/update';
  payload: QuestionId
}

export type ActionQuestion = {
  type: 'questions/update';
  payload: Question
}

export type ThemeState = {
  themes: Theme[];
};

export type QuestionState = {
  questions: Question[]
}

export type ThemesResponse = {
  message: string;
  themes: Theme[];
};
