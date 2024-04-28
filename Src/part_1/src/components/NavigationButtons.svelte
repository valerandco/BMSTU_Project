<script>
    export let goToSlide;
    export let carouselItems;
    export let mainImageIndex;
    export let hoveredIndex;
    
    function handleMouseEnter(index) {
        hoveredIndex = index;
    }
    
    function handleMouseLeave() {
        hoveredIndex = null;
    }
  </script>
  
  <div class="absolute bottom-0 left-0 w-full h-10 flex justify-center items-center 4k:mb-[20px]">
    {#each carouselItems as { image }, index (image)}
      <div
        role="button"
        tabindex="0"
        class="{ 'w-[50px] h-[9px] 8k:w-[350px] 8k:h-[50px] 8k:mx-[20px] 4k:w-[140px] 4k:h-[25px] 4k:mx-[10px] 2k:w-[60px] 2k:h-[10px] xl:w-[50px] xl:h-[9px] sm:w-[40px] sm:h-[7px] xsm:w-[30px] xsm:h-[8px] 8k:mb-20 mx-1 transition duration-300 ease-in-out cursor-pointer rounded-sm ' + (index === mainImageIndex ? 'bg-white' : (hoveredIndex === index ? 'bg-white' : 'bg-zinc-400')) }"
        on:click={() => goToSlide(index)}
        on:keydown={e => e.key === 'Enter' && goToSlide(index)}
        on:mouseenter={() => handleMouseEnter(index)}
        on:mouseleave={() => handleMouseLeave(index)}
      ></div>
    {/each}
  </div>
  