let arr = [ { id: 1, value: 3 }, { id: 2, value: 7 }, { id: 3, value: 3 }, { id: 4, value: 1 }, { id: 5, value: 4 } ];

let value = arr.map((item) => item.value);
value.sort((a, b) => a - b);

let repeatingNums = value.reduce(function(obj, b) {
	obj[b] = ++obj[b] || 1;
	return obj;
}, {});

let newValue = 0;

for (let i = 0; i <= value.length; i++) {
	if (value[i] === value[value.length - 1]) {
		newValue = value[i] += 1;
	}
}

let id = arr.map((item) => item.id);
let newId = 0;

for (let i = 0; i <= id.length; i++) {
	if (id[i] === id[id.length - 1]) {
		newId = id[i] += 1;
	}
}

let arr2 = { id: `${newId}`, value: `${newValue}` };

console.log(repeatingNums);
console.log(arr2);
