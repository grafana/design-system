import { Data } from '@site/src/components/templates/GridPage/types';

export const data: Data = [
  {
    name: 'github',
    displayName: 'GitHub',
    icon: 'github',
    enabled: true,
    source: 'system',
  },
  {
    name: 'gitlab',
    displayName: 'GitLab',
    icon: 'gitlab',
    enabled: true,
    source: 'system',
  },
  {
    name: 'google',
    displayName: 'Google',
    icon: 'google',
    enabled: true,
    source: 'system',
  },
  {
    name: 'generic_oauth',
    displayName: 'Generic OAuth',
    icon: 'lock',
    enabled: false,
    source: 'system',
  },
  {
    name: 'grafana',
    displayName: 'Grafana',
    icon: 'grafana',
    enabled: true,
    source: 'system',
  },
  {
    name: 'azuread',
    displayName: 'Azure AD',
    icon: 'microsoft',
    enabled: false,
    source: 'system',
  },
  {
    name: 'okta',
    displayName: 'Okta',
    icon: 'okta',
    enabled: false,
    source: 'system',
  },
];
