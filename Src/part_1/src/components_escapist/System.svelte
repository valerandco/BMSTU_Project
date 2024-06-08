<script>
  let isVisible = true;  // Переменная для управления видимостью
  import { fade } from 'svelte/transition';

    const systems = [
      {
        os: "Windows 7 / 8 / 8.1 / 10 x64",
        processor: "Intel Core2 Duo E4300 (2 * 1800) / AMD Athlon Dual Core 4450e (2 * 2300) or equivalent",
        memory: "4 GB RAM",
        graphics: "GeForce 8800 GTX (768 MB) / Intel HD 4600 / Radeon HD 3850 (512 MB)",
        storage: "3 GB available space",
        icons: ["Windows.svg"]
      },
      {
        os: "Windows 7 / 8 / 8.1 / 10 x64",
        processor: "Intel Core i5-4570T (2* 2900) / AMD FX-6100 (6 * 3300) or equivalent",
        memory: "4 GB RAM",
        graphics: "GeForce GTX 750 Ti (2048 MB) / Radeon HD 7850 (2048 MB)",
        storage: "3 GB available space",
        icons: ["Windows.svg"]
      }
    ];

    function toggleVisibility() {
      isVisible = !isVisible;  // Переключаем видимость
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
  </script>
  
  <div class=" text-white  ">
    <div class="flex items-center text-white text-base mb-4 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl cursor-pointer"
     role="button" tabindex="0" on:click={toggleVisibility} on:keydown={handleKeydown}>
    <img src={`src/img/Arrows/Arrow_${isVisible ? 'up' : 'down'}.svg`} alt="Toggle" class="mr-2 transition-transform duration-200" style="transform: rotate({isVisible ? 0 : 0}deg);">
    <p>SYSTEM REQUIREMENTS</p>
  </div>

  <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />

    {#if isVisible}
    <div class="grid grid-cols-2 gap-4 ">
      {#each systems as system}
        <div class=" p-4 rounded-lg">
          <div class="flex items-center mb-2">
            {#each system.icons as icon}
              <img src={`src/img/Platforms/${icon}`} class="h-6 mr-2" alt="OS Icon">
            {/each}
            
          </div>
          <div>
            <strong>OS:</strong><br>
            {system.os}
          </div>
          <div class="mt-5">
            <strong>Processor:</strong><br>
            {system.processor}
          </div>
          <div class="mt-5">
            <strong>Memory:</strong><br>
            {system.memory}
          </div>
          <div class="mt-5">
            <strong>Graphics:</strong><br>
            {system.graphics}
          </div>
          <div class="mt-5">
            <strong>Storage:</strong><br>
            {system.storage}
          </div>
        </div>
      {/each}
    </div>
    {/if}
  </div>
  
 
  