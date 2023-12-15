import React from 'react';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { AdditionalInfo } from '@site/src/components/templates/MultistepFormPage/Steps/AdditionalInfo';
import { GeneralInfo } from '@site/src/components/templates/MultistepFormPage/Steps/GeneralInfo';
import { Preview } from '@site/src/components/templates/MultistepFormPage/Steps/Preview';

const stepComponents = {
  [StepKey.Step1]: GeneralInfo,
  [StepKey.Step2]: AdditionalInfo,
  [StepKey.Step3]: Preview,
};

interface StepProps {
  activeStep: StepKey;
}
export const Step = ({ activeStep }: StepProps) => {
  const Component = stepComponents[activeStep] || GeneralInfo;

  return <Component />;
};
