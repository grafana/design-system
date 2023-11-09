import React from 'react';
import { Stack, FilterInput, InteractiveTable, LinkButton, RadioButtonGroup } from '@grafana/ui';
import useColumns from '@site/src/components/templates/TablePage/useColumns';
import { Filter, User } from '@site/src/components/templates/TablePage/types';

interface TablePageProps {
  query: string;
  filter: Filter;
  data: User[];
  changeQuery: (query: string) => void;
  changeFilter: (value: string) => void;
}

export const TablePage = ({ changeQuery, query, changeFilter, filter, data }: TablePageProps) => {
  const columns = useColumns();

  return (
    <Stack grow={1} direction={'column'}>
      <Stack gap={2}>
        <FilterInput
          placeholder="Search user by login, email, or name."
          autoFocus={true}
          value={query}
          onChange={changeQuery}
        />
        <RadioButtonGroup
          options={[
            { label: 'All users', value: 'all' },
            { label: 'Active last 30 days', value: 'lastActive' },
          ]}
          onChange={(value) => changeFilter(value)}
          value={filter}
        />
        <LinkButton href="#" variant="primary">
          New user
        </LinkButton>
      </Stack>
      <InteractiveTable columns={columns} data={data} pageSize={10} getRowId={(user: User) => String(user.id)} />
    </Stack>
  );
};

export default TablePage;
