export interface IDialogData {
  name: string;
  math?: number;
  number?: number;
  day?: number;
  month?: number;
}

export interface IResponseData {
  found: boolean;
  number: number;
  text: string;
  type: string;
  year?: number;
}