function printTimes({text,times}) {
  // TODO - fill code (1 line) here

  for (let i=0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world', times: 10 });
