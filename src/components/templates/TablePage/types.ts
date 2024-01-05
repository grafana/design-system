export type Org = { name: string };
export interface User {
  id: number;
  login: string;
  email: string;
  name: string;
  lastActive: string;
  orgs?: Org[];
}

export type Filter = 'all' | 'lastActive';
