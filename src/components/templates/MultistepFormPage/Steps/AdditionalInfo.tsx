import React from 'react';
import { Button, Field, FieldSet, Input, RadioButtonGroup, Stack } from '@grafana/ui';
import { useFormContext, Controller } from 'react-hook-form';

export const AdditionalInfo = () => {
  const { register, handleSubmit, control } = useFormContext();
  const onSubmit = (data: any) => {
    window.location.hash = '#preview';
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Stack gap={2}>
        <Button type="submit">Next</Button>
        <Button variant="secondary">Previous</Button>
      </Stack>
    </form>
  );
};
