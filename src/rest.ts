import { User, ROLES } from './enums';

const currentUser: User = {
  username: 'royjuni',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = (user: User) => {
  if (user.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log(checkAdminRole(currentUser));

export const checkRoles = (user: User, ...roles: string[]) => {
  if (roles.includes(user.role)) {
    return true;
  }
  return false;
};

console.log(checkRoles(currentUser, ROLES.ADMIN, ROLES.CUSTOMER));
