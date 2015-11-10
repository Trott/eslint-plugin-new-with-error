/**
 * @fileoverview Require `throw new Error()` rather than `throw Error()`
 * @author Rich Trott
 * @copyright 2015 Rich Trott. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/new-with-error"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("new-with-error", rule, {

    valid: [
        {
            code: "throw new Error();"
        },
        {
            code: "throw SyntaxError();",
            options: ['Error']
        }
    ],

    invalid: [
        {
            code: "throw Error();",
            errors: [{
                message: "Use new keyword when throwing.",
                type: "ThrowStatement"
            }]
        },
        {
            code: "throw SyntaxError();",
            errors: [{
                message: "Use new keyword when throwing.",
                type: "ThrowStatement"
            }]
        }
    ]
});
