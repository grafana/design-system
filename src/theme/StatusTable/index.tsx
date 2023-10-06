import { Icon } from '@grafana/ui';
import React from 'react';

interface StatusTableProps {
  componentsData: StatusChildren[];
}
type StatusChildren = {
  name: string;
  generalStatus: StatusCellProps['status'];
  figmaStatus: StatusCellProps['status'];
  storybookStatus: StatusCellProps['status'];
  sagaStatus: StatusCellProps['status'];
};

export const StatusTable = ({ componentsData }: StatusTableProps) => {
  return (
    <table className="status-table">
      <tr>
        <th>Component</th>
        <th>General</th>
        <th>Figma</th>
        <th>Storybook</th>
        <th>Saga</th>
      </tr>
      {componentsData.map((componentData) => (
        <tr>
          <td>{componentData.name}</td>
          <StatusCell status={componentData.generalStatus} />
          <StatusCell status={componentData.figmaStatus} />
          <StatusCell status={componentData.storybookStatus} />
          <StatusCell status={componentData.sagaStatus} />
        </tr>
      ))}
    </table>
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
    <td className={status.replace(' ', '-').replace('/', '').toLocaleLowerCase()}>
      {getIcon()}
      <span>{status}</span>
    </td>
  );
};
