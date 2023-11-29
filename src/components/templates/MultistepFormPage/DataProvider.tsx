import React, { useState } from 'react';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';

interface DataProviderProps {
  children: React.ReactElement;
}

export const formSteps = [
  { id: StepKey.Step1, name: 'Step 1' },
  { id: StepKey.Step2, name: 'Step 2' },
  { id: StepKey.Step3, name: 'Step 3' },
];

const validationResults = {
  [StepKey.Step1]: { valid: true },
  [StepKey.Step2]: { valid: true },
  [StepKey.Step3]: { valid: true },
};
/**
 * A wrapper component to provide data and action props to the child components .
 *  Not part of the template.
 */
export const DataProvider = ({ children }: DataProviderProps) => {
  return React.cloneElement(children, { steps: formSteps, validationResults });
};
