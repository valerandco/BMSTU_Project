<script>
    

  function handleThumbnailClick(i) {
    currentIndex = i;
  }

  function handleKeyPress(event, i) {
    if (event.key === 'Enter' || event.key === ' ') {
      currentIndex = i;
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

    export let currentIndex = 0 
    export let images

</script>

<style>
@import '../components_escapist/css/EscapistsCarousel.css';
</style>
  
  
  <main class="p-0 relative">
    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />
    <!-- Стрелка влево -->
  <button
  on:click={prevImage}
  class="arrow-button left  8k:py-[1700px] 4k:py-[850px] 2k:py-[430px] pl-4 xl:py-[290px] xl:mt-[30px] lg:py-[230px] lg:mt-[50px] md:py-[170px] md:mt-[30px] sm:py-[135px] 8k:pl-[165px] 4k:pl-[80px] 2k:pl-[35px] xl:pl-[25px] lg:pl-[20px] md:pl-[13px] sm:pl-[13px]"
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
 class="arrow-button right pr-4 8k:py-[1700px] 4k:py-[850px] 2k:py-[430px] xl:py-[290px] xl:mt-[30px] lg:py-[230px] lg:mt-[50px] md:py-[170px] md:mt-[30px] sm:py-[135px] 8k:pr-[165px] 4k:pr-[80px] 2k:pr-[35px] xl:pr-[25px] lg:pr-[20px] md:pr-[13px] sm:pr-[13px]"
>
 <img
   class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[80px] 8k:h-[80px] 4k:w-[35px] 4k:h-[35px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]"
   src="/img/Arrows/icon-arrow-right.svg"
   alt="Right Arrow"
 />
</button>

  
    <div class="flex justify-center absolute bottom-0 w-[70%] mx-[15%]">
    
  
      {#each images as image, i (image)}
      <div class=""> 
        <div class="mx-[4%] mb-[4%]"> 
          <button
              class={` xsm:border-[3px] sm:border-[4.95px] md:border-[4.63px] lg:border-[5.79px] xl:border-[7.53px] 4k:border-[16px] 8k:border-[30px] sm:w-[100%] ${i === currentIndex ? 'border-blue-500' : 'border-gray-700'} focus:border-white hover:border-white inline-block`}
              on:click={() => handleThumbnailClick(i)}
              on:keypress={(event) => handleKeyPress(event, i)}
          >
            <div class="w-full h-full bg-cover bg-center relative">
              <img src={image} alt={`Thumbnail ${i + 1}`} class="w-full h-full" />
            </div>
          </button>
        </div>
      </div>
      
      {/each}
    </div>
  </main>
  
  
  
  