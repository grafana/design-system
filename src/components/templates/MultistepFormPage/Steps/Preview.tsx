import React from 'react';
import { Box, FieldSet, Icon, LinkButton, Text, useStyles2 } from '@grafana/ui';
import { useFormContext } from 'react-hook-form';
import { css, cx } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { Data, StepKey } from '@site/src/components/templates/MultistepFormPage/types';
import { StepForm } from '@site/src/components/templates/MultistepFormPage/Steps/StepForm';

type SectionData = {
  id: StepKey;
  label: string;
  items: Array<{ id: keyof Data; label: string; required: boolean }>;
};

const fields: SectionData[] = [
  {
    id: StepKey.Step1,
    label: 'General Information',
    items: [
      {
        id: 'name',
        label: 'Name',
        required: true,
      },
      { id: 'email', label: 'Email', required: false },
      { id: 'message', label: 'Message', required: false },
    ],
  },
  {
    id: StepKey.Step2,
    label: 'Additional Information',
    items: [
      {
        id: 'radio',
        label: 'Radio group',
        required: false,
      },
      { id: 'text', label: 'Text input', required: false },
    ],
  },
];

export const Preview = () => {
  const { getValues } = useFormContext<Data>();
  const styles = useStyles2(getStyles);
  const data = getValues();

  const onSubmit = (data: Data) => {
    console.log('saving data', data);
  };

  return (
    <StepForm step={StepKey.Step3} onDataSubmit={onSubmit}>
      <FieldSet label={'3. Preview'}>
        {fields.map((section) => {
          return (
            <Box marginBottom={3} paddingY={3} key={section.id}>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={1}
                borderColor={'weak'}
                borderStyle={'solid'}
              >
                <Text element={'h6'}>{section.label}</Text>
                <LinkButton variant={'secondary'} fill={'text'} href={''} size={'sm'}>
                  Edit
                </LinkButton>
              </Box>
              {section.items.map(({ id, label, required }) => {
                const value = data[id];
                const missingValue = !value && required;
                return (
                  <div className={styles.row} key={id}>
                    <div className={cx(styles.title, missingValue && styles.warning)}>{label}:</div>
                    <div className={cx(styles.value, value === 'none' && !missingValue ? styles.textMuted : '')}>
                      {missingValue ? <Icon name={'exclamation-triangle'} className={styles.warning} /> : value}
                    </div>
                  </div>
                );
              })}
            </Box>
          );
        })}
      </FieldSet>
    </StepForm>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    row: css`
      border: 1px solid ${theme.colors.border.weak};
      border-top: none;
      display: flex;
      width: 100%;
      padding: ${theme.spacing(1)};
    `,
    warning: css`
      color: ${theme.colors.warning.text};
    `,
    title: css`
      width: 30%;
      font-size: ${theme.typography.bodySmall.fontSize};
      color: ${theme.colors.text.secondary};
    `,
    textMuted: css`
      color: ${theme.colors.text.secondary};
    `,
    value: css`
      width: 70%;
      font-size: ${theme.typography.bodySmall.fontSize};
      word-break: break-word;
    `,
  };
};
