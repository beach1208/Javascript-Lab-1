/*
	JavaScript Lab1

	Nagisa Kojima
*/


// Question 1
function makeAbba(a, b) {
	return a + b + b + a;
}
var answer1 = makeAbba("Hi", "Bye");
var answer2 = makeAbba("Yo", "Alice");
var answer3 = makeAbba("What", "Up");

document.write("<h1>Question 1</h1>");
document.write("<h2>Test Case 1 : " + answer1 + "</h2>");
document.write("<h2>Test Case 2 : " + answer2 + "</h2>");
document.write("<h2>Test Case 3 : " + answer3 + "</h2>");

//Question 2 Given a string, return true if it ends in "ly".
function endsLy(str) {
	if (str.endsWith("ly")){
		return true;
	}
	else {
		return false;
	}

}
var test1 = endsLy("oddly");
var test2 = endsLy("y");
var test3 = endsLy("oddy");

document.write("<h1>Question 2</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");


//Question 3 Given a string of even length, return the first half. So the string "WooHoo"yields "Woo".
function firstHalf(str) {
	if(str.length % 2 === 0) {
		return str.slice(0,str.length / 2);
}
else {
	return str;
}

}
var test1 = firstHalf("WooHoo");
var test2 = firstHalf("HelloThere");
var test3 = firstHalf("abcdef");

document.write("<h1>Question 3</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>")
document.write("<h2>Test Case 2 : " + test2 + "</h2>")
document.write("<h2>Test Case 3 : " + test3 + "</h2>")

//Question 4 Given a string, return a "rotated right 2" version where the last 2 charsare moved to the start. The string length will be at least 2
function right2(str) {
	return str.slice(str.length - 2) + str.slice(0,str.length-2);
}
var test1 = right2("Hello");
var test2 = right2("java");
var test3 = right2("Hi");

document.write("<h1>Question 4</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");


// Given two strings, append them together (known as "concatenation")
// and return the result.
// However, if the concatenation creates a double-char,
// then omit one of the chars, so "abc" and "cat" yields "abcat".
function conCat(str1,str2) {
	if (str1.charAt(str1.length -1) == str2.charAt(0)){
		return str1 + str2.substring(1,);
	}
	else {
		return str1 + str2;
	}
}
var test1 = conCat("abc","cat");
var test2 = conCat("dog","cat");
var test3 = conCat("abc","");

document.write("<h1>Question 5</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");

// Question 6
// Given a string, return true if the first 2 chars in the string also appear atthe end of the string, such as with "edited"
function frontAgain(str) {
	if (str.slice(0,1) == str.slice(-2,-1)) {
		return true;

	}
	else {
		return false;
	}
}
var test1 = frontAgain("edited");
var test2 = frontAgain("edit");
var test3 = frontAgain("ed");

document.write("<h1>Question 6</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");

// Question 7
function deFront(str) {
	if (str[0] == "a") {
		return str[0] + str.slice(-2,);
	}
	else if (str[1] == "b") {
		return str[1] + str.slice(-2,);
	}
	else {
		return str.substring(2,);
	}
}
var test1 = deFront("Hello");
var test2 = deFront("java");
var test3 = deFront("away");

document.write("<h1>Question 7</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");

// Question 8
function withoutX2(str){
	if (str[0] == "x") {
		return str.substring(1,);
	}
	else if (str[1] == "x") {
		return str[0] + str.substring(2,)
	}
	else {
		return str;
	}
}

var test1 = withoutX2("xHi");
var test2 = withoutX2("Hxi");
var test3 = withoutX2("Hi");

document.write("<h1>Question 8</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");

//Question 9
function lastChars(str1,str2) {
	if(str1.length == 0) {
		return "@" + str2.charAt(-1);
	}
	else if (str2.length == 0) {
		return str1.charAt(0) + "@";
	}
	else {
		return str1.charAt(0) + str2.charAt(str2.length -1);
	}
}

var test1 = lastChars("last","chars");
var test2 = lastChars("yo","java");
var test3 = lastChars("hi","");

document.write("<h1>Question 9</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");

// Question 10
function middleTwo(str) {
	if(str.length % 2 == 0) {
		 mid = str.length/2;
		return str.slice(mid -1, mid +1);
	}
	else {
		return str;
	}
}

var test1 = middleTwo("string");
var test2 = middleTwo("code");
var test3 = middleTwo("Practice");

document.write("<h1>Question 10</h1>");
document.write("<h2>Test Case 1 : " + test1 + "</h2>");
document.write("<h2>Test Case 2 : " + test2 + "</h2>");
document.write("<h2>Test Case 3 : " + test3 + "</h2>");
