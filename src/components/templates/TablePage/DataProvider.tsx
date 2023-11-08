import React, { useState } from 'react';
import { users } from '@site/src/data';
import { Filter, User } from '@site/src/components/templates/TablePage/types';

interface DataProviderProps {
  children: React.ReactElement;
}
/** A wrapper component to provide data and action props to the table page.
 *  Not part of the template.
 */
export const DataProvider = ({ children }: DataProviderProps) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const filteredData = users.filter((user) => {
    if (filter === 'lastActive') {
      return filterRecentActiveUsers(users);
    }
    return true;
  });

  const filteredDataByQuery = filteredData.filter((user) => {
    return query === '' || user.login.includes(query) || user.email.includes(query) || user.name.includes(query);
  });

  return React.cloneElement(children, {
    query,
    changeQuery: setQuery,
    filter,
    changeFilter: setFilter,
    data: filteredDataByQuery,
  });
};

function filterRecentActiveUsers(users: User[]) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  return users.filter((user) => {
    const lastActiveDate = new Date(user.lastActive);
    return lastActiveDate > thirtyDaysAgo;
  });
}
