# useFlip

Flip an element on hovering over it.

## Demo

<script>
  import { useFlip } from "sveltronics";
  
</script>

<div
  style="width: 240px; height: 320px;"
  use:useFlip
  class="flip rounded text-white flex justify-center items-center"
>
  <div class="content">
    <div class="front">
      <img
        style="width: 240px; height: 320px; object-fit: cover; margin: 0;"
        src="https://tse1.mm.bing.net/th?id=OIP.VRFtOMu9MHIS-41nstIxJgHaE8&pid=Api&P=0"
        alt="img"
      />
    </div>
    <div class="back flex justify-center">
      <div class="pl-1 pr-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat ex
        officia illum aspernatur id impedit labore quos vitae. Cumque ea fugit
        harum, aliquid dolores voluptatem pariatur odit obcaecati non!
      </div>
    </div>
  </div>
</div>

## Usage

```js
<script>
  import { useFlip } from "sveltronics";
  
</script>

<div
  use:useFlip
  class="flip"
>
  <div class="content">
    <div class="front">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.VRFtOMu9MHIS-41nstIxJgHaE8&pid=Api&P=0"
        alt="img"
      />
    </div>
    <div class="back">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat ex
        officia illum aspernatur id impedit labore quos vitae. Cumque ea fugit
        harum, aliquid dolores voluptatem pariatur odit obcaecati non!
      </div>
    </div>
  </div>
</div>
```

Make sure to provide the same classes name as the example.