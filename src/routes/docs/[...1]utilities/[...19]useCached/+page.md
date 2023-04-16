# cached

Cache results of functions depending on arguments and keep it reactive.

## Usage

```svelte
<script>
  import { cached } from 'sveltronics';

  const add = (a, b) => {
    console.log('Adding:', a, b);
    return a + b;
  };

  const memoizedAdd = cached(add);
</script>

<div>
  {memoizedAdd(1, 2)}
  <-- retunr the cached result function not called for this -->
  {memoizedAdd(1, 2)}
  {memoizedAdd(2, 3)}
  <-- retunr the cached result function not called for this -->
  {memoizedAdd(1, 2)}
  <-- retunr the cached result function not called for this -->
  {memoizedAdd(2, 3)}
</div>
```