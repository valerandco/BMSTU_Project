<script>
  import { fade } from 'svelte/transition';

  let activeIndex = 0; // Active system index
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
      os: "OSX 10.10.5 Yosemite or higher",
      processor: "Intel Core i5-2520M (2 * 2500)",
      memory: "4 GB RAM",
      graphics: "GeForce GT 750M (1024 MB)",
      storage: "3 GB available space",
      icons: ["macOS.svg"]
    },
    {
      os: "Ubuntu 17.10 (x64) or Mint 18.3 (Cinnamon) (x64) or Ubuntu 16.04 (x64)",
      processor: "ntel Core2 Duo E4300 (2 * 1800) / AMD Athlon Dual Core 4450e (2 * 2300) or equivalent",
      memory: "4 GB RAM",
      graphics: "GeForce 8800 GTX (768 MB) / Intel HD 4600 / Radeon HD 3850 (512 MB)",
      storage: "3 GB available space",
      icons: ["linux.svg"]
    }
  ];

  function setActive(index) {
    activeIndex = index;
  }

  let isVisible = true;  
    

    function toggleVisibility() {
      isVisible = !isVisible;  // Переключаем видимость
    }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
</script>

<div class="flex items-center text-white text-base mb-0 mt-5 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl cursor-pointer"
     role="button" tabindex="0" on:click={toggleVisibility} on:keydown={handleKeydown}>
    <img src={`src/img/Arrows/Arrow_${isVisible ? 'up' : 'down'}.svg`} alt="Toggle" class="mr-2 transition-transform duration-200" style="transform: rotate({isVisible ? 0 : 0}deg);">
    <p>SYSTEM REQUIREMENTS</p>
  </div>

  <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />

{#if isVisible}
<div class=" text-white p-5 pt-1 ">
  <div class="flex mr-4 items-center bg-gradient-to-r-white-transparent pt-2">
    {#each systems as system, index}
      <button on:click={() => setActive(index)} class="flex flex-col items-center">
        <img src={`src/img/Platforms/${system.icons[0]}`} class="h-8 mb-2 mx-2" alt="OS Icon">
        <div class={activeIndex === index ? 'h-1 w-8 bg-white' : 'h-1 w-full bg-transparent'}></div>
      </button>
    {/each}
  </div>

  <div class="grid grid-cols-2 gap-4 mt-4" transition:fade>
    <div>
      <p><strong>OS:</strong> {systems[activeIndex].os}</p>
      <p><strong class="mt-4">Processor:</strong> {systems[activeIndex].processor}</p>
      <p><strong class="mt-4">Memory:</strong> {systems[activeIndex].memory}</p>
      <p><strong class="mt-4">Graphics:</strong> {systems[activeIndex].graphics}</p>
      <p><strong class="mt-4">Storage:</strong> {systems[activeIndex].storage}</p>
    </div>
    <div>
      <p><strong>OS:</strong> {systems[activeIndex].os}</p>
      <p><strong class="mt-4">Processor:</strong> {systems[activeIndex].processor}</p>
      <p><strong class="mt-4">Memory:</strong> {systems[activeIndex].memory}</p>
      <p><strong class="mt-4">Graphics:</strong> {systems[activeIndex].graphics}</p>
      <p><strong class="mt-4">Storage:</strong> {systems[activeIndex].storage}</p>
    </div>
  </div>
  
</div>

{/if}

<style>
  strong {
    display: block;
    font-style: italic;
  }
</style>