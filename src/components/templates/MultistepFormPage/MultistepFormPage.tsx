import React from 'react';
import { Stack } from '@grafana/ui';
import { Stepper } from '@site/src/components/templates/MultistepFormPage/Stepper';
import { StepKey, ValidationResult } from '@site/src/components/templates/MultistepFormPage/types';
import { Step } from '@site/src/components/templates/MultistepFormPage/Steps/Step';

interface MultistepFormPageProps {
  steps: Array<{ id: StepKey; name: string }>;
  validationResults: Record<StepKey, ValidationResult>;
  getStepUrl: (id?: string | number) => string;
  activeStep: StepKey;
}

export const MultistepFormPage = ({ steps, validationResults, getStepUrl, activeStep }: MultistepFormPageProps) => {
  return (
    <Stack grow={1} direction={'column'}>
      <Stepper onStepChange={() => {}} steps={steps} validationResults={validationResults} getNextUrl={getStepUrl} />
      <Step activeStep={activeStep} />
    </Stack>
  );
};

export default MultistepFormPage;
