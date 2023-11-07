import React, { useMemo } from 'react';

import { CellProps, Column, Icon } from '@grafana/ui';

type Org = { name: string };
export interface UserDTO {
  id: number;
  login: string;
  email: string;
  name: string;
  orgs?: Org[];
}

type Cell<T extends keyof UserDTO = keyof UserDTO> = CellProps<UserDTO, UserDTO[T]>;

export const useColumns = () => {
  const columns: Array<Column<UserDTO>> = useMemo(
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
