<script>

let isVisible = true;  // Переменная для управления видимостью
import { fade } from 'svelte/transition';

  let isTextVisible = false;
  
  function handleButtonClick() {
    isTextVisible = !isTextVisible;
  }
  function toggleVisibility() {
      isVisible = !isVisible;  // Переключаем видимость
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
  </script>


<div class="flex items-center text-white text-base mb-2 mt-5 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl cursor-pointer"
     role="button" tabindex="0" on:click={toggleVisibility} on:keydown={handleKeydown}>
    <img src={`src/img/Arrows/Arrow_${isVisible ? 'up' : 'down'}.svg`} alt="Toggle" class="mr-2 transition-transform duration-200" style="transform: rotate({isVisible ? 0 : 0}deg);">
    <p>AWARDS</p>
  </div>

  <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />



  {#if isVisible} 
  <div class="{isTextVisible ? 'grid-cols-1' : 'grid-cols-2'} awards-images text-white p-5">
    <div class="flex flex-col items-center">
      <img src="src/img/Awards/0.png" alt="PÉGASES Best Audio 2021">
    </div>
    <div class="flex flex-col items-center">
      <img src="src/img/Awards/1.png" alt="The Game Awards Best Action Game Finalist">
    </div>
    <div class="flex flex-col items-center">
      <img src="src/img/Awards/2.png" alt="Famitsu Gold Award">
    </div>
    <div class="flex flex-col items-center">
      <img src="src/img/Awards/5.png" alt="Finaliste Concours des PRIX NUMix 2021">
    </div>
    <div class="flex flex-col items-center last-item-center">
      <img src="src/img/Awards/3.png" alt="TIGA Games Industry Awards Finalist 2020">
    </div>
  </div>
  
  

  <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto mt-4 xsm:px-5 sm:px-5 4k:mb-10" />

  <div class="flex justify-end w-full">
    <button class="text-white text-base font-semibold customBlue mb-24 py-2 mt-4 font-inter" on:click={handleButtonClick}>
      {isTextVisible ? 'Hide' : 'Show more...'}
    </button>
  </div>
  
  
  
  
{/if}


<style>
  .grid-cols-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 4px;
  }
  .grid-cols-1 {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
  }

  
  .grid-cols-2 .flex {
    width: 100%; 
  }
  
  
  .grid-cols-1 .flex {
    width: 100%; 
    max-width: 600px; 
  }

  .awards-images img {
  width: 100%;
  height: auto;
  margin-top: 10%;
}

.last-item-center {
  align-self: center;  /* Выравнивает по центру внутри флекс-контейнера */
  width: 100%;  /* Занимает всю доступную ширину */
}
</style>

