import React from 'react';
import { Field, FieldSet, Input, RadioButtonGroup } from '@grafana/ui';
import { Controller, useFormContext } from 'react-hook-form';
import { StepForm } from '@site/src/components/templates/MultistepFormPage/Steps/StepForm';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';

export const AdditionalInfo = () => {
  const { register, control } = useFormContext();
  return (
    <StepForm step={StepKey.Step2}>
      <FieldSet label={'2. Additional Information'}>
        <Field label="Radio group">
          <Controller
            control={control}
            name="radio"
            render={({ field: { ref, ...field } }) => (
              <RadioButtonGroup
                {...field}
                fullWidth
                options={[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                ]}
              />
            )}
          />
        </Field>
        <Field label={'Text input'}>
          <Input {...register('text')} />
        </Field>
      </FieldSet>
    </StepForm>
  );
};
