<script>
     let isTextVisible = false;
  
  function handleButtonClick() {
    isTextVisible = !isTextVisible;
  }
  </script>

<div class="">
    <p class="text-white text-base mt-4 mb-3 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl">AWARDS</p>
    <div class="">
      <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />
    </div>
</div>
  
  <div class=" text-white p-5">
    <div class="grid grid-cols-2  gap-4">
      <div class="flex flex-col items-center">
        <img src="src/img/Awards/0.png" alt="PÉGASES Best Audio 2021">
      </div>
      <div class="flex flex-col items-center">
        <img class="w-full h-full" src="src/img/Awards/1.png" alt="The Game Awards Best Action Game Finalist">
      </div>
      <div class="flex flex-col items-center">
        <img src="src/img/Awards/2.png" alt="Famitsu Gold Award">
      </div>
      <div class="flex flex-col items-center">
        <img src="src/img/Awards/5.png" alt="Finaliste Concours des PRIX NUMIX 2021">
      </div>
      
    </div>
    <div class="flex flex-col items-center">
        <img src="src/img/Awards/3.png" alt="TIGA Games Industry Awards Finalist 2020">
    </div>

   

  </div>

  <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto mt-4 xsm:px-5 sm:px-5 4k:mb-10" />

  <button class="flex justify-end text-white text-base font-semibold customBlue mb-24 py-2 mt-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 4k:text-5xl 8k:mb-32 4k:mb-10" on:click={handleButtonClick}>
      {isTextVisible ? 'Hide' : 'Show more...'}
  </button>
  
  <style>
    /* Дополнительные стили при необходимости */
  </style>
  