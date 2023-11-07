import React, { PropsWithChildren } from 'react';

import { CustomScrollbar, Stack } from '@grafana/ui';
import styles from './styles.module.css';
import { PageHeader } from './PageHeader';

interface PageProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
}
export const Page = ({ title, subTitle, children }: PageProps) => {
  return (
    <div className={styles.container}>
      <CustomScrollbar autoHeightMin={'100%'}>
        <div className={styles.pageInner}>
          <PageHeader title={title} subTitle={subTitle} />
          <Stack flexGrow={1}>{children}</Stack>
        </div>
      </CustomScrollbar>
    </div>
  );
};
