/*# JavaScript String Exercises

### is_string
Write a JavaScript function to check whether an `input` is a *string or not*.

    console.log(is_string('w3resource')); 
    true
    console.log(is_string([1, 2, 4, 0]));
    false*/
      function checkString(str){
        if(typeof str === 'string'){
          console.log('it  is string');
        }else {
          console.log('it  is not a string');
        }
      }
      checkString(NaN);
    // it  is not a string
    checkString("shubh");

/**
 * ### is_Blank
Write a JavaScript function to check whether a string *is blank or not*.

    console.log(is_Blank('')); 
    console.log(is_Blank('abc'));
    true 
    false
*/
is_Blank =  function(input) {
  if (input.length === 0)
  return true;
  else 
  return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

/** 
 ### string_Array
Write a JavaScript *function to split a string and convert it into an array* of words.

    console.log(string_to_array("Robin Singh"));
    ["Robin", "Singh"]
*/
var str = "Robin Singh";

var words = str.split(' ');
console.log(words);

/**
 * ## truncate
Write a JavaScript function to remove specified number of characters from a string.

    console.log(truncate_string("Robin Singh",4));
    "Robi"

 */

truncate_string = function (str1, length) {
  
  if ((str1.constructor === String) && (length>0)) {
      return str1.slice(0, length);toLowerCase() == "the "
  }
};
console.log(truncate_string("Robin Singh",4));

/**
 * 
### abbrev_name
Write a JavaScript function *to convert* a string in *abbreviated form*.

    console.log(abbrev_name("Robin Singh"));
    "Robin S."
 */

abbrev_name = function (str1) {
  var split_names = str1.trim().split(" ");
  //console.log(split_names);
  if (split_names.length > 1) {
      return (split_names[0] + " " + split_names[1].charAt(0) + ".");
  }
  return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

/**function abbrev_name (str) {
var r = str.split(' ');
//console.log(r[1]);
var res = r[1];
res = res.substring(0,1);
//console.log(res[0,1]);
return r[0] + ' ' + res + '.';
}
console.log(abbrev_name("Robin Singh")); 
*/
/**
 * ## protect
Write a JavaScript function to hide email addresses to protect from unauthorized user.

    console.log(protect_email("robin_singh@example.com"));
    "robin...@example.com"
 */
function protectEmail(userEmail){
  var splitted = userEmail.split("@");
  var part1=splitted[0];
  var avg=part1.length/2;
  part1=part1.slice(0,(part1.length-avg));
  console.log(part1);
  return part1 + "...@" + splitted[1];
}
protectEmail("psubham94@gmail.com");
/**
 * ### parameterize
Write a JavaScript function to *parameterize a string*.

    console.log(string_parameterize("Robin Singh from USA."));
    "robin-singh-from-usa"
 */
function parameterize(str){
  return str.trim().toLowerCase().replace(/\s/g, "-");
}
console.log(string_parameterize("Robin Singh from USA."));

/**
 * ### capitalize_first
Write a JavaScript function to *capitalize the first letter of a string*. 

    console.log(capitalize('js string exercises'));
    "Js string exercises"

 */
function capitalize_first(str){
  var uppercaseFirstLetter = str.charAt(0).toUpperCase();
  return (uppercaseFirstLetter + str.slice(1)); 
}
capitalize_first("shubham");
/**
 * ### capitalize_words
Write a JavaScript function to *capitalize* the first letter *of each word* in a string.

    console.log(capitalize_Words('js string exercises'));
    "Js String Exercises"
 */
function capitalize_Words(str){
  return str.split(' ').map(v => (v[0].toUpperCase() + v.slice(1) )).join(' ');	
}
capitalize_Words("shubham is in altcampus");
capitalize_Words("shubh suraj shashi shrijan");


/**
 * 
### swapcase
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and *converts upper case letters to lower case*, and lower case letters to upper case.

    console.log(swapcase('AaBbc'));
    "aAbBC"
 */

 function swapcase(str){
  return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
});
}
swapcase("sHuBh");
//"ShUbH"

