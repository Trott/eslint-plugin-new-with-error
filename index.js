'use strict';

module.exports = {
  rules: {
    'new-with-error': require('./lib/rules/new-with-error')
  },
  rulesConfig: {
    'new-with-error': 1
  }
};