import { add, capitalize, formatNumber, groupBy, type User } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(ok):', formatNumber(123.456, { precision: 2 }));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

console.log('group ok:', groupBy(users, 'name'));
