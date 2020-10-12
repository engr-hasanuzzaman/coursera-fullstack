const copiedScheduleName = (schedules: string[], expected: string) => () => {
    if (!schedules.some(s => s === expected)) {
        return expected;
    }
    
    return copiedScheduleName(schedules, `${expected} - copy`);
  };

  let data = ['sumon', 'a', 'b', 'c'];
  let b = copiedScheduleName(data, 'a');
  if(typeof b === 'function'){
      b();
  }
  console.log(b);