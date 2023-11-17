import React, { useState } from 'react';
import { data } from '@site/src/components/templates/GridPage/data';

interface DataProviderProps {
  children: React.ReactElement;
}

/**
 * A wrapper component to provide data and action props to the child components .
 *  Not part of the template.
 */
export const DataProvider = ({ children }: DataProviderProps) => {
  const [query, setQuery] = useState('');

  const filteredDataByQuery = data.filter((item) => {
    return query === '' || item.name.includes(query);
  });
  return React.cloneElement(children, { data: filteredDataByQuery, query, changeQuery: setQuery });
};
