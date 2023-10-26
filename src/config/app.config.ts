interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Edit personal information',
    'Read personal information',
    'Read restaurant menus',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage bookings',
    'Manage user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/730cc64f-523e-4711-a474-970fe1fef3b6',
};
