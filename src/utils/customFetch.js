let is_ok = true;

const customFetch = (task, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else{
        reject("No disponible");
      }
    }, time);
  });
}

export default customFetch;