import React from 'react';
import { Stack } from '@grafana/ui';
import { Stepper } from '@site/src/components/templates/MultistepFormPage/Stepper';
import { StepKey, ValidationResult } from '@site/src/components/templates/MultistepFormPage/types';
import { Step } from '@site/src/components/templates/MultistepFormPage/Steps/Step';

import { useForm, FormProvider } from 'react-hook-form';

interface MultistepFormPageProps {
  steps: Array<{ id: StepKey; name: string }>;
  validationResults: Record<StepKey, ValidationResult>;
  getStepUrl: (id?: string | number) => string;
  activeStep: StepKey;
}

export const MultistepFormPage = ({ steps, validationResults, getStepUrl, activeStep }: MultistepFormPageProps) => {
  const methods = useForm();

  return (
    <Stack grow={1} direction={'column'}>
      <FormProvider {...methods}>
        <Stepper
          onStepChange={() => {}}
          activeStep={activeStep}
          steps={steps}
          validationResults={validationResults}
          getNextUrl={getStepUrl}
        />
        <Step activeStep={activeStep} />
      </FormProvider>
    </Stack>
  );
};

export default MultistepFormPage;
