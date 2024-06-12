<script>
  let isVisible = true;  // Переменная для управления видимостью
  import { fade } from 'svelte/transition';

  function toggleVisibility() {
      isVisible = !isVisible;  // Переключаем видимость
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
</script>

    <div class="xsm:order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1 2xl:order-1 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-0">
      <p class="text-white  text-sm font-semibold font-inter  whitespace-pre xsm:px-5 sm:px-5 8k:text-6xl 4k:text-4xl"><span class="text-customText">Developer:</span>               Team17 </p>
      <p class="text-white  text-sm font-semibold font-inter  whitespace-pre xsm:px-5 sm:px-5 8k:text-6xl 4k:text-4xl"><span class="text-customText">Publisher:</span>                 Team17</p>
      <p class="text-white  text-sm font-semibold font-inter  whitespace-pre xsm:px-5 sm:px-5 8k:text-6xl 4k:text-4xl"><span class="text-customText">Release date:</span>          2023.04.17</p>
      <p class="text-white  text-sm font-semibold  font-inter  whitespace-pre xsm:px-5 sm:px-5 8k:text-6xl 8k:mb-20 4k:text-4xl 4k:mb-10"><span class="text-customText">Genre:</span>                       RPG / Action / Strategy</p>
      <p class="text-white  text-sm font-semibold mb-3 font-inter  whitespace-pre xsm:px-5 sm:px-5 8k:text-6xl 8k:mb-20 4k:text-4xl 4k:mb-10 "><span class="text-customText ">Reviews:</span>                   Very positive</p>

      
    </div>

    <button class=" hover:bg-like_hover ml-5 text-white font-bold py-2 px-20 mb-5 border border-white rounded-md transition duration-300 ease-in-out">
        Add to watchlist
      </button>

    
      <div class="flex items-center text-white text-base mb-4 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl cursor-pointer"
      role="button" tabindex="0" on:click={toggleVisibility} on:keydown={handleKeydown}>
     <img src={`src/img/Arrows/Arrow_${isVisible ? 'up' : 'down'}.svg`} alt="Toggle" class="mr-2 transition-transform duration-200" style="transform: rotate({isVisible ? 0 : 0}deg);">
     <p>ON THE AIR</p>
   </div>
 
   <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10 mb-5" />


  {#if isVisible}
  <div class="mb-6 xsm:p-0 sm:p-0">
    <div class="max-w-full px-5 mx-0 xsm:w-full sm:w-full xsm:px-0 sm:px-0 md:px-5 lg:px-5">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/TMcqyFSUUVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  {/if}

  
        


