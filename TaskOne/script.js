const func = (obj, path) => {
	try {
		const lowerCase = path.toLowerCase();
		const splittedPath = lowerCase.split('.');

		const firstElement = splittedPath[0];
		const lastElement = splittedPath[1];

		const result = obj[firstElement][lastElement];

		return result;
	} catch (err) {
		if (err instanceof ReferenceError) {
			throw new SyntaxError(
				'Invalid parameters, parameters must be value of Object(obj: {obj1:""}) and String("string.string")'
			);
		} else {
			throw new SyntaxError(
				'Invalid parameters, parameters must be value of Object(obj: {obj1:""}) and String("string.string")'
			);
		}
	}
};
const paramOne = { prop: { prop2: 'Apple', prop3: 'Orange' } };
const paramTwo = 'prop.prop2';

const test = func(paramOne, paramTwo);
console.log(test);
