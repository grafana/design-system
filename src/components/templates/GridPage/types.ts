import { IconName } from '@elastiflow/epic-ui';

export type Item = {
  name: string;
  displayName: string;
  icon: IconName;
  enabled: boolean;
  source: string;
};

export type Data = Item[];
