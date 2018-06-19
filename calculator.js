

let input1 = process.argv[2]
let operator = process.argv[3]
let input2 = process.argv[4]

//console.log(process.argv[2] === 2)
console.log('operator is ' + operator)

if(operator == '%'){
  //console.log('divide')
  let answer1 = divide(input1, input2)
  console.log(answer1)
}

if(operator == 'x'){
  //console.log('multiply')
  let answer1 = multiply(input1, input2)
  console.log(answer1)
}

if(operator == '+'){
  //console.log('add')
  let answer1 = add(input1, input2)
  console.log(answer1)
}

function divide(x, y){
//  console.log('function hit')
  let answer = x / y

  return answer;
  //console.log(answer)
}

function multiply(x, y){
//  console.log('function hit')
  let answer = x *  y

  return answer;
  //console.log(answer)
}

function add(x, y){
//  console.log('function hit')
  x = parseInt(x)
  y = parseInt(y)
  let answer = x + y

  return answer;
  //console.log(answer)
}
