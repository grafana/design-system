/**
 * This template is using window.location.hash to store the current step.
 * In Grafana, we use react-router, but for this template we don't want to add
 * the complexity of a router. Instead, we use the hash to store the current step.
 */
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
  if (typeof window !== 'undefined') {
    window.location.hash = '#' + step;
  }
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

export const getStepUrl = (step: StepKey) => {
  return `#${step}`;
};

export const getActiveStep = () => {
  if (typeof window !== 'undefined') {
    const step = window.location.hash || '#step1';
    return step.replace('#', '');
  }
  return 'step1';
};
