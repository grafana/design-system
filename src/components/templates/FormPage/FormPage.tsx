import React from 'react';
import { Checkbox, Field, Form, Input, InputControl, Select, Stack } from '@grafana/ui';
import { Data } from '@site/src/components/templates/FormPage/types';

interface FormPageProps {}

export const FormPage = (props: FormPageProps) => {
  const handleSubmit = (data: Data) => {
    console.log(data);
  };

  const defaultValues: Data = {
    radio: '',
    slider: 0,
    switch: false,
    textarea: '',
    text: '',
    select: { value: 'option1', label: 'Option 1' },
    number: 0,
    checkbox: false,
  };

  return (
    <Stack grow={1} direction={'column'}>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
        {({ register, errors, control }) => {
          return (
            <>
              <Field label="Text input" required invalid={!!errors.text} error="This field is required">
                <Input {...register('text')} type="text" id="text" placeholder="A regular text input" />
              </Field>
              <Field label="Number input">
                <Input {...register('number')} type="number" id="number" placeholder="A regular number input" />
              </Field>
              <Field label="Checkbox input">
                <Checkbox {...register('checkbox')} id="checkbox" />
              </Field>
              <Field label="Controlled Seelct">
                <InputControl
                  name={'select'}
                  control={control}
                  render={({ field: { ref, value, ...fieldProps } }) => {
                    return (
                      <Select
                        {...fieldProps}
                        options={[
                          { label: 'Option 1', value: 'option1' },
                          { label: 'Option 2', value: 'option2' },
                        ]}
                        defaultValue={value}
                      />
                    );
                  }}
                />
              </Field>
            </>
          );
        }}
      </Form>
    </Stack>
  );
};

export default FormPage;
