import React from 'react';
import { Stack, FilterInput, InteractiveTable, LinkButton, RadioButtonGroup } from '@grafana/ui';
import { useColumns, UserDTO } from '@site/src/components/templates/TablePage/useColumns';
import { users } from '@site/src/data';

interface Props {
  query: string;
  changeQuery: (query: string) => void;
  changeFilter: (filter: { name: string; value: any }) => void;
  filters: any[];
}
export const TablePage = ({ changeQuery, query, changeFilter, filters }: Props) => {
  const columns = useColumns();

  return (
    <Stack flexGrow={1} direction={'column'}>
      <Stack gap={2}>
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
        <LinkButton href="#" variant="primary">
          New user
        </LinkButton>
      </Stack>
      <InteractiveTable columns={columns} data={users} getRowId={(user: UserDTO) => String(user.id)} />
    </Stack>
  );
};

export default TablePage;
