import { Icon, useTheme2 } from '@grafana/ui';
import React from 'react';
// import { Text } from '@grafana/ui';

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
    <div
      className='status-table'
    >
      {/* <Text element='p'>Component</Text>
      <Text element='p'>General</Text>
      <Text element='p'>Figma</Text>
      <Text element='p'>Storybook</Text>
      <Text element='p'>Saga</Text> */}
      <p className='status-table-header'>Component</p>
      <p className='status-table-header'>General</p>
      <p className='status-table-header'>Figma</p>
      <p className='status-table-header'>Storybook</p>
      <p className='status-table-header'>Saga</p>
      {children.map(
        (child) => (
          console.log(child),
          (
            < >
              {/* <Text element='p'>{child.name}</Text> */}
              <p className='status-cell'>{child.name}</p>
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
  const {status} = props;
  const theme = useTheme2();

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
    <div className='status-cell'>
      {getIcon()} 
      {/* <Text element='p' variant='bodySmall'>{props}</Text> */}
      <span style={{fontSize: '12px'}}>{status}</span>
    </div>
  );
};
