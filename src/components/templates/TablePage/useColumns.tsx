import React, { useMemo } from 'react';

import { CellProps, Column, Icon } from '@grafana/ui';
import { User, Org } from '@site/src/components/templates/TablePage/types';

type Cell<T extends keyof User = keyof User> = CellProps<User, User[T]>;

export const useColumns = () => {
  const columns: Array<Column<User>> = useMemo(
    () => [
      {
        id: 'login',
        header: 'Login',
        cell: ({ cell: { value } }: Cell<'login'>) => value,
        sortType: 'string',
      },
      {
        id: 'email',
        header: 'Email',
        cell: ({ cell: { value } }: Cell<'email'>) => value,
        sortType: 'string',
      },
      {
        id: 'name',
        header: 'Name',
        cell: ({ cell: { value } }: Cell<'name'>) => value,
        sortType: 'string',
      },
      {
        id: 'orgs',
        header: 'Belongs to',
        cell: ({ cell: { value } }: Cell<'orgs'>) => <div>{value?.map((org: Org) => org?.name).join(',')}</div>,
      },
      {
        id: 'edit',
        header: '',
        cell: ({ row: { original } }: Cell) => {
          return (
            <a href={`admin/users/edit/${original.id}`} aria-label={`Edit team ${original.name}`}>
              <Icon name={'pen'} />
            </a>
          );
        },
      },
    ],
    []
  );
  return columns;
};
