'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
const testing_1 = require('@nestjs/testing');
const user_resolver_1 = require('./user.resolver');
describe('UserResolver', () => {
  let resolver;
  beforeEach(() =>
    __awaiter(this, void 0, void 0, function*() {
      const module = yield testing_1.Test.createTestingModule({
        providers: [user_resolver_1.UserResolver],
      }).compile();
      resolver = module.get(user_resolver_1.UserResolver);
    }),
  );
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
//# sourceMappingURL=user.resolver.spec.js.map
