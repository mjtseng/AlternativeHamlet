// random_madness.js
// give Hamlet the chance to go mad at any given page except for the final/death pages

// Hamlet has a 5% chance of insanity at all times

var outcome_num;
outcome_num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
if (outcome_num % 20 == 0){
	document.getElementById("insanity").style.display = "block";
}

/* to include in html files, use this:

	<script type='text/javascript' language='javascript' src='random_madness.js'/>
	
	<p>
		Before you can decide, you start to feel a little weird. It must be all of the emotions from the crazy situation you're stuck in...
	</p>
	<a id="insane" style="display:none" href="HamletInsanity.html">What's happening?</a>

*/

// how to have other options disappear?