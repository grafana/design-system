import React, { PropsWithChildren } from 'react';
import { Button, Stack } from '@grafana/ui';
import { Data, StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { useFormContext } from 'react-hook-form';
import {
  goToNextStep,
  goToPreviousStep,
  isFirstStep,
  isLastStep,
} from '@site/src/components/templates/MultistepFormPage/utils/steps';

interface Props
  extends PropsWithChildren<{
    step: StepKey;
    onDataSubmit?: (data: Data) => void;
  }> {}

export const StepForm = ({ children, step, onDataSubmit }: Props) => {
  const { handleSubmit } = useFormContext<Data>();

  const onSubmit = (data: Data) => {
    if (!isLastStep(step)) {
      goToNextStep(step);
    }
    onDataSubmit?.(data);
  };

  const onPrevious = () => {
    goToPreviousStep(step);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '650px' }}>
      {children}
      <Stack gap={2}>
        {!isFirstStep(step) && (
          <Button variant="secondary" onClick={onPrevious}>
            Previous
          </Button>
        )}
        <Button type="submit">{isLastStep(step) ? 'Submit' : 'Next'}</Button>
      </Stack>
    </form>
  );
};
