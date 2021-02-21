function partsSums(ls: number[]) {
  const res: number[] = [];
  const list = ls;
  (function calculator(list) {
    if (ls.length !== 0) {
      const red = list.reduce((item, acc) => item + acc);
      res.push(red);
      list.shift();
      calculator(list);
      return;
    }
  })(list);
  return res;
}
