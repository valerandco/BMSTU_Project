<script>
  let hoveredIndex = null;

  function handleMouseEnter(index) {
    hoveredIndex = index;
  }

  function handleMouseLeave() {
    hoveredIndex = null;
  }
  


  
  const apiKey = 'AIzaSyCf72M2WmMeWnrJ0ADzfZv86Ap7EI3ASNU';
  

  let timer;
  let currentTime = 0;


  let mainImageIndex = 0;
  let visiblePlatforms = [];

  let carouselItems = [
    { 
      image: "src/img/Diablo.png", 
      text: "The new part of the <br/>famous series will <br/>plunge you into <br/>the horrors of Sanctuary", 
      position: {
        top: '35%',
        left: '5%',  
        classPos: '',  
      },
      logo: { image: "src/img/Logo/DIABLO_LOGO_520x300 1.png", position: { top: '14%', left: '4%' }, sizeClasses: "8k:w-[1124px] 8k:h-[650px] 4k:w-[624px] 4k:h-[370px] 2k:w-[325px] 2k:h-[188px] xl:w-[222px] xl:h-[128px] lg:w-[171.05px] lg:h-[98.95px] md:w-[136px] md:h-[79px] sm:w-[102px] sm:h-[59px]  xsm:w-[87px] xsm:h-[50px]" },
      platforms: [
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],  
    },
    { 
      image: "src/img/Warcraft.png", 
      text: "An eternal classic of war <br/>between the Horde and the<br/> people of Lordaeron", 
      position: {
        top: '40%',
        left: '30%',
        
        classPos: '',  
      },
      logo: { image: "src/img/Logo/Warcraft 1 logo 1.png", position: { top: '7%', left: '35%' }, sizeClasses: "8k:w-[2224px] 8k:h-[890px] 4k:w-[1224px] 4k:h-[510px] 2k:w-[554px] 2k:h-[250px] xl:w-[390px] xl:h-[173px] lg:w-[290px] lg:h-[133px] sm:w-[202px] sm:h-[99px] xsm:w-[97px] xsm:h-[40px] " },
      platforms: [
        { main: "MacOs", additional: [] },
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],    
    },
    { 
      image: "src/img/Overwatch.png", 
      text: "A fresh take on <br/>co-op shooters expands <br/>the horizons of <br/>the genre", 
      position: {
        top: '35%',
        left: '5%',
        classPos: '',  
      },
      logo: { image: "src/img/Logo/Overwatch-Logo 1.png", position: { top: '11%', left: '5.3%' }, sizeClasses: "8k:w-[1124px] 8k:h-[650px] 4k:w-[624px] 4k:h-[370px] 2k:w-[350px] 2k:h-[170px] xl:w-[222px] xl:h-[128px] lg:w-[171.05px] lg:h-[98.95px] md:w-[136px] md:h-[79px] sm:w-[97px] sm:h-[57px] xsm:w-[67px] xsm:h-[37px]" },
      platforms: [
        { main: "Nintendo Switch", additional: [] },
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],     
    },
    { 
      image: "src/img/HoMM3.png", 
      text: "A modern version of <br/>the turn-based strategy <br/>genre immortal leader", 
      position: {
        top: '40%',
        left: '52%',
        
        classPos: '',  
      },
      logo: { image: "src/img/Logo/HoMM-3-Logo 1.png", position: { top: '8%', left: '60%'  }, sizeClasses: "8k:w-[1700px] 8k:h-[980px] 4k:w-[932px] 4k:h-[550px] 2k:w-[454px] 2k:h-[280px] xl:w-[322px] xl:h-[188px] lg:w-[251.05px] lg:h-[148.95px] md:w-[156px] md:h-[97px] sm:w-[140px] sm:h-[87px] xsm:w-[67px] xsm:h-[37px]" },  
      platforms: [
        { main: "Android", additional: ["Google Play", "Netflix", "Amazon"] },
        { main: "iOS", additional: ["App Store", "Apple Arcade"] },
        { main: "macOS", additional: [] },
        { main: "Linux", additional: [] },
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],     
    },
    { 
      image: "src/img/Warhammer40k.png", 
      text: "Defy Chaos in a <br/>classic real-time <br/>strategy game", 
      position: {
        top: '45%',
        left: '5%',
        classPos: '',  
      },
      logo: { image: "src/img/Logo/Warhammer-40k-logo 1.png", position: { top: '5%', left: '4%' }, sizeClasses: "8k:w-[1900px] 8k:h-[1220px] 4k:w-[1024px] 4k:h-[630px] 2k:w-[474px] 2k:h-[310px] xl:w-[318px] xl:h-[218px] lg:w-[251.05px] lg:h-[178px] md:w-[186px] md:h-[129px] sm:w-[160px] sm:h-[117px] xsm:w-[87px] xsm:h-[57px] " },
      platforms: [
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],  
    },
    { 
      image: "src/img/Cyberpunk.png", 
      text: "A milestone in the <br/> contemporary art", 
      position: {
        top: '60%',
        left: '38%',
        
        classPos: '',  
      },
      logo: { image: "src/img/Logo/Cyberpunk-2077-logo 2.png", position: { top: '28%', left: '65%' }, sizeClasses: "8k:w-[2020px] 8k:h-[1080px] 4k:w-[1124px] 4k:h-[550px] 2k:w-[524px] 2k:h-[250px] xl:w-[322px] xl:h-[188px] lg:w-[266px] lg:h-[138px] md:w-[216px] md:h-[89px] sm:w-[177px] sm:h-[87px] xsm:w-[97px] xsm:h-[57px]" },
      platforms: [
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Windows", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],   
    },
    { 
      video: "VSqRyFHMI_A",
      image: "", 
      text: "", 
      position: {
        top: '15%',
        
        classPos: '8k:mt-[1980px] 4k:pt-[780px] 2k:pt-[480px] xl:pt-[250px] xl:pl-[10px] lg:pt-[170px] lg:pl-[10px] md:pt-[90px] md:pl-[1px] sm:pt-[70px] sm:pl-[1px] xsm:pt-[30px] xsm:pl-[1px]',  
      },
      platforms: [],   
    },
    
  ];



  function changeMainImage(index) {
    mainImageIndex = index;
    resetVisiblePlatforms();
  }

  function nextImage() {
    mainImageIndex = (mainImageIndex + 1) % carouselItems.length;
    resetVisiblePlatforms();
  }
 
  function prevImage() {
    mainImageIndex = (mainImageIndex - 1 + carouselItems.length) % carouselItems.length;
    resetVisiblePlatforms();
  }

  function resetVisiblePlatforms() {
    visiblePlatforms = [];
  }

  function shouldCenterText(index) {
    return index === 1 || index === 3;
  }

  function handleVideoTimeUpdate(event) {
    currentTime = event.detail.currentTime;
  }

  function startTimer() {
    // Устанавливаем таймер на 1 минуту и 55 секунд
    timer = setTimeout(nextSlide, 115 * 1000);
  }

  function nextSlide() {
    nextImage();
    
    // Очищаем таймер при переключении слайда
    clearTimeout(timer);

    // Если следующий слайд - видео, начинаем таймер
    if (mainImageIndex === carouselItems.length - 1 && carouselItems[mainImageIndex].video) {
      startTimer();
    }
  }

  function goToSlide(index) {
    mainImageIndex = index;
    resetVisiblePlatforms();

    // Если выбранный слайд - видео, начинаем таймер
    if (carouselItems[index].video) {
      startTimer();
    }
  }

  




  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      goToSlide(event.detail);
    }
  }

  function showAdditionalPlatforms(index, platform) {
    visiblePlatforms = carouselItems[index].platforms.find(p => p.main === platform)?.additional || [];
  }

  function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&controls=0&showinfo=0&autohide=1&mute=1&modestbranding=1&loop=1&rel=0&key=${apiKey}`;
  }

  function calculateVideoAspectRatio(positionClass) {
    const regex = /8k:pt-\[(\d+)px\]/;
    const match = positionClass.match(regex);
    if (match) {
      const height = parseInt(match[1]);
      const videoWidth = (height * 16) / 9; // Рассчитываем ширину видео для соотношения 16:9
      const videoElement = document.createElement('video');
      videoElement.setAttribute('style', `height: ${height}px; width: ${videoWidth}px; visibility: hidden; position: absolute;`);
      document.body.appendChild(videoElement);
      const aspectRatio = videoElement.clientWidth / videoElement.clientHeight;
      document.body.removeChild(videoElement);
      return `${(100 * 9 / 16).toFixed(2)}%`; // Возвращаем высоту видео в процентах, чтобы сохранить 16:9 соотношение сторон
    }
    return "56.25%"; // Default aspect ratio for 16:9
  }


  function calculateVideoHeight(positionClass) {
    const regex = /8k:pt-\[(\d+)px\]/;
    const match = positionClass.match(regex);
    if (match) {
        return parseInt(match[1]);
    }
    return 100; // Высота видео по умолчанию
  }

  





  
  

  
</script>

<style>
@import '../components/css/ImageCarousel.styles.css';
</style>
  
<main class="p-0 relative flex flex-col items-center">
  <!-- Video or Image Section -->
  <div class="w-full h-full">
   {#if mainImageIndex === carouselItems.length - 1 && carouselItems[mainImageIndex].video}
   <div class="video-container w-full" style="position: relative;">
     <iframe

       title="video"
       class="w-full h-full"
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" sandbox="allow-storage-access-by-user-activation
       allow-scripts
       allow-same-origin"
       src={getYouTubeEmbedUrl(carouselItems[mainImageIndex].video)}
       allow="autoplay; encrypted-media"
       allowfullscreen
       on:timeupdate={handleVideoTimeUpdate}
       on:playing={startTimer}
     ></iframe>
   </div>
   
   
   {:else}
     <!-- Display image for other slides -->
     <img class="main-image w-full object-fill" alt="" src={carouselItems[mainImageIndex].image} />
   {/if}
 
   <!-- Text and Logo Section -->
   <div class="absolute top-0 left-0 w-full h-full">
     {#each carouselItems as { text, position, logo, platforms }, index (text)}
       {#if index === mainImageIndex}
         <div style={`top: ${position.top}; left: ${position.left};`} class="8k:mt-[500px] text-white 8k:text-[250px] 4k:text-[140px] 2k:text-[64px] xl:text-5xl xl:text-[43px] lg:text-[33.68px] md:text-[26px] sm:text-xl xsm:text-[12px] font-extrabold 8k:leading-[270px] 4k:leading-[147px] 2k:leading-[77px] lg:leading-[39px] leading-tight mb-8 absolute ${position.classPos}">
           {#if shouldCenterText(index)}
             <div class="text-center">
               {@html text.split('<br/>').join('<br />')}
             </div>
           {:else}
             {@html text.split('<br/>').join('<br />')}
           {/if}
         </div>
         {#if logo}
           <div style={`top: ${logo.position.top}; left: ${logo.position.left};`} class="absolute">
             <img src={logo.image} alt="Logo" class={logo.sizeClasses} />
           </div>
         {/if}
       {/if}
     {/each}
 
     
   
     <div class="absolute bottom-0 left-0 w-full h-[67px] p-2.5 opacity-95 rounded-[20px] flex items-center justify-center whitespace-nowrap 4k:pr-[200px] 4k:mb-[65px] 2k:mb-[40px] xl:mb-[30px] lg:mb-[18px] md:mb-[20px] sm:mb-[14px]">
       {#if mainImageIndex !== carouselItems.length - 1 || !carouselItems[mainImageIndex].video}
         <div class="text-white 8k:mb-[530px] 4k:mb-[150px] xl:mb-[20px] md:mb-[20px] sm:mb-[25px] text-[28px] 8k:text-[160px] 4k:text-[75px] 2k:text-[32px] xl:text-[24px] lg:text-xl md:text-xl sm:text-[17px] font-normal font-['Inter'] leading-[23px] whitespace-nowrap  4k:pl-[100px] xl:mt-[10px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block ">
           Buy it for
         </div>
     
         {#if visiblePlatforms.length > 0}
           {#each visiblePlatforms as platform (platform)}
           <!-- secondary icons -->
             <div class="w-11 h-[47px] flex-col justify-center items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 8k:mb-[490px] 4k:ml-[110px] 4k:mb-[130px]">
               <div class="w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] xl:mb-[10px] md:mb-[20px] sm:mb-[25px] relative group flex flex-col items-center">  <img class="w-full h-full object-fill" src={`src/img/Platforms/${platform}.svg`} alt={platform} />
                 <div class="text-center text-white text-opacity-0 8k:text-[75px] 8k:mt-[0] 4k:text-[32px] 4k:mt-0 2k:text-[14px] xl:text-[12px] md:text-[12px] sm:text-[12px] font-light font-['Inter'] leading-[23px]  group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out">
                   {platform}
                 </div>
               </div>
             </div>
           {/each}
           <div
             role="button"
             tabindex="0"
             class="w-11 h-[47px] flex-col justify-start items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 8k:mb-[720px] 4k:ml-[110px] 4k:mb-[220px]  md:mt-[20px] sm:mt-[25px] 2k:mb-[23px] xl:mb-[20px] sm:mb-[20px]"
             on:click={resetVisiblePlatforms}
             on:keydown={e => e.key === 'Enter' && goToSlide()}
           >
             <div class="w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group ">
               <img class="w-full h-full" src={`src/img/Arrows/Back.svg`} alt="Arrow Back" />
               <div class="text-center text-white text-opacity-0 text-xs 8k:text-[75px] 8k:mt-[50px]  4k:text-[32px] 4k:mt-5 2k:text-[14px] xl:text-[12px] md:text-[12px] font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out ">Back</div>
             </div>
           </div>
         {:else}
           {#each carouselItems[mainImageIndex].platforms as platform (platform)}
           <!-- main icons -->
             <div
             role="button"
             tabindex="0"
             class="w-11 h-[47px] text-center flex-col justify-start items-center gap-2.5 inline-flex mb-5 group ml-[20px] 8k:ml-[290px] 8k:mb-[720px] 4k:ml-[100px] 4k:mb-[220px]  sm:mt-[18px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block "
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
     
     <!-- Navigation elements placed below text -->
     <div class="absolute bottom-0 left-0 w-full h-10 flex justify-center items-center 4k:mb-[20px]">
       {#each carouselItems as { image }, index (image)}
         <div
           role="button"
           tabindex="0"
           class="{ 'w-[50px] h-[9px] 8k:w-[350px] 8k:h-[50px] 8k:mx-[20px] 4k:w-[140px] 4k:h-[25px] 4k:mx-[10px] 2k:w-[60px] 2k:h-[10px] xl:w-[50px] xl:h-[9px] sm:w-[40px] sm:h-[7px] xsm:w-[30px] xsm:h-[8px] 8k:mb-20 mx-1 transition duration-300 ease-in-out cursor-pointer rounded-sm ' + (index === mainImageIndex ? 'bg-white' : (hoveredIndex === index ? 'bg-white' : 'bg-zinc-400')) }"
           on:click={() => goToSlide(index)}
           on:keydown={e => e.key === 'Enter' && goToSlide(index)}
           on:mouseenter={() => handleMouseEnter(index)}
           on:mouseleave={() => handleMouseLeave(index)}
         ></div>
       {/each}
     
     
 
       <button on:click={prevImage} class="arrow-button left py-[22%] px-[3%] mt-[0%]">
         <img class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[75px] 8k:h-[75px] 4k:w-[35px] 4k:h-[35px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]" src="src/img/Arrows/bx-top-arrow.svg" alt="Left Arrow" />
       </button>
     
       <button on:click={nextImage} class="arrow-button right py-[22%] px-[3%] mt-[0%]">
           <img class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[75px] 8k:h-[75px] 4k:w-[35px] 4k:h-[35px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]" src="src/img/Arrows/icon-arrow-right.svg" alt="Right Arrow" />
       </button>
     
     </div>
   </div>
 </main>