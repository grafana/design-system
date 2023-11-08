import React from 'react';

import { Stack } from '@grafana/ui';
import styles from './styles.module.css';
export interface Props {
  title: string;
  subTitle?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subTitle, actions }: Props) {
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
