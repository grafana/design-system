import React, { useState } from 'react';
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
  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = async (data: Data) => {
    setIsSaving(true);
    try {
      // Simulating an asynchronous operation with a setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Show a success banner using AppEvents,
      // https://developers.grafana.com/ui/canary/index.html?path=/docs/overlays-alert-toast--docs#dos-1
    } catch (error) {
      // Show an error banner using AppEvents,
      // https://developers.grafana.com/ui/canary/index.html?path=/docs/overlays-alert-toast--docs#dos-1
      console.error('Error during async operation:', error);
    } finally {
      // This block will be executed regardless of success or failure
      setIsSaving(false);
    }
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
                <Input
                  {...register('text', { required: true })}
                  type="text"
                  id="text"
                  placeholder="A regular text input"
                />
              </Field>
              <Field
                label="Number input"
                description={'Used for numeric input'}
                invalid={!!errors.number}
                error="Enter a number greater than 0"
              >
                <Input
                  {...register('number', { min: 0 })}
                  type="number"
                  id="number"
                  placeholder="A regular number input"
                />
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
                    <Button type={'submit'}>{isSaving ? 'Saving...' : 'Submit'}</Button>
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
