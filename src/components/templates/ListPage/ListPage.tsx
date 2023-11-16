import React from 'react';
import { Card, FilterInput, Icon, LinkButton, Stack } from '@grafana/ui';
import { Data } from '@site/src/components/templates/CardListPage/types';

interface ListPageProps {
  data: Data;
  query: string;
  changeQuery: (query: string) => void;
}

export const ListPage = ({ data, query, changeQuery }: ListPageProps) => {
  return (
    <Stack direction={'column'} gap={2}>
      <Stack gap={2}>
        <FilterInput placeholder="Search by name" autoFocus={true} value={query} onChange={changeQuery} />
        <LinkButton href="#" variant="primary">
          New user
        </LinkButton>
      </Stack>
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
