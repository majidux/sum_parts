const log = console.log;

function partsSums(ls: number[]) {
  const res: number[] = [];
  const list = ls;
  (function calculator(list) {
    if (ls.length !== 0 && list.length !== 0) {
      const red = list.reduce((item, acc) => item + acc);
      res.push(red);
      list.shift();
      calculator(list);
      return;
    }
    res.push(0);
  })(list);
  return res;
}

log('My logs :');
log(
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
);
