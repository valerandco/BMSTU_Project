<script>
    export let currentIndex;
  export let images;

  function updateIndex(index) {
    currentIndex = index;
  }

  function handleThumbnailClick(i) {
    currentIndex = i;
  }

  function handleKeyPress(event, i) {
    if (event.key === 'Enter' || event.key === ' ') {
      currentIndex = i;
    }
  }

  

</script>
  
  


  
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
