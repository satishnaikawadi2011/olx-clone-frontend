import { array } from 'yup';

export const changeArray = (value, myArray, update) => {
	for (var i in myArray) {
		if (myArray[i].value === value) {
			for (var property in update) {
				myArray[i][property] = update[property];
			}
			break; //Stop this loop, we found it!
		}
	}
};
