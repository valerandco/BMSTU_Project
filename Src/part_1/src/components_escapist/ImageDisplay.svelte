<script>
    export let images;
    export let currentIndex;
  </script>

<style>
  @import './css/EscapistsCarousel.css';
</style>  
  
  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />  