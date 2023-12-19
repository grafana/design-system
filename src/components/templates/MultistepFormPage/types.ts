export type Data = {
  name: string;
  email: string;
  message: string;
  radio: string;
  text: string;
  slider: number;
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

export type SectionData = {
  id: StepKey;
  label: string;
  items: Array<{ id: keyof Data; label: string; required: boolean }>;
};
