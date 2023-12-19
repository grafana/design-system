import React, { useEffect } from 'react';
import { Stack } from '@grafana/ui';
import { Stepper } from '@site/src/components/templates/MultistepFormPage/Stepper';
import { Data, StepKey, ValidationResult } from '@site/src/components/templates/MultistepFormPage/types';
import { Step } from '@site/src/components/templates/MultistepFormPage/Steps/Step';

import { useForm, FormProvider } from 'react-hook-form';
import { getValidationResults } from '@site/src/components/templates/MultistepFormPage/Steps/validation';

interface MultistepFormPageProps {
  steps: Array<{ id: StepKey; name: string }>;
  validationResults: Record<StepKey, ValidationResult>;
  getStepUrl: (id?: string | number) => string;
  activeStep: StepKey;
  setVisitedSteps: (steps: StepKey[]) => void;
  visitedSteps: StepKey[];
}

export const defaultFormData: Data = {
  name: '',
  email: '',
  message: '',
  radio: 'option1',
  text: '',
  slider: 1,
};

export const MultistepFormPage = ({
  steps,
  getStepUrl,
  activeStep,
  setVisitedSteps,
  visitedSteps,
}: MultistepFormPageProps) => {
  const methods = useForm({ defaultValues: defaultFormData, reValidateMode: 'onBlur' });

  useEffect(() => {
    if (!visitedSteps.includes(activeStep)) {
      setVisitedSteps([...visitedSteps, activeStep]);
    }
  }, [activeStep]);

  return (
    <Stack direction={'column'}>
      <FormProvider {...methods}>
        <Stepper
          onStepChange={() => {}}
          activeStep={activeStep}
          steps={steps}
          validationResults={getValidationResults(methods.getValues())}
          getNextUrl={getStepUrl}
          visitedSteps={visitedSteps}
        />
        <Step activeStep={activeStep} />
      </FormProvider>
    </Stack>
  );
};

export default MultistepFormPage;
