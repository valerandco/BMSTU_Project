<script>
    let currentIndex = 0;
    let images = [
      'src/img/Escapists 2 0.png',
      'src/img/Escapists 2 1.png',
      'src/img/Escapists 2 2.png',
      'src/img/Escapists 2 3.png',
      'src/img/Escapists 2 4.png',
      'src/img/Escapists 2 5.png',
      'src/img/Escapists 2 6.png',
      'src/img/Escapists 2 7.png',
    ];
  
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
  
  <main class="p-0">
    <div class="relative w-auto h-full">
      <div class="bg-353C55 h-12"></div> <!-- Хедер -->
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />
  
      <div class="flex justify-center absolute bottom-0 w-full">
        {#each images as image, i (image)}
          <button
            class={` xsm:w-[38px] xsm:h-[24px] sm:w-[58px] sm:h-[40px] md:w-[68px] md:h-[40px] lg:w-[90px] lg:h-[53px] xl:w-[130px] xl:h-[86px] mb-3 mx-1 xsm:border-[3px] sm:border-[3px] md:border-[3px] lg:border-[5px] xl:border-[11px]${
              i === currentIndex ? ' border-blue-500' : ' border-gray-700'
            }`}
            on:click={() => handleThumbnailClick(i)}
            on:keypress={(event) => handleKeyPress(event, i)}
          >
            <div class="w-full h-full bg-cover bg-center relative">
              <img src={image} alt={`Thumbnail ${i + 1}`} class="w-full h-full" />
            </div>
          </button>
        {/each}
      </div>
    </div>
  </main>
  
  
  