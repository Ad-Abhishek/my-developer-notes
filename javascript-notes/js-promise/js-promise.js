function check(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve('Positive');
    } else {
      reject('Negative');
    }
  });
}

check(-3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));