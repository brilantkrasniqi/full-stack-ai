# Promises and async/await cheat-sheet

## The problem
Some things take time (a network request, a timer, reading a file). JS doesn't stop and wait.
It keeps running the next lines and comes back when the result is ready.

## Promise = "a value that will arrive later"
A promise is always in one of 3 states:

| state       | meaning                         |
|-------------|---------------------------------|
| `pending`   | still waiting                   |
| `fulfilled` | finished OK, it has a value     |
| `rejected`  | failed, it has an error         |

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000); // call resolve(value) on success
  // reject(new Error('oops'))             // call reject(error) on failure
});
```

## Using a promise: `.then` / `.catch`
```js
p.then(value => console.log(value))   // runs when fulfilled
 .catch(error => console.log(error))  // runs when rejected
```

## async / await = the same thing, written like normal top-to-bottom code
```js
async function run() {
  try {
    const value = await p;   // pauses THIS function until p is done
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}
```
- `await` only works inside an `async` function (or at the top level of a module file).
- An `async` function always returns a promise.
- Forget `await` and you get the promise itself (`Promise { <pending> }`), not the value.

## fetch (asks a server for data) returns a promise
```js
const response = await fetch('https://example.com/data');
const data = await response.json();   // .json() is also a promise, so it needs await
```
Important: `fetch` only rejects on network failure. A 404 or 500 still gives you a
`response`. Check `response.ok` yourself.

## Running things together
- `Promise.all([a, b, c])`: waits for all. If one rejects, the whole thing rejects.
- `Promise.allSettled([a, b, c])`: waits for all and tells you what happened to each one.
