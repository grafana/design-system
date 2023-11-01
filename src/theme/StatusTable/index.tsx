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
  status: 'Ready To Use' | 'Planned' | 'In Progress' | 'To Do' | 'Not Doing' | 'Deprecated' | 'N/A';
  icon: IconName;
  className: string;
}

const STATUSES: Status[] = [
  {
    id: 'ready-to-use',
    status: 'Ready To Use',
    icon: 'check-circle',
    className: 'ready-to-use',
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
    id: 'figmaStatus',
    title: 'Figma',
    header: 'Figma status',
    cell: StatusCell
  },
  {
    id: 'storybookStatus',
    title: 'Storybook',
    header: 'Storybook status',
    cell: StatusCell
  },
  {
    id: 'sagaStatus',
    title: 'Saga',
    header: 'Saga status',
    cell: StatusCell,
  },
];

export const StatusTable = ({ componentsData }: StatusTableProps) => {
  const rowsData = useMemo(() => componentsData, [componentsData]);
  return <InteractiveTable getRowId={(row: StatusChildren) => row.componentName} columns={columns} data={rowsData} />;
};

function StatusCell({ cell: { value } }: CellProps<Status>) {
  const { icon, status, className } = STATUSES.find((status) => status.id === value) || STATUSES[STATUSES.length - 1];
  return (
    <span className={className}>
      <Icon name={icon} />
      {status}
    </span>
  );
};
