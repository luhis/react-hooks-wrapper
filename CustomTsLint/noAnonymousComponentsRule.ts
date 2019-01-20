import * as ts from "typescript";

import * as Lint from "tslint";

// tslint:disable-next-line: no-class
export class Rule extends Lint.Rules.TypedRule {
    /* tslint:disable:object-literal-sort-keys */
    public static readonly metadata: Lint.IRuleMetadata = {
        ruleName: "no-anonymous-components",
        description: "Prevent 'unknown' components being present in the react dev tools.",
        descriptionDetails:
            "Unknown type components are harder to debug.",
        optionsDescription: "",
        options: {
            type: "list",
            listType: {
                type: "array",
                items: { type: "string" },
            },
        },
        optionExamples: [true, [true, "JQueryPromise"]],
        rationale: Lint.Utils.dedent`
            todo
        `,
        type: "functionality",
        typescriptOnly: true,
        requiresTypeInfo: true,
    };
    /* tslint:enable:object-literal-sort-keys */

    public static readonly FAILURE_STRING = "Components must be named";

    // tslint:disable-next-line: readonly-array
    public applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[] {
        // tslint:disable-next-line: no-this
        return this.applyWithFunction(
            sourceFile,
            walk,
            // tslint:disable-next-line: no-this
            ["Promise", ...(this.ruleArguments as ReadonlyArray<string>)],
            program.getTypeChecker(),
        );
    }
}

const AddErrorIsUnNamedFCE = (ctx: Lint.WalkContext<ReadonlyArray<string>>, tc: ts.TypeChecker, node: ts.Node) => {
    if (ts.isFunctionLike(node)) {
        const type = tc.getReturnTypeOfSignature(tc.getTypeAtLocation(node).getCallSignatures()[0]);
        // tslint:disable-next-line: no-if-statement
        if (type.symbol.name === "FunctionComponentElement" && node.name === undefined) {
            ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
    }
};

const walk = (ctx: Lint.WalkContext<ReadonlyArray<string>>, tc: ts.TypeChecker) => {
    const cb = (node: ts.Node): void => {
        // tslint:disable-next-line: no-if-statement
        if (ts.isReturnStatement(node)) {
            const { expression } = node;
            AddErrorIsUnNamedFCE(ctx, tc, expression);
        } else if (ts.isArrowFunction(node)) {
            const { body } = node;
            AddErrorIsUnNamedFCE(ctx, tc, body);
        }

        return ts.forEachChild(node, cb);
    };

    return ts.forEachChild(ctx.sourceFile, cb);
};
