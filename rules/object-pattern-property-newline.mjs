/** Local rule: enforce one property per line in destructuring patterns. */
export default {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: { propertiesOnNewline: 'Destructured properties must go on a new line.' },
  },
  create(context) {
    const sourceCode = context.sourceCode;
    return {
      ObjectPattern(node) {
        for (let i = 1; i < node.properties.length; i++) {
          const prev = node.properties[i - 1];
          const curr = node.properties[i];
          if (prev.loc.end.line === curr.loc.start.line) {
            context.report({
              node: curr,
              messageId: 'propertiesOnNewline',
              fix(fixer) {
                const comma = sourceCode.getTokenBefore(curr, (t) => t.value === ',');
                return fixer.replaceTextRange([comma.range[1], curr.range[0]], '\n');
              },
            });
          }
        }
      },
    };
  },
};
