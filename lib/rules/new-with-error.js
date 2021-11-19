/**
 * @fileoverview Require `throw new Error()` rather than `throw Error()`
 * @author Rich Trott
 * @copyright Rich Trott. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    fixable: 'code'
  },
  create: function (context) {
    const defaultErrorsList = ['Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']

    const errorList = context.options.length !== 0 ? context.options : defaultErrorsList

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      ThrowStatement: function (node) {
        if (node.argument.type === 'CallExpression' && errorList.indexOf(node.argument.callee.name) !== -1) {
          context.report({
            message: 'Use new keyword when throwing.',
            node: node,
            fix: function (fixer) {
              return fixer.insertTextBefore(node.argument, 'new ')
            }
          })
        }
      }
    }
  }
}
