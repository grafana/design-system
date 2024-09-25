import React, { useEffect } from 'react';
import { Stack } from '@elastiflow/epic-ui';
import { Stepper } from '@site/src/components/templates/MultistepFormPage/Stepper';
import { Data, StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { Step } from '@site/src/components/templates/MultistepFormPage/Steps/Step';

import { useForm, FormProvider } from 'react-hook-form';
import { getValidationResults } from '@site/src/components/templates/MultistepFormPage/utils/validation';

interface MultistepFormPageProps {
  steps: Array<{ id: StepKey; name: string }>;
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
  const methods = useForm({ defaultValues: defaultFormData, mode: 'onBlur' });

  useEffect(() => {
    if (!visitedSteps.includes(activeStep)) {
      setVisitedSteps([...visitedSteps, activeStep]);
    }
  }, [activeStep]);

  return (
    <Stack direction={'column'}>
      <FormProvider {...methods}>
        <Stepper
          // Prevent the user from moving to the next step if there are form errors
          onStepChange={(_, event) => {
            if (!!Object.keys(methods.formState.errors).length) {
              event?.preventDefault();
            }
          }}
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
