function memorizedAdd() {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("saved in cache");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
