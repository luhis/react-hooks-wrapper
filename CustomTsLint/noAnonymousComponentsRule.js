"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
// tslint:disable-next-line: no-class
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tslint:disable-next-line: readonly-array
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        // tslint:disable-next-line: no-this
        return this.applyWithFunction(sourceFile, walk, ["Promise"].concat(this.ruleArguments), program.getTypeChecker());
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "no-anonymous-components",
        description: "Prevent 'unknown' components being present in the react dev tools.",
        descriptionDetails: "Unknown type components are harder to debug.",
        optionsDescription: "",
        options: {
            type: "list",
            listType: {
                type: "array",
                items: { type: "string" }
            }
        },
        optionExamples: [true, [true, "JQueryPromise"]],
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            todo\n        "], ["\n            todo\n        "]))),
        type: "functionality",
        typescriptOnly: true,
        requiresTypeInfo: true
    };
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = "Components must be named";
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
var AddErrorIsUnNamedFCE = function (ctx, tc, node) {
    if (ts.isFunctionLike(node)) {
        var type = tc.getReturnTypeOfSignature(tc.getTypeAtLocation(node).getCallSignatures()[0]);
        // tslint:disable-next-line: no-if-statement
        if (type.symbol.name === "FunctionComponentElement" && node.name === undefined) {
            ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
    }
};
var walk = function (ctx, tc) {
    var cb = function (node) {
        // tslint:disable-next-line: no-if-statement
        if (ts.isReturnStatement(node)) {
            var expression = node.expression;
            AddErrorIsUnNamedFCE(ctx, tc, expression);
        }
        else if (ts.isArrowFunction(node)) {
            var body = node.body;
            AddErrorIsUnNamedFCE(ctx, tc, body);
        }
        return ts.forEachChild(node, cb);
    };
    return ts.forEachChild(ctx.sourceFile, cb);
};
var templateObject_1;
