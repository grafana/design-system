import React, { PropsWithChildren } from 'react';

import { CustomScrollbar } from '@elastiflow/epic-ui';
import styles from './styles.module.css';
import { PageHeader } from './PageHeader';


interface PageProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  height?: string | number;
  actions?: React.ReactNode[];
}
export const Page = ({ title, subTitle, children, actions, height = '100%' }: PageProps) => {
  return (
    <div className={`page ${styles.container}`} style={{ minHeight: height }}>
      <CustomScrollbar autoHeightMin={'100%'}>
        <div className={styles.pageInner}>
          <PageHeader title={title} subTitle={subTitle} actions={actions} />
          <div className={styles.content}>{children}</div>
        </div>
      </CustomScrollbar>
    </div>
  );
};
