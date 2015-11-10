/**
 * @fileoverview Require `throw new Error()` rather than `throw Error()`
 * @author Rich Trott
 * @copyright 2015 Rich Trott. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var defaultErrorsList = ['Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'];

    var errorList = context.options.length !== 0 ? context.options : defaultErrorsList;

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        'ThrowStatement': function(node) {
            if (node.argument.type === 'CallExpression' && errorList.indexOf(node.argument.callee.name) !== -1) {
                context.report(node, 'Use new keyword when throwing.');
            }
        }
    };

};

module.exports.schema = {
    'type': 'array',
    'items': [
        {
            'enum': [0, 1, 2]
        }
    ],
    'additionalItems': {
        'type': 'string'
    },
    'uniqueItems': true
};