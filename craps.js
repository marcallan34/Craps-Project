var bankroll = 100;

var point = 0;

function rollNP() {
	var rollNP = Math.floor(Math.random()*(12-1+1)+1);
	point = rollNP;
	return `the point is ${point}`;
}

function roll() {
	var roll = Math.floor(Math.random()*(12-1+1)+1);
		if(roll = point) {
			bankroll = bankroll + 5;
			point = 0;
			return `The roller has made the point`
		} else {
			if(roll = 7){
				bankroll = bankroll - 5;
				point = [];
				return `seven out`
			} else {
				return roll
			}
		}
	}

