function abbrevName(name){
  var nam = name.split(' ');
    // code away
  return (nam[0][0]+'.' + nam[1][0]).toUpperCase();
}

// PREP
// Parameters: Name- finding the first and last name
// Return: returning the output which is the capitilize initials with a dot seperating it 
// Example: Give the same type of an example they might give you: Tarafinah Destine => T.D
// Psuedo Code: Write down how you did the code: 'created a function with a parameter called name and 
//  then clear a variable which is nam and assigned a split method and 
//  then redid the return of finding the index and character of the first and last name and 
//  used the to upper case method'