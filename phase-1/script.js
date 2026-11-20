const ok = Promise.resolve('fine');
const bad = Promise.reject(new Error('oops'));
Promise.all([ok, bad]).then(results => console.log(results)).catch(err=>console.log('cought',err.message));