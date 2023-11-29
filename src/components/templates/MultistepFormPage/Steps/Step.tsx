import React from 'react';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { Step2 } from '@site/src/components/templates/MultistepFormPage/Steps/Step2';
import { Step1 } from '@site/src/components/templates/MultistepFormPage/Steps/Step1';
import { Step3 } from '@site/src/components/templates/MultistepFormPage/Steps/Step3';

const stepComponents = {
  [StepKey.Step1]: Step1,
  [StepKey.Step2]: Step2,
  [StepKey.Step3]: Step3,
};

interface StepProps {
  activeStep: StepKey;
}
export const Step = ({ activeStep }: StepProps) => {
  const Component = stepComponents[activeStep] || Step1;

  return <Component />;
};
