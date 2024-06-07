<script>
  let isVisible = true;  // Переменная для управления видимостью
  import { fade } from 'svelte/transition';

  const gameParameters = {
    'Players count': '2 - 8',
    'Genre': 'Arcade, Platformer, Racing',
    'Minimum player age': '7',
    'Setting': 'Fantasy',
    'Game duration': '30',
    'Features': 'Party game, Pixel Art',
    'Multiplayer type': 'Couch, LAN, Internet',
    'Difficulty': 'Normal',
    'Platforms': 'Android, iOS, Nintendo Switch, PS4, Xbox One, macOS, Linux, Windows',
    'Stores': 'Digitgames, Epic Games',
    'Cross-platform': 'Mobile App+',
    'Language': 'English, Chinese, Russian, Spanish'
  };

  const characters = [
      '0.png', '3.png', '4.png',
      '5.png', '6.png', '7.png',
      '8.png', '9.png', '1.png',
      '2.png'
  ];

  const splitValues = value => value.split(',').map(item => item.trim());

  function toggleVisibility() {
      isVisible = !isVisible;  // Переключаем видимость
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
</script>

<div class="">
  <script>
    function toggleVisibility() {
      // Здесь ваш код для переключения видимости
    }
  </script>
  
  <div class="flex items-center text-white text-base mb-4 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl cursor-pointer"
     role="button" tabindex="0" on:click={toggleVisibility} on:keydown={handleKeydown}>
    <img src={`src/img/Arrows/Arrow_${isVisible ? 'up' : 'down'}.svg`} alt="Toggle" class="mr-2 transition-transform duration-200" style="transform: rotate({isVisible ? 0 : 0}deg);">
    <p>GAME PARAMETERS</p>
  </div>
  
  <div class="">
    <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />
  </div>
</div>

{#if isVisible}
  <div transition:fade={{ delay: 0, duration: 400 }} class=" text-white p-5">
      <div class="grid grid-cols-2 gap-4">
          {#each Object.entries(gameParameters) as [key, value]}
            <div>
              <div class="font-bold">{key}</div>
              {#each splitValues(value) as item}
                <div class="underline">{item}</div> 
              {/each}
            </div>
          {/each}
      </div>
  </div>

  <button class="hover:bg-button ml-5 text-white font-bold py-2 px-3 mb-5 border border-white rounded-md transition duration-300 ease-in-out">
      Find games with these parameters
  </button>

  <div class="grid grid-cols-5 gap-1 p-3">
      {#each characters as character}
        <div class="aspect-w-1 aspect-h-1">
          <img src={`src/img/Achive/${character}`} alt="img" class="object-cover">
        </div>
      {/each}
  </div>

  <button class="hover:bg-button ml-5 mt-4 text-white font-bold py-2 px-20 mb-5 border border-white rounded-md transition duration-300 ease-in-out whitespace-nowrap">
      View all achievements
  </button>
{/if}
