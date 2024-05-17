<script>
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  export let mainImageIndex;
  export let carouselItems;
  export let direction;
  
  function shouldCenterText(index) {
    return index === 1 || index === 3;
  }
</script>

<style>
  @import '../components/css/ImageCarousel.styles.css';
</style>
  
<div class="absolute top-0 left-0 w-full h-full">
  {#each carouselItems as { text, position, logo, platforms }, index (text)}
    {#if index === mainImageIndex}
      <div 
        style={`top: ${position.top}; left: ${position.left}; bottom: ${position.bottom};`} 
        class="text-white 8k:text-[250px] 4k:text-[140px] 2k:text-[64px] xl:text-5xl xl:text-[43px] lg:text-[33.68px] md:text-[26px] sm:text-xl xsm:text-[9px] font-extrabold 8k:leading-[270px] 4k:leading-[147px] 2k:leading-[77px] lg:leading-[39px] leading-tight absolute ${position.classPos} sm:mt-[-3%] md:mt-[-3%] lg:mt-[-3%] xl:mt-[-3%] 2k:mt-[-3%] 4k:mt-[-3%] 8k:mt-[-3%]"
        transition:fly|local={{ x: direction * 200, duration: 800, easing: cubicOut }}
      >
        {#if shouldCenterText(index)}
          <div class="text-center">
            {@html text.split('<br/>').join('<br />')}
          </div>
        {:else}
          {@html text.split('<br/>').join('<br />')}
        {/if}
      </div>
    {/if}
  {/each}

  {#each carouselItems as { logo }, index (logo)}
    {#if index === mainImageIndex && logo}
      <div 
        style={`top: ${logo.position.top}; left: ${logo.position.left};`} 
        class="absolute"
        transition:fly|local={{ x: direction * 200, duration: 800, easing: cubicOut }}
      >
        <img 
          src={logo.image} 
          alt="Logo" 
          class={logo.sizeClasses}
        />
      </div>
    {/if}
  {/each}
</div>
