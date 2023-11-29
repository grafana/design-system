import React from 'react';
import { Stack } from '@grafana/ui';
import { Stepper } from '@site/src/components/templates/MultistepFormPage/Stepper';
import { StepKey, ValidationResult } from '@site/src/components/templates/MultistepFormPage/types';

interface MultistepFormPageProps {
  steps: Array<{ id: StepKey; name: string }>;
  validationResults: Record<StepKey, ValidationResult>;
}

export const MultistepFormPage = ({ steps, validationResults }: MultistepFormPageProps) => {
  return (
    <Stack grow={1} direction={'column'}>
      <Stepper onStepChange={() => {}} steps={steps} validationResults={validationResults} getNextUrl={() => {}} />
    </Stack>
  );
};

export default MultistepFormPage;
