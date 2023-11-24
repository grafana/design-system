import React from 'react';
import {
  Button,
  Checkbox,
  CollapsableSection,
  Field,
  Form,
  Input,
  InputControl,
  RadioButtonGroup,
  Select,
  Stack,
  Switch,
  TextArea,
} from '@grafana/ui';
import { Data } from '@site/src/components/templates/FormPage/types';

interface FormPageProps {}

export const FormPage = (props: FormPageProps) => {
  const handleSubmit = (data: Data) => {
    console.log(data);
  };

  const defaultValues: Data = {
    radio: 'option1',
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
              <Field
                label="Text input"
                description={'Used for regular text input'}
                required
                invalid={!!errors.text}
                error="This field is required"
              >
                <Input {...register('text')} type="text" id="text" placeholder="A regular text input" />
              </Field>
              <Field label="Number input">
                <Input {...register('number')} type="number" id="number" placeholder="A regular number input" />
              </Field>
              <Field label="Checkbox input">
                <Checkbox {...register('checkbox')} id="checkbox" />
              </Field>
              <Field label="Controlled Select">
                <InputControl
                  name={'select'}
                  control={control}
                  render={({ field: { ref, ...fieldProps } }) => {
                    return (
                      <Select
                        {...fieldProps}
                        options={[
                          { label: 'Option 1', value: 'option1' },
                          { label: 'Option 2', value: 'option2' },
                        ]}
                      />
                    );
                  }}
                />
              </Field>
              <Stack direction={'column'} gap={4}>
                <div>
                  <CollapsableSection label={'Show advanced options'} isOpen={false}>
                    <Field label="Textarea" description={'Used for long text input'}>
                      <TextArea {...register('textarea')} id="textarea" placeholder="A long text input" />
                    </Field>
                    <Field label="Radio group">
                      <InputControl
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
                        control={control}
                      />
                    </Field>
                    <Field label="Switch input">
                      <Switch {...register('switch')} id="switch" />
                    </Field>
                  </CollapsableSection>
                </div>
                <Stack gap={2}>
                  <Field>
                    <Button type={'submit'}>Submit</Button>
                  </Field>
                  <Field>
                    <Button variant={'secondary'}>Cancel</Button>
                  </Field>
                </Stack>
              </Stack>
            </>
          );
        }}
      </Form>
    </Stack>
  );
};

export default FormPage;
