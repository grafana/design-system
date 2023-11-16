import React from 'react';
import { Card, Icon, Stack } from '@grafana/ui';
import { Data } from '@site/src/components/templates/CardListPage/types';

interface ListPageProps {
  data: Data;
}

export const ListPage = ({ data }: ListPageProps) => {
  return (
    <Stack direction={'column'}>
      {data.map((item) => {
        return (
          <Card key={item.name} href={'#'}>
            <Card.Heading>{item.displayName}</Card.Heading>
            <Card.Meta>OAuth</Card.Meta>
            <Card.Figure>
              <Icon name={item.icon} size={'xxxl'} />
            </Card.Figure>
          </Card>
        );
      })}
    </Stack>
  );
};

export default ListPage;
