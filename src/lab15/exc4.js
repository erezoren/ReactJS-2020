function fib(n) {
  if ((n == 0) || (n == 1)) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function timed(func) {
  const s0 = Date.now();
  const funcResult=func;
  const s1 = Date.now();
  return `Result = ${funcResult}, Took ${s1 - s0}ms`;
}

console.log(timed(fib(40)));