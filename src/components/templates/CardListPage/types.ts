export type Item = {
  provider: string;
  name: string;
  settings: {
    enabled: boolean;
  };
};

export type Data = Item[];
