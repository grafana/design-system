import { css, cx } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2, Icon } from '@grafana/ui';

import { ValidationResult } from './types';

export interface Step<T> {
  id: T;
  name: string;
}

export interface Props<T extends string | number> {
  activeStep?: T;
  onStepChange: (step: T) => void;
  reportId?: string;
  visitedSteps?: T[];
  steps: Array<Step<T>>;
  validationResults: Record<T, ValidationResult>;
  getNextUrl: (step: T) => string;
}

export function Stepper<T extends string | number>({
  validationResults,
  onStepChange,
  visitedSteps = [],
  getNextUrl,
  steps,
  activeStep = steps[0]?.id,
}: Props<T>) {
  const styles = useStyles2(getStyles);
  const lastStep = steps[steps.length - 1];

  return (
    <ol className={styles.container}>
      {steps.map((step) => {
        const isLast = step.id === lastStep.id;
        const isActive = step.id === activeStep;
        const isVisited = visitedSteps.includes(step.id) || activeStep === lastStep.id;
        const hasMissingFields = !isLast && !validationResults[step.id].valid;
        const showIndicator = !isActive && !isLast && isVisited;
        const successField = showIndicator && !hasMissingFields;
        const warnField = showIndicator && hasMissingFields;
        const itemStyles = cx(styles.item, {
          [styles.active]: isActive,
          [styles.successItem]: successField,
          [styles.warnItem]: warnField,
        });

        return (
          <li key={step.id} className={itemStyles}>
            {successField && <Icon name={'check'} size={'xl'} className={styles.successItem} />}
            {warnField && <Icon name={'exclamation-triangle'} className={styles.warnItem} />}
            <a
              onClick={!isActive ? () => onStepChange(step.id) : undefined}
              href={getNextUrl(step.id)}
              className={styles.link}
            >
              {step.name}
            </a>
            {!isLast && <div className={styles.divider}>&#8212;</div>}
          </li>
        );
      })}
    </ol>
  );
}

const getStyles = (theme: GrafanaTheme2) => {
  return {
    container: css`
      counter-reset: item;
      list-style-type: none;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      border: 1px solid ${theme.colors.border.weak};
      margin: ${theme.spacing(4, 0)};
    `,
    item: css`
      color: ${theme.colors.text.secondary};
      display: flex;
      align-items: center;
    `,
    successItem: css`
      a {
        &::before {
          content: '';
        }
      }

      svg {
        color: ${theme.colors.success.text};
        margin: ${theme.spacing(0, 0.5, 0, -1)};
      }
    `,
    warnItem: css`
      a::before {
        content: '';
      }
      svg {
        color: ${theme.colors.warning.text};
        margin: ${theme.spacing(0, 1, 0.5, -0.5)};
      }
    `,
    link: css`
      color: inherit;
      &:hover {
        color: ${theme.colors.text.link};
      }

      &::before {
        content: counter(item) '  ';
        counter-increment: item;
      }
    `,
    active: css`
      font-weight: 500;
      color: ${theme.colors.text.maxContrast};

      &::before {
        font-weight: 500;
      }
    `,
    divider: css`
      padding: ${theme.spacing(2)};
    `,
  };
};
