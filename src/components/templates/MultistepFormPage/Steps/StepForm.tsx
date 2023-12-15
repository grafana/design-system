import React, { PropsWithChildren } from 'react';
import { Button, Stack } from '@grafana/ui';
import { Data, StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { formSteps } from '@site/src/components/templates/MultistepFormPage/DataProvider';
import { useFormContext } from 'react-hook-form';

interface Props extends PropsWithChildren<any> {
  step: StepKey;
  onDataSubmit?: (data: Data) => void;
}

export const StepForm = ({ children, step, onDataSubmit }: Props) => {
  const { handleSubmit } = useFormContext<Data>();
  const onSubmit = (data: Data) => {
    if (step !== StepKey.Step3) {
      window.location.hash = '#' + getNextStep(step);
    }
    onDataSubmit?.(data);
  };

  const onPrevious = () => {
    window.location.hash = '#' + getPreviousStep(step);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '650px' }}>
      {children}
      <Stack gap={2}>
        {step !== StepKey.Step1 && (
          <Button variant="secondary" onClick={onPrevious}>
            Previous
          </Button>
        )}
        <Button type="submit">{step === StepKey.Step3 ? 'Submit' : 'Next'}</Button>
      </Stack>
    </form>
  );
};

const getNextStep = (step: StepKey) => {
  const index = formSteps.findIndex((s) => s.id === step);
  return formSteps[index + 1]?.id;
};

const getPreviousStep = (step: StepKey) => {
  const index = formSteps.findIndex((s) => s.id === step);
  return formSteps[index - 1]?.id;
};
