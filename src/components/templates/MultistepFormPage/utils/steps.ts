import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { formSteps } from '@site/src/components/templates/MultistepFormPage/DataProvider';

export const getNextStep = (step: StepKey) => {
  const index = formSteps.findIndex((s) => s.id === step);
  return formSteps[index + 1]?.id;
};

export const getPreviousStep = (step: StepKey) => {
  const index = formSteps.findIndex((s) => s.id === step);
  return formSteps[index - 1]?.id;
};

export const goToStep = (step: StepKey) => {
  window.location.hash = '#' + getPreviousStep(step);
};

export const goToNextStep = (step: StepKey) => {
  goToStep(getNextStep(step));
};

export const goToPreviousStep = (step: StepKey) => {
  goToStep(getPreviousStep(step));
};

export const isLastStep = (step: StepKey) => {
  return getNextStep(step) === undefined;
};

export const isFirstStep = (step: StepKey) => {
  return getPreviousStep(step) === undefined;
};
