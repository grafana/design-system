import { Data, SectionData, StepKey, ValidationResult } from '@site/src/components/templates/MultistepFormPage/types';
import { fields } from '@site/src/components/templates/MultistepFormPage/Steps/fields';

export type FormRequiredFields = Array<{
  step: StepKey;
  fields: Array<keyof Data>;
}>;

export const getFormRequiredFields = (fields: SectionData[]): FormRequiredFields => {
  return fields.map((section) => {
    const step: StepKey = section.id;
    const requiredFields: Array<keyof Data> = section.items
      .filter((item) => item.required)
      .map((item) => item.id as keyof Data);

    return { step, fields: requiredFields };
  });
};

const requiredFields = getFormRequiredFields(fields);

export const getValidationResults = (data: Data) => {
  return fields.reduce(
    (sum, curr) => {
      sum[curr.id] = { valid: true };
      const fields = requiredFields.find((field) => field.step === curr.id)?.fields;
      if (fields) {
        sum[curr.id].valid = fields.every((field: keyof Data) => data[field]);
      }
      return sum;
    },
    {} as Record<StepKey, ValidationResult>
  );
};
