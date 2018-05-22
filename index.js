function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(deliLine){
    if (deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`;
    } 
  else {
    return `There is nobody waiting to be served!`;
   }
}
function currentLine(line){
  if (line.length > 0){
    return `The line is currently: 1. Bill, 2. Jane, 3. Ann`;
  }
  else{
    return `The line is currently empty.`;
  }
}
=======
  for (i = 0, deliLine.length > 0, ++i,){
    if (i > 0)
  return `Currently serving ${deliLine}`
    } else{
  return `There is nobody waiting to be served!`;
  }
}

>>>>>>> 7b6647a9d37b7dada3356c5257a87b52c5e846d9
