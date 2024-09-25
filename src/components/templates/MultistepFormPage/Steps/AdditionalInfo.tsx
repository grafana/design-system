import React from 'react';
import { Field, FieldSet, Input, RadioButtonGroup, Slider } from '@elastiflow/epic-ui';
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
                  { label: 'Option 3', value: 'option3' },
                ]}
              />
            )}
          />
        </Field>
        <Field label={'Text input'}>
          <Input {...register('text')} />
        </Field>
        <Field label={'Slider'}>
          <Controller
            control={control}
            name="slider"
            render={({ field: { ref, ...field } }) => {
              return <Slider {...field} min={1} max={3} step={1} included={false} />;
            }}
          />
        </Field>
      </FieldSet>
    </StepForm>
  );
};
