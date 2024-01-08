import { Collapse } from '@grafana/ui';
import React, { PropsWithChildren, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface CodeCollapseProps extends PropsWithChildren {
  label: string;
  isOpen?: boolean;
  language?: string;
}

export const CodeCollapse = ({ label, children, isOpen = false, language = 'tsx' }: CodeCollapseProps) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <Collapse label={label} isOpen={open} onToggle={() => setOpen(!open)} collapsible>
      <CodeBlock language={language}>{children}</CodeBlock>
    </Collapse>
  );
};
