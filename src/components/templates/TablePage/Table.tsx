import { useColumns } from '@site/src/components/templates/TablePage/useColumns';
import { Box, FilterInput, InteractiveTable, LinkButton, RadioButtonGroup } from '@grafana/ui';
import { Flex } from '@site/src/components/templates/Flex';
import React from 'react';
import { users } from '@site/src/data';

interface Props {
  query: string;
  changeQuery: (query: string) => void;
  changeFilter: (filter: { name: string; value: any }) => void;
  filters: any[];
}
export const Table = ({ changeQuery, query, changeFilter, filters }: Props) => {
  const columns = useColumns();

  return (
    <Flex>
      <Box display={'flex'}>
        <FilterInput
          placeholder="Search user by login, email, or name."
          autoFocus={true}
          value={query}
          onChange={changeQuery}
        />
        <RadioButtonGroup
          options={[
            { label: 'All users', value: false },
            { label: 'Active last 30 days', value: true },
          ]}
          onChange={(value) => changeFilter({ name: 'activeLast30Days', value })}
          value={filters.find((f) => f.name === 'activeLast30Days')?.value}
        />
        <LinkButton href="admin/users/create" variant="primary">
          New user
        </LinkButton>
      </Box>
      <InteractiveTable columns={columns} data={users} getRowId={(user) => String(user.id)} />
    </Flex>
  );
};
