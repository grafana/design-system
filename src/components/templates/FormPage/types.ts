import { SelectableValue } from '@grafana/data';

export type Data = {
  text: string;
  textarea: string;
  number: number;
  checkbox: boolean;
  radio: string;
  select: SelectableValue<string>;
  switch: boolean;
  slider: number;
};
