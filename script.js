function firstNonRepeatedChar(str) {
 // Write your code here
	let counter = {};
	// counter.str[0] = 1;
	for(let i = 0; i<str.length; i++){
		// console.log(counter, i);
		let key = str[i];
		if(key in counter){
			counter[key] = counter[key] + 1;
		}
		else{
			counter[key] = 1;
		}
	}
	for (let i = 0; i < str.length; i++) {
		let key = str[i];
		if(counter[key] == 1){
			return key;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));