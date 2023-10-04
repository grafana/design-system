import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview, LiveProviderProps } from 'react-live';
import Translate from '@docusaurus/Translate';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import type { Props as BaseProps } from '@theme/CodeBlock';
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

function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate id="theme.Playground.liveEditor" description="The live editor label of the live codeblocks">
          Live Editor
        </Translate>
      </Header>

      <ThemedLiveEditor />
    </>
  );
}

// The import of Props from @theme/Playground is not resolved properly, so the types are copied here
type CodeBlockProps = Omit<BaseProps, 'className' | 'language' | 'title'>;

export interface Props extends CodeBlockProps, LiveProviderProps {
  children: string;
}

export default function Playground({ children, transformCode, ...props }: Props) {
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;

  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider
        code={children.replace(/\n$/, '')}
        noInline={noInline}
        theme={prismTheme}
        language="typescript"
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
        <EditorWithHeader />
      </LiveProvider>
    </div>
  );
}
