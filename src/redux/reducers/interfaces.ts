import { ACTION_TYPES } from "./quizReducer";

export interface QuestionResponse {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: CorrectAnswer;
  incorrect_answers: CorrectAnswer[];
}

export enum CorrectAnswer {
  False = "False",
  True = "True"
}

export enum Difficulty {
  Hard = "hard"
}

export enum Type {
  Boolean = "boolean"
}

export interface BoxScoreProp {
  current: number;
  questionsLength: number;
}

export interface QuestionListProps {
  questions: Result[];
  current: number;
}

export interface QuizResult {
  question: string;
  correct: boolean;
}

interface GetAllQuestionsAction {
    type: typeof ACTION_TYPES.FETCH_QUESTIONS,
    questions: Promise<any>
}

interface AnswerQuestionAction {
    type: typeof ACTION_TYPES.ANSWER_QUESTION,
    quizResult: QuizResult
}

interface SetCurrentAction {
    type: typeof ACTION_TYPES.SET_CURRENT
}

interface UpdatePointsAction {
    type: typeof ACTION_TYPES.UPDATE_POINTS
}

interface ResetQuizAction {
    type: typeof ACTION_TYPES.RESET_QUIZ
}

export type QuizTypes =
  | GetAllQuestionsAction
  | AnswerQuestionAction
  | SetCurrentAction
  | UpdatePointsAction
  | ResetQuizAction;
