import React from 'react';
import { Card, Badge, Icon, Grid } from '@elastiflow/epic-ui';
import { Data } from '@site/src/components/templates/GridPage/types';

interface CardListPageProps {
  data: Data;
}

export const GridPage = ({ data }: CardListPageProps) => {
  return (
    <Grid gap={3} minColumnWidth={34}>
      {data.map(({ displayName, name, enabled, icon }) => (
        <Card href={'#'} key={name}>
          <Card.Heading>{displayName}</Card.Heading>
          <Card.Meta>OAuth</Card.Meta>
          <Card.Figure>
            <Icon name={icon} size={'xxxl'} />
          </Card.Figure>
          <Card.Actions>
            <Badge text={enabled ? 'Enabled' : 'Not enabled'} color={enabled ? 'green' : 'blue'} />
          </Card.Actions>
        </Card>
      ))}
    </Grid>
  );
};

export default GridPage;
