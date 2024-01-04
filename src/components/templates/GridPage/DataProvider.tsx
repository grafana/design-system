import React from 'react';
import { data } from '@site/src/components/templates/GridPage/data';

interface DataProviderProps {
  children: React.ReactElement;
}

/**
 * A wrapper component to provide data and action props to the child components .
 *  Not part of the template.
 */
export const DataProvider = ({ children }: DataProviderProps) => {
  return React.cloneElement(children, { data });
};
