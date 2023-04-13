# clickOutside

It is a utility function that listens for clicks outside of a designated element.

## Usage

## Demo

<script>
  import { clickOutside } from 'sveltronics';

</script>

<div
  use:clickOutside
  style="width: 120px; height: 50px; color: white; background: #f0f;
  cursor: pointer; display: flex; justify-content: center; align-items: center;
  border-radius: 5px;"
>
  Click outside
</div>

```js
<script>
  import { clickOutside } from 'sveltronics';
</script>

<div use:clickOutside>Click outside</div>
```