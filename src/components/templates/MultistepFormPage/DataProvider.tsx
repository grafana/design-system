import React, { useState } from 'react';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';

const BASE_URL = 'multistep-form-page';

interface DataProviderProps {
  children: React.ReactElement;
}

export const formSteps = [
  { id: StepKey.Step1, name: 'General information' },
  { id: StepKey.Step2, name: 'Additional information' },
  { id: StepKey.Step3, name: 'Preview' },
];

export const getStepUrl = (step: StepKey) => {
  return `${BASE_URL}#${step}`;
};

const getActiveStep = () => {
  const step = window.location.hash || '#step1';
  return step.replace('#', '');
};

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
