import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Translate from '@docusaurus/Translate';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import type { Props as PlaygroundProps } from '@theme/Playground';
import CopyButton from '@theme/CodeBlock/CopyButton';

import styles from './styles.module.css';

function Header({ children }: PropsWithChildren) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>;
}

function ResultWithHeader() {
  return (
    <div className={styles.playgroundPreview}>
      <BrowserOnly fallback={<LivePreviewLoader />}>
        {() => (
          <>
            <LivePreview />
            <LiveError />
          </>
        )}
      </BrowserOnly>
    </div>
  );
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}

interface EditorWithHeaderProps {
  code: string;
}

function EditorWithHeader({ code }: EditorWithHeaderProps) {
  return (
    <div className={styles.codeContainer}>
      <Header>
        <Translate id="theme.Playground.liveEditor" description="The live editor label of the live codeblocks">
          Live Editor
        </Translate>
      </Header>
      <CopyButton code={code} className={styles.copyButton} />
      <ThemedLiveEditor />
    </div>
  );
}

export default function Playground({ children, transformCode, ...props }: PlaygroundProps) {
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;
  const code = children.replace(/\n$/, '');
  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider
        code={code}
        noInline={noInline}
        theme={prismTheme}
        language="tsx"
        transformCode={(snippet) => {
          if (typeof window !== 'undefined') {
            // @ts-expect-error
            return window.ts.transpile(snippet, {
              noImplicitUseStrict: true,
              target: 'es6',
              jsx: 'react',
            });
          }
        }}
        {...props}
      >
        <ResultWithHeader />
        <EditorWithHeader code={code} />
      </LiveProvider>
    </div>
  );
}
