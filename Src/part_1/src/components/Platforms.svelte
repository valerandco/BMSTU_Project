<!-- NavigationButtons.svelte -->
<script>
    export let mainImageIndex;
    export let carouselItems;
    export let goToSlide;
    export let resetVisiblePlatforms;
    export let visiblePlatforms;
    export let showAdditionalPlatforms;
  </script>
  
  <div class="absolute bottom-0 left-0 w-full h-[67px] p-2.5 opacity-95 rounded-[20px] flex items-center justify-center whitespace-nowrap 4k:pr-[200px] 4k:mb-[65px] 2k:mb-[40px] xl:mb-[30px] lg:mb-[18px] md:mb-[20px] sm:mb-[14px]">
    {#if mainImageIndex !== carouselItems.length - 1 || !carouselItems[mainImageIndex].video}
      <div class="text-white sm:mb-1 md:mb-1 lg:mb-5 2k:mb-2 sm:mr-[2%] md:mr-[1%] lg:mr-[0%] 2k:mr-[-0.2%] 4k:mr-[-1.2%] 8k:mr-[-2.1%] 8k:mb-[530px] 4k:mb-[150px] xl:mb-[20px] text-[28px] 8k:text-[160px] 4k:text-[75px] 2k:text-[32px] xl:text-[24px] lg:text-xl md:text-xl sm:text-[17px] font-normal font-['Inter'] leading-[23px] whitespace-nowrap  4k:pl-[100px] xl:mt-[10px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block ">
        Buy it for
      </div>
  
      {#if visiblePlatforms.length > 0}
        {#each visiblePlatforms as platform (platform)}
          <!-- secondary icons -->
          <div class="w-11 h-[47px] flex-col justify-center items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 8k:mb-[490px] 4k:ml-[110px] 4k:mb-[130px] sm:mb-[-3.2%] group sm:ml-[-1%] sm:mr-[-1%] md:ml-[1%] md:mr-[-1.3%] xl:ml-[1%] xl:mr-[-0.7%] 2k:ml-[1%] 2k:mr-[-0.2%] 4k:mr-[-0.2%] 8k:mr-[-0.6%] lg:mb-0 2k:mb-[-0.5%] ">
            <div class="w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] xl:mb-[10px] md:mb-[20px] sm:mb-[25px] relative group flex flex-col items-center">  
              <img class="w-full h-full object-fill" src={`src/img/Platforms/${platform}.svg`} alt={platform} />
              <div class="text-center text-white text-opacity-0 8k:text-[75px] 8k:mt-[0] 4k:text-[32px] 4k:mt-0 2k:text-[14px] xl:text-[12px] md:text-[12px] sm:text-[12px] font-light font-['Inter'] leading-[23px]  group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out">
                {platform}
              </div>
            </div>
          </div>
        {/each}
        <div
          role="button"
          tabindex="0"
          class="w-11 h-[47px] flex-col justify-start items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 4k:ml-[110px]   sm:mb-[-3.3%] sm:ml-[-1.3%] md:ml-[0.2%] lg:mb-[-0.2%] lg:ml-[0.5%] xl:mb-[-0.2] xl:ml-[0.5%] 2k:mb-[-0.2%] 4k:mb-[5.5%] 8k:mb-[9%]"
          on:click={resetVisiblePlatforms}
          on:keydown={e => e.key === 'Enter' && goToSlide()}
        >
          <div class="w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group ">
            <img class="w-full h-full" src={`src/img/Arrows/Back.svg`} alt="Arrow Back" />
            <div class="text-center text-white text-opacity-0 text-xs 8k:text-[75px] 8k:mt-[50px]  4k:text-[32px] 4k:mt-5 2k:text-[14px] xl:text-[12px] md:text-[12px] font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out">Back</div>
          </div>
        </div>
      {:else}
        {#each carouselItems[mainImageIndex].platforms as platform (platform)}
          <!-- main icons -->
          <div
            role="button"
            tabindex="0"
            class="w-11 h-[47px] text-center flex-col justify-start items-center  inline-flex sm:mb-1 lg:mb-5 group sm:ml-[-1%] sm:mr-[-1%] md:ml-[1%] md:mr-[-1.3%] xl:ml-[1%] xl:mr-[-0.7%] 2k:ml-[1%] 2k:mr-[-0.2%] 2k:mb-4 4k:mr-[-0.2%] 8k:mr-[-0.6%] 8k:ml-[290px] 8k:mb-[720px] 4k:ml-[100px] 4k:mb-[220px]  sm:mt-[18px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block "
            on:click={() => showAdditionalPlatforms(mainImageIndex, platform.main)}
            on:keydown={e => e.key === 'Enter' && goToSlide()}
          >
            <div class="w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group flex flex-col items-center">
              <img class="w-full h-full " src={`src/img/Platforms/${platform.main}.svg`} alt={platform.main} />
              <div class="text-center text-white text-opacity-0 text-xs 8k:text-[75px] 8k:mt-[50px] 4k:text-[32px] 4k:mt-5 2k:text-[14px] xl:text-[12px] md:text-[12px] font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out ">
                {platform.main}
              </div>
            </div>
          </div>
        {/each}
      {/if}
    {/if}
  </div>
  