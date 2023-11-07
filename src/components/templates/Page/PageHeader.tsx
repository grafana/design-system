import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { Stack, useStyles2 } from '@grafana/ui';

export interface Props {
  title: string;
  subTitle?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subTitle, actions }: Props) {
  const styles = useStyles2(getStyles);

  return (
    <Stack direction={'column'} gap={1} flexGrow={1}>
      <Stack alignItems={'flex-start'} wrap={'wrap'}>
        <div className={styles.titleInfoContainer}>
          <h2>{title}</h2>
        </div>
        <Stack gap={1}>{actions}</Stack>
      </Stack>
      {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
    </Stack>
  );
}

const getStyles = (theme: GrafanaTheme2) => {
  return {
    titleInfoContainer: css({
      display: 'flex',
      label: 'title-info-container',
      flex: 1,
      flexWrap: 'wrap',
      gap: theme.spacing(1, 4),
      justifyContent: 'space-between',
      maxWidth: '100%',
      minWidth: '200px',
      h2: {
        fontSize: '2rem',
        display: 'flex',
        marginBottom: 0,
      },
    }),
    subTitle: css({
      position: 'relative',
      color: theme.colors.text.secondary,
    }),
  };
};
