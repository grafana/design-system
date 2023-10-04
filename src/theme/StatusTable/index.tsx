import { Icon, useTheme2 } from '@grafana/ui';
import React from 'react';

interface StatusTableProps {
  children: StatusChildren[];
}
type StatusChildren = {
  name: string;
  generalStatus: StatusCellProps['status'];
  figmaStatus: StatusCellProps['status'];
  storybookStatus: StatusCellProps['status'];
  sagaStatus: StatusCellProps['status'];
};

export const StatusTable = (props: StatusTableProps) => {
  const { children } = props;
  const theme = useTheme2();

  return (
    <div className="status-table">
      <p className="status-table-header">Component</p>
      <p className="status-table-header">General</p>
      <p className="status-table-header">Figma</p>
      <p className="status-table-header">Storybook</p>
      <p className="status-table-header">Saga</p>
      {children.map((child) => (
        <>
          <p className="status-cell">{child.name}</p>
          <StatusCell status={child.generalStatus} />
          <StatusCell status={child.figmaStatus} />
          <StatusCell status={child.storybookStatus} />
          <StatusCell status={child.sagaStatus} />
        </>
      ))}
    </div>
  );
};

interface StatusCellProps {
  status: 'Done' | 'Planned' | 'In Progress' | 'To Do' | 'Not Doing' | 'Deprecated' | 'N/A';
}

const StatusCell = (props: StatusCellProps) => {
  const { status } = props;

  const getIcon = () => {
    switch (status) {
      case 'Planned':
        return <Icon name="calendar-alt" size="md" />;
      case 'In Progress':
        return <Icon name="sync" size="md" />;
      case 'To Do':
        return <Icon name="list-ul" size="md" />;
      case 'Not Doing':
        return <Icon name="times" size="md" />;
      case 'Deprecated':
        return <Icon name="minus-circle" size="md" />;
      case 'N/A':
        return <Icon name="question-circle" size="md" />;
      default:
        return <Icon name="check-circle" size="md" />;
    }
  };
  return (
    <div className={`status-cell ${status.replace(' ', '-').replace('/', '').toLocaleLowerCase()}`}>
      {getIcon()}
      <span>{status}</span>
    </div>
  );
};
