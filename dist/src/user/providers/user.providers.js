'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const user_entity_1 = require('../model/user.entity');
exports.userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: connection => connection.getRepository(user_entity_1.User),
    inject: ['DATABASE_CONNECTION'],
  },
];
//# sourceMappingURL=user.providers.js.map
