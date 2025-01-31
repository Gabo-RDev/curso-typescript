export const printObject = (argument: any) => {
	console.log(argument);
};

export function genericfunction<T>(argument: T): T {
	return argument;
}

export const genericFunctionArrow = <T>(arg: T) => arg;
