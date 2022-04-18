const timer = (delay) => {
  
  for (let num of delay) {
    if (num < 0) continue;
    if (isNaN(num)) continue;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (num * 1000));
  }
};
const args = timer(process.argv.slice(2));
console.log(args);
