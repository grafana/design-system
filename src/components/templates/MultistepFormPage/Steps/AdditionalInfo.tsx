import React from 'react';
import { Field, FieldSet, Form, Input } from '@grafana/ui';

export const AdditionalInfo = () => {
  const handleSubmit = (data: any) => {};
  return (
    <Form onSubmit={handleSubmit}>
      {({ register }) => {
        return (
          <FieldSet label={'2. Additional Information'}>
            <Field label={'Name'}>
              <Input {...register('name')} />
            </Field>
          </FieldSet>
        );
      }}
    </Form>
  );
};
