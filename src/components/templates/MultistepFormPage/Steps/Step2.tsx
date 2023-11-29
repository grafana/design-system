import React from 'react';
import { Field, FieldSet, Form, Input } from '@grafana/ui';

export const Step2 = () => {
  const handleSubmit = (data: any) => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register }) => {
        return (
          <FieldSet label={'Step 2'}>
            <Field label={'Name'}>
              <Input {...register('name')} />
            </Field>
          </FieldSet>
        );
      }}
    </Form>
  );
};
