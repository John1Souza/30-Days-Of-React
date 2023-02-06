// 1. Declare an _empty_ array;
// const array = ();
// 2. Declare an array with more than 5 number of elements
let arr = [1, "Ana", 3, "Jose", "Pêssego"];
console.log(arr);
// 3. Find the length of your array
console.log(arr.length);
// 4. Get the first item, the middle item and the last item of the array
let newArray = [arr[0], arr[2], arr[4]];
console.log(newArray);
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
const _mixedDataTypes_ = [34, "Luan", "Uva", "Mango", 37, 'Mother', 46, 'Presto'];
console.log(_mixedDataTypes_.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
// 7. Print the array using _console.log()_
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3],itCompanies[6]);
// 10. Print out each company
console.log(itCompanies);
// 11. Change each company name to uppercase one by one and print them out
let itCompanyToUpperCase = [];
for (var i = 0; i < itCompanies.length; i++){
    itCompanyToUpperCase.push(itCompanies[i].toUpperCase())
}
console.log(itCompanyToUpperCase);
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// for (var i = 0; i < itCompanies.length; i++){
//     if(i === itCompanies.length - 1){
//         console.log('and')
//     }
//     console.log(`${itCompanies.join(", ")}`);
// }
// console.log(`are big IT companies.`)
console.log(`${itCompanies.join(", ")} and ${itCompanies[6]} are big IT companies`);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
var itCompaniesDoesExists = ["Facebook","Amazon", "IBM", "Oracle", "Apple", "Google", "Microsoft" ]

for (var j = 0; j < itCompaniesDoesExists.length; j++){
    if (!itCompanies.includes(itCompaniesDoesExists[j])){
        console.log(itCompaniesDoesExists[j])
    }
    
}

// 14. Filter out companies which have more than one 'o' without the filter method
var itCompaniesO = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
let filtered = [];

for (var i = 0; i < itCompaniesO.length; i++){
    var company = itCompaniesO[i];
    var count = 0;
    for (var j = 0; j < company.length; j++){
        if (company[j].toLowerCase() == "o"){
            count ++; 
        }  
       
    }
    if (count > 1) {
        filtered.push(company);
      }
}
console.log(filtered)
// 15. Sort the array using _sort()_ method
console.log(itCompaniesO.sort())
// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse())
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4))
// 20. Remove the first IT company from the arrayvar 
var itCompaniesZ = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
itCompaniesZ.shift()
console.log(itCompaniesZ)
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
var itCompaniesL = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
itCompaniesL.pop()
console.log(itCompaniesL)
// 23. Remove all IT companies
var itCompaniesZy = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
itCompaniesZ.splice(0, itCompaniesZ.length);
console.log(itCompaniesZ); // Output: []