export const getValue = (num: number | undefined): string => {
	if (num === undefined) {
		return 'no value';
	}

	switch (num) {
		case 10:
			return 'skip';
		case 11:
			return 'reverse';
		case 12:
			return 'draw2';
		case 13:
			return 'wild';
		case 14:
			return 'draw4';
		default:
			return num.toString();
	}
};

export const getColor = (num: number | undefined): string => {
	if (num === undefined) {
		return 'no color';
	}

	switch (num) {
		case 0:
			return 'red';
		case 1:
			return 'blue';
		case 2:
			return 'green';
		case 3:
			return 'yellow';
		case 4:
			return 'special';
		default:
			return num.toString();
	}
};
