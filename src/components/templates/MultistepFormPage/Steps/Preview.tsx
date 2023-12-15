import React from 'react';
import { Button, FieldSet, Icon, LinkButton, Stack, useStyles2 } from '@grafana/ui';
import { useFormContext } from 'react-hook-form';
import { css, cx } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { Data, StepKey } from '@site/src/components/templates/MultistepFormPage/types';

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
  const { getValues, handleSubmit } = useFormContext<Data>();
  const styles = useStyles2(getStyles);
  const data = getValues();
  const onSubmit = (data: Data) => {
    console.log('saving data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet label={'3. Preview'}>
        {fields.map((section) => {
          return (
            <div className={styles.section} key={section.id}>
              <div className={styles.sectionHeader}>
                <h5 className={styles.sectionTitle}>{section.label}</h5>
                <LinkButton variant={'secondary'} fill={'text'} href={''} size={'sm'}>
                  Edit
                </LinkButton>
              </div>
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
            </div>
          );
        })}
      </FieldSet>
      <Stack gap={2}>
        <Button type="submit">Save</Button>
        <Button variant="secondary">Discard</Button>
      </Stack>
    </form>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    section: css`
      width: 100%;
      padding: ${theme.spacing(3, 0)};
      margin-bottom: ${theme.spacing(3)};
    `,
    sectionHeader: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacing(1)};
      border: 1px solid ${theme.colors.border.weak};
    `,
    sectionTitle: css`
      margin: 0;
    `,
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
      color: ${theme.colors.text.secondary};
    `,
    textMuted: css`
      color: ${theme.colors.text.secondary};
    `,
    value: css`
      width: 70%;
      word-break: break-word;
    `,
    dashboardLink: css`
      color: ${theme.colors.text.primary};
      font-size: ${theme.typography.body.fontSize};
      margin-top: 0;
    `,
  };
};
