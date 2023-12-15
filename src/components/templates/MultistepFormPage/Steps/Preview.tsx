import React from 'react';
import { Button, FieldSet, Icon, Stack, useStyles2 } from '@grafana/ui';
import { useFormContext } from 'react-hook-form';
import { css, cx } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';

export const Preview = () => {
  const { getValues, handleSubmit } = useFormContext();
  const styles = useStyles2(getStyles);
  const data = getValues();
  const onSubmit = (data: any) => {
    console.log('saving data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet label={'3. Preview'}>
        {Object.entries(data).map(([key, value]) => {
          const missingValue = !value;
          return (
            <div className={styles.row} key={key}>
              <div className={cx(styles.title, missingValue && styles.warning)}>{key}:</div>
              <div className={cx(styles.value, value === 'none' && !missingValue ? styles.textMuted : '')}>
                {missingValue ? <Icon name={'exclamation-triangle'} className={styles.warning} /> : value}
              </div>
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
