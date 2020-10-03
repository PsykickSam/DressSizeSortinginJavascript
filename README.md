# Dress Size Sorting in Javascript
A sorting system for Dress Sizes for JavaScript array sort.

## Versions
Three versions are avilable here.
 - V.1 | Max. Iteration: 745
 - V.2 | Max. Iteration: 279
 - V.3 | Max. Iteration: 97

## Basic Idea
This sorting is working using basic dress size letters 'L', 'M', 'S'. It checks for these charecters and determine what kind of size it is. 'L' pushes to the top gradually for 'M' keep it middle, and for 'S' it goes bottom gradually. The bigger and smaller data respectively include top and bottom by their length. For number based data like '5L' it calculates the integer from the string and add to the string length and subtract 1 to achive the actual size.

##### In V.3
 - Used Reverse search to find 'L', 'M', 'S'
 - Added conditions
   - Single element checking
   - Interger based string checking
   - & some others to make the algorithm more efficient

## Finally
 - It is fully tweakable for other needs.
 - **It only works with JS array sorting**

#### SadmanDMCX - © - 2020