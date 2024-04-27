<!-- ImageDisplay.svelte -->
<script>
    export let images;
    export let currentIndex;
  </script>
  
  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />  