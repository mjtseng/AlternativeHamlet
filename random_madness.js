// random_madness.js
// give Hamlet the chance to go mad at any given page except for the final/death pages

// Hamlet has a 5% chance of insanity at all times

var outcome_num;
outcome_num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
if (outcome_num % 20 == 0){
	document.getElementById("insanity").style.display = "block";
}