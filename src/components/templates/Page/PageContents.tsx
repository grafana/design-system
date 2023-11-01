// Libraries
import React from 'react';

import { LoadingPlaceholder } from '@grafana/ui';

interface Props {
  pageName?: string;
}

const PageLoader = ({ pageName = '' }: Props) => {
  const loadingText = `Loading ${pageName}...`;
  return (
    <div className="page-loader-wrapper">
      <LoadingPlaceholder text={loadingText} />
    </div>
  );
};

interface PageContentsProps {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const PageContents = ({ isLoading, children, className }: PageContentsProps) => {
  let content = className ? <div className={className}>{children}</div> : children;

  return <>{isLoading ? <PageLoader /> : content}</>;
};