/*

### camelize
Write a JavaScript function *to convert a string into camel case*.

    console.log(camelize("JavaScript Exercises")); 
    console.log(camelize("JavaScript exercises")); 
    console.log(camelize("JavaScriptExercises"));
    "JavaScriptExercises" 
    "JavaScriptExercises" 
    "JavaScriptExercises" 
    */

    function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
        return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
/**
 * ### uncamelize
Write a JavaScript function to *uncamelize* a string.

    console.log(uncamelize('helloWorld','_'));
    "hello_world"
 */
function uncamelize(str){
  return str.split("_").map(v=> (v[0].toUpperCase() + v.slice(1) )).join(' ');
}



/*********************************************Ends-with & Start-with ********************************************/

/**### capitalize 
Write a JavaScript function to *capitalize each* word in the string. 

    console.log(capitalizeWords('js string exercises'));
    "JS STRING EXERCISES */
function capitalizeEachWords(str){
  return str.toUpperCase();
}
console.log(capitalizeEachWords('JS STRING EXERCISES'));    

/**### capitalize II
Write a JavaScript function to *uncapitalize each word* in the string.

    console.log(unCapitalizeWords('JS STRING EXERCISES'));
    "js string exercises" */

function uncapitalize(str){
  return str.toLowerCase();
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));

/**### isUpper
Write a JavaScript function to *test whether the character at the provided* (character) index is upper case. 

    console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
    false */
function isUpperCaseAt(str, index) {
  return str.charAt(index).toUpperCase() === str.charAt(index);
     }
 console.log(isUpperCaseAt('Js STRING EXERCISES', 9));//true
/**
 * 
 * ### isLower
Write a JavaScript function to *test whether the character at the provided (character) index is lower case*. 

    console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
    true
 */
function isLowerCaseAt(str, index) {
  return str.charAt(index).toLowerCase() === str.charAt(index);
     }
 console.log(isLowerCaseAt('Js STRING EXERCISES', 1));



/**
 * 
 * ### humanize II
Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th. 

    console.log(humanize(1));
    console.log(humanize(20));
    "1st"
    "20th"
 */

function humanize(number){
  if(number % 100 >=11 && number % 100 <=13){
    return number + "th";
  }
  switch(number % 10) {
    case 1: return number + "st";
    case 2: return number + "nd";
    case 3: return number + "rd";
  }
  return number + "th";
}


/**
 * 
Write a JavaScript function to test whether a *string starts with a specified string*.

    console.log(startsWith('js string exercises', 'js'));
    true} str 
 */
function testStr(str){
  return str.startsWith("js");
}
testStr('JS');//true
/**
 * ### endsWith
Write a JavaScript function to *test* whether a string *ends with a specified string*.

    console.log(endsWith('JS string exercises', 'exercises'));
    true

 */

 function testString(str){
   return str.endsWith("exercises");
 }
 testString("JS string exercises");//true
 /*********************************************************************************************************************************/
 function primeFactors(number) 
{ 
	while (number%2 == 0) 
	{  
	  return number=number/2;
	} 
	for (var i = 3; i <= Math.sqrt(number); i = i+2) 
	{ 
		while (number%i == 0) 
		{ 
			retrun i ;
			number=number/2;
		} 
	} 
	if (number > 2) 
		console.log(number);
} 


/***
 * ************************************************************************************************
 */
function findOutlier(integers){
  var evens = [];
   var odds = [];
   for (var i = 0; i < integers.length; i++) {
       if (integers[i] % 2) {
           evens.push(integers[i]);
       } else {
           odds.push(integers[i]);
       }
   }
   var elen = evens.length;
   var olen = odds.length

   if (elen > olen) {
       return Number(odds.toString());
   } else {
       return Number(evens.toString());
   }
   }
   /****************************************
    * *********************************8 */

