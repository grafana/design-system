// Libraries
import { css, cx } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2, PageLayoutType } from '@grafana/data';
import { CustomScrollbar, useStyles2 } from '@grafana/ui';

import { PageContents } from './PageContents';
import { PageHeader } from './PageHeader';
import { PageTabs } from './PageTabs';
import { PageType } from './types';

export const Page: PageType = ({
  navId,
  navModel: oldNavProp,
  pageNav,
  renderTitle,
  onEditTitle,
  actions,
  subTitle,
  children,
  className,
  info,
  layout = PageLayoutType.Standard,
  scrollTop,
  scrollRef,
  ...otherProps
}) => {
  const styles = useStyles2(getStyles);

  const pageHeaderNav = {
    emptyMessage: undefined,
    icon: 'user',
    id: 'global-users',
    parentItem: {
      id: 'cfg',
      text: 'Administration',
      subTitle: 'Organization: Main Org.',
      icon: 'cog',
      url: '/admin',
    },
    subTitle: 'Manage users in Grafana',
    text: 'Users',
    url: '/admin/users',
  };

  return (
    <div className={cx(styles.wrapper, className)} {...otherProps}>
      {layout === PageLayoutType.Standard && (
        <CustomScrollbar autoHeightMin={'100%'} scrollTop={scrollTop} scrollRefCallback={scrollRef}>
          <div className={styles.pageInner}>
            {pageHeaderNav && (
              <PageHeader
                actions={actions}
                onEditTitle={onEditTitle}
                navItem={pageHeaderNav}
                renderTitle={renderTitle}
                info={info}
                subTitle={subTitle}
              />
            )}
            {pageNav && pageNav.children && <PageTabs navItem={pageNav} />}
            <div className={styles.pageContent}>{children}</div>
          </div>
        </CustomScrollbar>
      )}
      {layout === PageLayoutType.Canvas && (
        <CustomScrollbar autoHeightMin={'100%'} scrollTop={scrollTop} scrollRefCallback={scrollRef}>
          <div className={styles.canvasContent}>{children}</div>
        </CustomScrollbar>
      )}
      {layout === PageLayoutType.Custom && children}
    </div>
  );
};

Page.Contents = PageContents;

const getStyles = (theme: GrafanaTheme2) => {
  return {
    wrapper: css({
      label: 'page-wrapper',
      height: '100%',
      display: 'flex',
      flex: '1 1 0',
      flexDirection: 'column',
      minHeight: 0,
    }),
    pageContent: css({
      label: 'page-content',
      flexGrow: 1,
    }),
    pageInner: css({
      label: 'page-inner',
      padding: theme.spacing(2),
      borderRadius: theme.shape.radius.default,
      border: `1px solid ${theme.colors.border.weak}`,
      borderBottom: 'none',
      background: theme.colors.background.primary,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      margin: theme.spacing(0, 0, 0, 0),

      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(2, 2, 0, 1),
        padding: theme.spacing(3),
      },
    }),
    canvasContent: css({
      label: 'canvas-content',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      flexBasis: '100%',
      flexGrow: 1,
    }),
  };
};
