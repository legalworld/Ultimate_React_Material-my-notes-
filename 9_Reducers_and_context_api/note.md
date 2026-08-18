# (Q-1) tell me in short what filter array method does in js.

==>

Yes. Just like `filter()`, **`map()` also returns a new array**.

The difference is:

- `filter()` → **selects** elements based on a condition.
- `map()` → **transforms** every element.

```js
const nums = [1, 2, 3, 4];

const result = nums.map((num) => num * 2);

console.log(result); // [2, 4, 6, 8]
```

### Simple way to remember

```text
filter → "Which elements should I keep?"
map    → "What should each element become?"
```

So:

```js
[1, 2, 3]
  .filter((x) => x > 1)
  [
    // [2, 3]

    (1, 2, 3)
  ].map((x) => x * 10);
// [10, 20, 30]
```

**Both return a new array**, but `map()` normally returns an array with the **same number of elements** as the original.
