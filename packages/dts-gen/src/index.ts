import * as parser from '@babel/parser';
// import traverse from '@babel/traverse';

const code = `
SampleComponent.propTypes = {
  arrayProp: PropTypes.array,
  boolProp: PropTypes.bool.isRequired,
  numberProp: PropTypes.number,
  objectProp: PropTypes.object,
  stringProp: PropTypes.string,
  anyProp: PropTypes.any,
  elementProp: PropTypes.element,
  nodeProp: PropTypes.node,
  arrayOfString: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  oneOfString: PropTypes.oneOf(['foo', 'bar']),
	oneOfStringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	shapeProp: PropTypes.shape({
		foo: PropTypes.number,
		bar: PropTypes.string
  }).isRequired,
  /**
	 * @param {object} value - The param value.
	 */
};
`;

export function test() {
  const ast = parser.parse(code);
  console.log(ast.program.body[0].expression);
}
