function XHRcall () {
  const  promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("yes");
        },300);
    })
return promise;
}

export default XHRcall;