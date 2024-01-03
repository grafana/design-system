import React, { useState } from 'react';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { getActiveStep, getStepUrl } from '@site/src/components/templates/MultistepFormPage/utils/steps';

interface DataProviderProps {
  children: React.ReactElement;
}

export const formSteps = [
  { id: StepKey.Step1, name: 'General information' },
  { id: StepKey.Step2, name: 'Additional information' },
  { id: StepKey.Step3, name: 'Preview' },
];

/**
 * A wrapper component to provide data and action props to the child components .
 *  Not part of the template.
 */
export const DataProvider = ({ children }: DataProviderProps) => {
  const [visitedSteps, setVisitedSteps] = useState<StepKey[]>([]);
  return React.cloneElement(children, {
    steps: formSteps,
    getStepUrl,
    activeStep: getActiveStep(),
    visitedSteps,
    setVisitedSteps,
  });
};
