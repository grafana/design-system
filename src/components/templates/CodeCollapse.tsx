import { Collapse } from '@grafana/ui';
import React, { PropsWithChildren, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface CodeCollapseProps extends PropsWithChildren {
  label: string;
}

export const CodeCollapse = ({ label, children }: CodeCollapseProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapse label={label} isOpen={open} onToggle={() => setOpen(!open)} collapsible>
      <CodeBlock language="tsx">{children}</CodeBlock>
    </Collapse>
  );
};
