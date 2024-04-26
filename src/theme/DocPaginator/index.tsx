import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Button } from '@grafana/ui';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/DocPaginator';

export default function DocPaginator(props: Props) {
  const { previous, next } = props;

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
          <Button icon={'arrow-left'} size={'lg'} fill="outline" variant="secondary">
            {previous.title}
          </Button>
        </Link>
      )}
      {next && next.title !== 'Contributing' && (
        <Link to={next.permalink}>
          <Button
            icon={'arrow-right'}
            size={'lg'}
            fill="outline"
            variant="secondary"
            style={{ flexDirection: 'row-reverse' }}
          >
            {next.title}
          </Button>
        </Link>
      )}
    </nav>
  );
}
