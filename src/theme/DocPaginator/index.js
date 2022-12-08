import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Button, Icon } from '@grafana/ui';
import Link from '@docusaurus/Link';

export default function DocPaginator(props) {
  const {previous, next} = props;

  return (
    <nav
      className='pagination-nav docusaurus-mt-lg'
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}>
      {previous && (
        <Link to={previous.permalink}>
          <Button size='lg' fill='outline' variant='secondary'>
            <div><Icon size='lg' name={'arrow-left'} /></div>
            {previous.title}
          </Button>
        </Link>
      )}
      {next && next.title !== 'Alert' && (
        <Link to={next.permalink} style={{ textAlign: 'right' }}>
          <Button size='lg' fill='outline' variant='secondary' style={{ justifyContent: 'flex-end' }}>
            {next.title}
            <div><Icon size='lg' name={'arrow-right'} /></div>
          </Button>
        </Link>
      )}
    </nav>
  );
}
