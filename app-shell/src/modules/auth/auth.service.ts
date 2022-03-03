import AuthService, { Bootstrap } from '@hotmart/cas-js';

const authService = new AuthService({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  client_id: process.env.AUTH_CLIENT_ID,
  // accessTokenExpiringNotificationTime: 290
});

const bootstrap = new Bootstrap(authService);

export { bootstrap };
export default authService;
