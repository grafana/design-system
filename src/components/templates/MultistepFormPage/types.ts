export type Data = {
  name: string;
  email: string;
  message: string;
  radio: string;
  text: string;
};

export type ValidationResult = {
  valid: boolean;
  errors?: string[];
};

export enum StepKey {
  Step1 = 'general',
  Step2 = 'additional',
  Step3 = 'preview',
}
