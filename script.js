function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const mainContent = s1.toLowerCase();
	let checkItem = s2.toLowerCase();
	const index = mainContent.indexOf(checkItem);
	console.log(index);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
