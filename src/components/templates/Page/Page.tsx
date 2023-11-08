import React, { PropsWithChildren } from 'react';

import { CustomScrollbar } from '@grafana/ui';
import styles from './styles.module.css';
import { PageHeader } from './PageHeader';

interface PageProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  height?: string | number;
}
export const Page = ({ title, subTitle, children, height = '100%' }: PageProps) => {
  return (
    <div className={styles.container} style={{ minHeight: height }}>
      <CustomScrollbar autoHeightMin={'100%'}>
        <div className={styles.pageInner}>
          <PageHeader title={title} subTitle={subTitle} />
          <div className={styles.content}>{children}</div>
        </div>
      </CustomScrollbar>
    </div>
  );
};
