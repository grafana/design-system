import { Icon, useTheme2 } from '@grafana/ui';
import React from 'react';
import { Text } from '@grafana/ui';

interface StatusTableProps {
  children: StatusChildren[];
}
type StatusChildren = {
  name: string;
  generalStatus: StatusCellProps;
  figmaStatus: StatusCellProps;
  storybookStatus: StatusCellProps;
  sagaStatus: StatusCellProps;
};

export const StatusTable = (props: StatusTableProps) => {
  const { children } = props;
  const theme = useTheme2();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: theme.spacing(1),
      }}
    >
      <Text element='p'>Component</Text>
      <Text element='p'>General</Text>
      <Text element='p'>Figma</Text>
      <Text element='p'>Storybook</Text>
      <Text element='p'>Saga</Text>
      {children.map(
        (child) => (
          console.log(child),
          (
            <>
              <Text element='p'>{child.name}</Text>
              <StatusCell status={child.generalStatus} />
              <StatusCell status={child.figmaStatus} />
              <StatusCell status={child.storybookStatus} />
              <StatusCell status={child.sagaStatus} />
            </>
          )
        )
      )}
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
        return <Icon name="calendar-alt" />;
      case 'In Progress':
        return <Icon name="sync" />;
      case 'To Do':
        return <Icon name="list-ul" />;
      case 'Not Doing':
        return <Icon name="times" />;
      case 'Deprecated':
        return <Icon name="minus-circle" />;
      case 'N/A':
        return <Icon name="question-circle" />;
      default:
        return <Icon name="check-circle" />;
    }
  };
  return (
    <div>
      {getIcon()} 
      <Text element='p' variant='bodySmall'>{status}</Text>
    </div>
  );
};
