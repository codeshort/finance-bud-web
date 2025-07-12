export enum ToastType {
  SUCCESS = 'success-toast',
  ERROR = 'error-toast',
  INFO = 'info-toast',
}

export type Toast = {
  id: number;
  message: string;
  type: ToastType;
};
