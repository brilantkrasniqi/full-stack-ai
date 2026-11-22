# `reduce` cheat-sheet

`reduce` walks through an array and **boils it down to one value** (a number, a string, an object...).

```js
array.reduce(callback, startValue)
```

It takes **two arguments**:

1. `callback(acc, item)`: a function that runs once per item.
   - `acc` (accumulator) = the running result so far.
   - `item` = the current item of the array.
   - Whatever you **return** becomes the new `acc` for the next item.
2. `startValue`: what `acc` is on the very first call.

## Example (different from the exercise)

```js
const nums = [2, 3, 4];
const product = nums.reduce((acc, n) => acc * n, 1);
```

| call | `acc` (before) | `n` | returns (next `acc`) |
|------|----------------|-----|----------------------|
| 1    | 1 (the start)  | 2   | 1 * 2 = 2            |
| 2    | 2              | 3   | 2 * 3 = 6            |
| 3    | 6              | 4   | 6 * 4 = 24           |

After the last item, `reduce` returns the final `acc`: `24`. Not a list of every step, just **one value**.

## Things to remember

- The `1` after the function is the **second argument of `reduce`**, not of your function.
- `acc` is what you carry along. `n` is the item you're looking at.
- If your callback has `{ }`, you need `return` (same arrow-function rule as `map`).
