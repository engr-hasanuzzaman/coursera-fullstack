function color(value: string) {
    // this is the decorator factory
    return function (tag) {
      // this is the decorator
      // do something with 'target' and 'value'...
      return `<${tag}>${value}</${tag}>`
    };
  }