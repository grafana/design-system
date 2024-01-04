import { Collapse } from '@grafana/ui';
import React, { PropsWithChildren, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface CodeCollapseProps extends PropsWithChildren {
  label: string;
  isOpen?: boolean;
}

export const CodeCollapse = ({ label, children, isOpen = false }: CodeCollapseProps) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <Collapse label={label} isOpen={open} onToggle={() => setOpen(!open)} collapsible>
      <CodeBlock language="tsx">{children}</CodeBlock>
    </Collapse>
  );
};
