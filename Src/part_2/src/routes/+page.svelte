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

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
</script>

<style>
  .arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2xl;
    cursor: pointer;
  }

  .arrow-button.left {
    left: 4px;
  }

  .arrow-button.right {
    right: 4px;
  }

</style>

<main class="p-0 relative">
  <div class="bg-slate-700 h-12 xsm:h-[56px] sm:h-[56px]"></div> <!-- Хедер -->
  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />
  <!-- Стрелка влево -->
  <button
  on:click={prevImage}
  class="arrow-button left pl-4 xl:pb-[100px] lg:pb-[120px] sm:pb-[250px] 2k:pl-[27px] sm:pl-[2px]"
>
  <img
    class="8k:w-[100px] 8k:h-[100px] 4k:w-[50px] 4k:h-[50px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]"
    src="src/img/Arrows/bx-top-arrow.svg"
    alt="Left Arrow"
  />
</button>
 <!-- Стрелка вправо -->
 <button
 on:click={nextImage}
 class="arrow-button right pr-4 xl:pb-[100px] lg:pb-[120px] sm:pb-[250px] 2k:pr-[27px] sm:pr-[2px]"
>
 <img
   class="8k:w-[100px] 8k:h-[100px] 4k:w-[50px] 4k:h-[50px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]"
   src="src/img/Arrows/icon-arrow-right.svg"
   alt="Right Arrow"
 />
</button>

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
</main>



