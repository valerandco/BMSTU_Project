<script>
    export let prevImage;
    export let nextImage;
</script>

<style>
    @import './css/EscapistsCarousel.css';
</style>  
  
  <div class="carousel-controls">
    <!-- Стрелка влево -->
  <button
  on:click={prevImage}
  class="arrow-button left  py-[22%] px-[3%] mt-[0%]"
>
  <img
    class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[80px] 8k:h-[80px] 4k:w-[35px] 4k:h-[35px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]"
    src="/img/Arrows/bx-top-arrow.svg"
    alt="Left Arrow"
  />
</button>
 <!-- Стрелка вправо -->
 <button
 on:click={nextImage}
 class="arrow-button right  py-[22%] px-[3%] mt-[0%]"
>
 <img
   class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[80px] 8k:h-[80px] 4k:w-[35px] 4k:h-[35px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]"
   src="/img/Arrows/icon-arrow-right.svg"
   alt="Right Arrow"
 />
</button>

  </div>


  
  