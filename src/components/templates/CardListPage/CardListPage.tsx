import React from 'react';
import { Card, Badge, Icon } from '@grafana/ui';
import { Data } from '@site/src/components/templates/CardListPage/types';
import { Grid } from '@site/src/components/templates/Grid';

interface CardListPageProps {
  data: Data;
}

export const CardListPage = ({ data }: CardListPageProps) => {
  return (
    <Grid gap={3} minColumnWidth={34}>
      {data.map(({ provider, name, settings }) => (
        <Card href={'#'} key={provider}>
          <Card.Heading>{name}</Card.Heading>
          <Card.Meta>OAuth</Card.Meta>
          <Card.Figure>
            <Icon name={['generic_oauth', 'azuread'].includes(provider) ? 'apps' : provider} size={'xxxl'} />
          </Card.Figure>
          <Card.Actions>
            <Badge text={settings.enabled ? 'Enabled' : 'Not enabled'} color={'blue'} />
          </Card.Actions>
        </Card>
      ))}
    </Grid>
  );
};

export default CardListPage;
