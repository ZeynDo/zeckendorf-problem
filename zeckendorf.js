// NOT WORKING FOR LARGE NUMBERS 

function solveProblem(input) {
	

	var f = new Array (0, 1, 1);
	var t = new Array ();
	var isFibonacci = false;
	var fibonacciTranslation;
	
	if (input==0 || input==1) {
		return input + " = " + input + " is a Fibonacci number.";
	}
	
	for (i=2; input>=f[i]; i++) { 	// Build Fibonacci number
		f[i+1]=f[i]+f[i-1];
		console.log(f[i+1]);
		
		if (f[i+1]==input) {
			return input + " = " + input + " is a Fibonacci number.";
		}
	}	
	
	f.pop(); 						// Delete last Fibonacci-number
	console.log(f);
	
	var addedF=0;					// Add up every 2nd fibonacci number, till the sum is >= the input
	for (i=f.length-1; input>=addedF; i=i-2) {
		addedF = addedF+f[i];
		console.log(addedF);
		t.push(f[i]);
		
		if (addedF>input) {
			addedF = addedF - f[i]; // Remove last fibonacci number from sum if sum>input			
			t.pop();
			
		while (addedF!=input) {
			i=i-1;
			addedF = addedF+f[i];
			t.push(f[i]);
			
			if (addedF>input) {
			addedF = addedF - f[i]; // Remove last fibonacci number from sum if sum>input			
			t.pop();
			}

		break;
		}
		}
	}
		
	console.log(addedF);
	console.log(t);
	
	var output=t[0];
	for (i=1; i<=t.length-1; i++) {
		if (Number.isInteger(t[i]) && t[i]!=0) {
		output= output + " + " + t[i];
		}
	}
		console.log(output);
		
var fibonacciTranslation=input + " = " + output;
	return fibonacciTranslation;
	
}