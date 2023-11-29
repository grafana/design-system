export type Data = {};

export type ValidationResult = {
  valid: boolean;
  errors?: string[];
};

export enum StepKey {
  Step1 = 'step1',
  Step2 = 'step2',
  Step3 = 'step3',
}
