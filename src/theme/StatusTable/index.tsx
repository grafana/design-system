import { CellProps, Icon, IconName, InteractiveTable } from '@grafana/ui';
import React, { useMemo } from 'react';

interface StatusTableProps {
  componentsData: StatusChildren[];
}
type StatusChildren = {
  componentName: string;
  generalStatus: Status['status'];
  figmaStatus: Status['status'];
  storybookStatus: Status['status'];
  sagaStatus: Status['status'];
};
interface Status {
  id: string;
  status: 'Done' | 'Planned' | 'In Progress' | 'To Do' | 'Not Doing' | 'Deprecated' | 'N/A';
  icon: IconName;
  className: string;
}

const STATUSES: Status[] = [
  {
    id: 'done',
    status: 'Done',
    icon: 'check-circle',
    className: 'done',
  },
  {
    id: 'planned',
    status: 'Planned',
    icon: 'calendar-alt',
    className: 'planned',
  },
  {
    id: 'in-progress',
    status: 'In Progress',
    icon: 'sync',
    className: 'in-progress',
  },
  {
    id: 'to-do',
    status: 'To Do',
    icon: 'list-ul',
    className: 'to-do',
  },
  {
    id: 'not-doing',
    status: 'Not Doing',
    icon: 'times',
    className: 'not-doing',
  },
  {
    id: 'deprecated',
    status: 'Deprecated',
    icon: 'minus-circle',
    className: 'deprecated',
  },
  {
    id: 'n-a',
    status: 'N/A',
    icon: 'question-circle',
    className: 'n-a',
  },
];

const columns = [
  {
    id: 'componentName',
    title: 'Component',
    header: 'Component name',
  },
  {
    id: 'generalStatus',
    title: 'General',
    header: 'General status',
    cell: ({ cell: { value } }: CellProps<Status>) => getStatusCell(value),
  },
  {
    id: 'figmaStatus',
    title: 'Figma',
    header: 'Figma status',
    cell: ({ cell: { value } }: CellProps<Status>) => getStatusCell(value),
  },
  {
    id: 'storybookStatus',
    title: 'Storybook',
    header: 'Storybook status',
    cell: ({ cell: { value } }: CellProps<Status>) => getStatusCell(value),
  },
  {
    id: 'sagaStatus',
    title: 'Saga',
    header: 'Saga status',
    cell: ({ cell: { value } }: CellProps<Status>) => getStatusCell(value),
  },
];

export const StatusTable = ({ componentsData }: StatusTableProps) => {
  const rowsData = useMemo(() => componentsData, [componentsData]);
  return <InteractiveTable getRowId={(row: StatusChildren) => row.componentName} columns={columns} data={rowsData} />;
};

const getStatusCell = (value: CellProps<Status>) => {
  const { icon, status, className } = STATUSES.find((status) => status.id === value) || STATUSES[STATUSES.length - 1];
  return (
    <span className={className}>
      <Icon name={icon} />
      {status}
    </span>
  );
};
