# cloned

Cloned an object

## Usage

```svelte
<script>
  import { cloned } from "sveltronics";

  let user = {
    name: 'Mark',
    address: {
      country: 'US', 
    }
  }

  let cloneObj = useCloned(user);
</script>

<div>
  {cloneObj}
</div>
```