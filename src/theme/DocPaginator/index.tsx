import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Button, Icon } from '@grafana/ui';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/DocPaginator';

export default function DocPaginator(props: Props) {
  const { previous, next } = props;
  console.info(useBaseUrl('a'));

  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      {previous && (
        <Link to={previous.permalink}>
          <Button size="lg" fill="outline" variant="secondary">
            <Icon size="lg" name={'arrow-left'} />
            {previous.title}
          </Button>
        </Link>
      )}
      {next && next.title !== 'Contributing' && (
        <Link to={next.permalink} style={{ textAlign: 'right' }}>
          <Button size="lg" fill="outline" variant="secondary" style={{ justifyContent: 'flex-end' }}>
            {next.title}
            <Icon size="lg" name={'arrow-right'} />
          </Button>
        </Link>
      )}
    </nav>
  );
}
