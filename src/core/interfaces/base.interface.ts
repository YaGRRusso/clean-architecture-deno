export interface Error {
  code: string;
  message: string;
}

export interface BaseInput<T, TT> {
  data: T;
  repository: TT;
}

export interface BaseOutput<T> {
  data: T | null;
  error: Error | null;
}
