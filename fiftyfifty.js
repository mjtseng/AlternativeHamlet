// fiftyfifty.js
// use javascript to generate either a 0 or 1, representing two options
// the odds are 50-50

var outcome_num;
outcome_num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
if (outcome_num % 5 == 0){
	document.getElementById("option_one").style.display = "block"; 
}
else{
	document.getElementById("option_two").style.display = "block";
}

/*
	// to include in html files, use this:
	<script type='text/javascript' language='javascript' src='random_madness.js'/>
*/