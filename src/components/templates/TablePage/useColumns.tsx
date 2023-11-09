import React, { useMemo, useState } from 'react';

import { CellProps, Column, ConfirmModal, Icon, IconButton, Tooltip } from '@grafana/ui';
import { User, Org } from '@site/src/components/templates/TablePage/types';

type Cell<T extends keyof User = keyof User> = CellProps<User, User[T]>;
type Row = { original: User };

const useColumns = () => {
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
        id: 'lastActive',
        header: 'Last active',
        cell: ({ cell: { value } }: Cell<'lastActive'>) => <div>{new Date(value).toLocaleDateString()}</div>,
        sortType: (a: Row, b: Row) =>
          new Date(a.original.lastActive).getTime() - new Date(b.original.lastActive).getTime(),
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
            // TODO should this show the detail view?
            <Tooltip content={'Edit user'} placement={'top'}>
              <a href={`#`} aria-label={`Edit team ${original.name}`}>
                <Icon name={'pen'} />
              </a>
            </Tooltip>
          );
        },
      },
      {
        id: 'delete',
        header: '',
        cell: ({ row: { original } }: Cell) => {
          const [showModal, setShowModal] = useState(false);
          const closeModal = () => setShowModal(false);

          return (
            <>
              <IconButton
                name={'trash-alt'}
                aria-label={`Delete user ${original.name}`}
                onClick={() => setShowModal(true)}
              />

              <ConfirmModal
                isOpen={showModal}
                body={`Are you sure you want to delete user ${original.name}?`}
                confirmText="Delete"
                title="Delete user"
                onConfirm={closeModal}
                onDismiss={closeModal}
              />
            </>
          );
        },
      },
    ],
    []
  );
  return columns;
};

export default useColumns;
