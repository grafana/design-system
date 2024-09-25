import React from 'react';
import { Card, EmptySearchResult, FilterInput, Icon, LinkButton, Stack } from '@elastiflow/epic-ui';
import { Data } from '@site/src/components/templates/GridPage/types';

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
          Create item
        </LinkButton>
      </Stack>
      {data.length ? (
        data.map((item) => {
          return (
            <Card key={item.name} href={'#'}>
              <Card.Heading>{item.displayName}</Card.Heading>
              <Card.Meta>OAuth</Card.Meta>
              <Card.Figure>
                <Icon name={item.icon} size={'xxxl'} />
              </Card.Figure>
            </Card>
          );
        })
      ) : (
        <EmptySearchResult>No results matching your query</EmptySearchResult>
      )}
    </Stack>
  );
};

export default ListPage;
