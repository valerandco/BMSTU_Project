<script>
  let currentIndex = 0;
  
  let images = [
    '/img/Escapists 2 0.png',
    '/img/Escapists 2 1.png',
    '/img/Escapists 2 2.png',
    '/img/Escapists 2 3.png',
    '/img/Escapists 2 4.png',
    '/img/Escapists 2 5.png',
    '/img/Escapists 2 6.png',
    '/img/Escapists 2 7.png',
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

  .arrow-button:hover img {
    transform: scale(1.3);
    
  }

  .arrow-button.left {
    left: 4px;
  }

  .arrow-button.right {
    right: 4px;
  }

</style>

<header title="Esc" class="text-white bg-slate-700">
  <nav class="flex items-center justify-between px-4">
    <a href="/" class="my-5 8k:my-[70px] 8k:ml-[70px] bg-blue-500 hover:bg-blue-600 font-bold rounded-full inline-block text-sm py-2 px-4 sm:text-base sm:py-3 sm:px-6 md:text-lg md:py-2 md:px-3 lg:text-[12px] lg:py-1 lg:px-2 2k:text-xl 2k:py-3 2k:px-5 4k:text-3xl 4k:py-6 4k:px-12 8k:text-6xl 8k:py-[50px] 8k:px-[110px]">
      Часть 1
    </a>
  </nav>
  <slot></slot>
</header>

<main class="p-0 relative">
  
  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" />
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



