import { User } from '@site/src/components/templates/TablePage/types';

const names = [
  'John Doe',
  'Alice Smith',
  'Bob Jones',
  'Emma Watson',
  'Michael Jackson',
  'Lisa Simpson',
  'Peter Parker',
  'Tony Stark',
  'Olivia Smith',
  'Charlie Brown',
  'Grace Kelly',
  'David Jones',
  'Natalie Portman',
  'Robert De Niro',
  'Emily Watson',
  'Jason Statham',
  'Kate Winslet',
  'Leonardo DiCaprio',
  'Brad Pitt',
  'Scarlett Johansson',
];

const organizations = ['Main Org.', 'Alpha', 'Beta Corporation', 'Gamma Limited', 'Delta Group'];

function generateLastActiveDate(olderThan30Days: boolean) {
  const date = new Date();
  date.setDate(
    date.getDate() - (olderThan30Days ? Math.floor(Math.random() * 165) + 30 : Math.floor(Math.random() * 5) + 1)
  );
  return date.toISOString().split('.')[0] + 'Z';
}

function generateLoginFromName(name: string) {
  return name.toLowerCase().replace(/\s/g, '_');
}

function generateOrgs() {
  let orgNames = [...organizations];
  return [orgNames.splice(Math.floor(Math.random() * orgNames.length), 1)[0]].map((name) => ({ name }));
}

function generateUsersData() {
  return names.map((name, index) => {
    const olderThan30Days = index < 15;
    return {
      id: index + 1,
      login: generateLoginFromName(name),
      email: `${generateLoginFromName(name)}@example.com`,
      name: name,
      orgs: generateOrgs(),
      lastActive: generateLastActiveDate(olderThan30Days),
    };
  });
}

export const users: User[] = generateUsersData();
