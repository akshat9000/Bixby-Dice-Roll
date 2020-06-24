module.exports.function = function rollDice () {

  var sum = 0;
  var results = [];

  var one = Math.floor(Math.random()*6) + 1;
  var two = Math.floor(Math.random()*6) + 1;
  // var one = 1;
  // var two = 1;
  var snakeeyes = false;

  results.push(one);
  results.push(two);
  if(one == 1 && two == 1)  snakeeyes = true;
  sum = one + two;

  return {
    sum: sum,
    roll: results,
    snakeeyes: snakeeyes
  }
}