function perfectpower(n){
  //Get square root of n;
    var sqrtn = Math.sqrt(n);
    var x = Array.apply(null, Array(sqrtn+1)).map(function (_, i) {return i;});
    var y = [...Array(10).keys()];
  var perfects = [];
  var message = null;
  
  for(var i = 2; i<x.length; i++){
      for(var j = 2; j<y.length; j++){
          var xtothey = (Math.pow(x[i],y[j]));
          if(xtothey === n){
            perfects.push(x[i],y[j]);
            message = "";
          }else if (xtothey !== n){
          }
      }
  }
  
  return perfects;
  
  }

  /*********************************************************/
  function sums(a, b) {
    var sum = "";
    var r = 0;
    var a1, a2, i;
    // Pick the shortest string as first parameter and the longest as second parameter in my algorithm
    if (a.length < b.length) {
      a1 = a;
      a2 = b;
    }
    else {
      a1 = b;
      a2 = a;
    }
    a1 = a1.split("").reverse();
    a2 = a2.split("").reverse();
  
    // Sum a1 and a2 digits
    for (i = 0; i < a2.length; i++) {
      var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
      
      sum += t % 10;
  
      r = t < 10 ? 0 : Math.floor(t / 10);
    }
    // Append the last remain
    if (r > 0)
      sum += r;
  
    sum = sum.split("").reverse();
    
    // Trim the leading "0"
    while (sum[0] == "0")
      sum.shift();
  
    return sum.length > 0 ? sum.join("") : "0";
  }


  /***
   * // Java program to find Deteminant of 
// a matrix 
class GFG { 
	
	// Dimension of input square matrix 
	static final int N = 4; 
	
	// Function to get cofactor of 
	// mat[p][q] in temp[][]. n is 
	// current dimension of mat[][] 
	static void getCofactor(int mat[][], 
			int temp[][], int p, int q, int n) 
	{ 
		int i = 0, j = 0; 
	
		// Looping for each element of 
		// the matrix 
		for (int row = 0; row < n; row++) 
		{ 
			for (int col = 0; col < n; col++) 
			{ 
				
				// Copying into temporary matrix 
				// only those element which are 
				// not in given row and column 
				if (row != p && col != q) 
				{ 
					temp[i][j++] = mat[row][col]; 
	
					// Row is filled, so increase 
					// row index and reset col 
					//index 
					if (j == n - 1) 
					{ 
						j = 0; 
						i++; 
					} 
				} 
			} 
		} 
	} 
	
	/* Recursive function for finding determinant 
	of matrix. n is current dimension of mat[][]. */
	static int determinantOfMatrix(int mat[][], int n) 
	{ 
		int D = 0; 
	
		// Base case : if matrix contains single 
		// element 
		if (n == 1) 
			return mat[0][0]; 
		
		// To store cofactors 
		int temp[][] = new int[N][N]; 
		
		// To store sign multiplier 
		int sign = 1; 
	
		// Iterate for each element of first row 
		for (int f = 0; f < n; f++) 
		{ 
			// Getting Cofactor of mat[0][f] 
			getCofactor(mat, temp, 0, f, n); 
			D += sign * mat[0][f] 
			* determinantOfMatrix(temp, n - 1); 
	
			// terms are to be added with 
			// alternate sign 
			sign = -sign; 
		} 
	
		return D; 
	} 
	
	/* function for displaying the matrix */
	static void display(int mat[][], int row, int col) 
	{ 
		for (int i = 0; i < row; i++) 
		{ 
			for (int j = 0; j < col; j++) 
				System.out.print(mat[i][j]); 
				
			System.out.print("\n"); 
		} 
	} 
	
	// Driver code 
// 	public static void main (String[] args) 
// 	{ 
		
// 		int mat[][] = {{1, 0, 2, -1}, 
// 						{3, 0, 0, 5}, 
// 						{2, 1, 4, -3}, 
// 						{1, 0, 5, 0}}; 
	
// 		System.out.print("Determinant " + 
// 					"of the matrix is : "+ 
// 			determinantOfMatrix(mat, N)); 
// 	} 
// } 

  