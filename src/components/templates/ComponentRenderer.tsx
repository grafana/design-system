import React, { useEffect, useState } from 'react';

export const ComponentRenderer = ({ path }: any) => {
  const [code, setCode] = useState('');
  const filePath = 'file:///Users/alexk/dev/go/design-system/src/components/templates/' + path;
  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((codeString) => setCode(codeString))
      .catch(console.error);
  }, [path]);

  // Render the file content inside a code block
  return (
    <pre>
      <code className="language-tsx">{code}</code>
    </pre>
  );
};
