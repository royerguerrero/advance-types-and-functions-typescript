// The enums must be uppercase as good practice
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const royjuni: User = {
  username: 'royjuni',
  role: ROLES.ADMIN,
};
