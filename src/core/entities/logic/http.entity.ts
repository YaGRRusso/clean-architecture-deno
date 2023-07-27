export interface Params {
  [key: string]: string | undefined;
}

export interface Queries {
  [key: string]: string | undefined;
}

export interface Body {
  fields?: {
    [key: string]: string | undefined;
  };
  files?: {
    [key: string]: File | undefined;
  };
}
