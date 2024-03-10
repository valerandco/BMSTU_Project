<script>
  


  
  const apiKey = 'AIzaSyCf72M2WmMeWnrJ0ADzfZv86Ap7EI3ASNU';
  
  import { onMount } from 'svelte';

  onMount(() => {
    document.getElementById('about-link').addEventListener('click', navigateToPage);

  });


  function navigateToPage() {
    window.location.href = '/Home';
  }


  

  let timer;
  let currentTime = 0;


  let mainImageIndex = 0;
  let visiblePlatforms = [];

  let carouselItems = [
    { 
      image: "src/img/Diablo.png", 
      text: "The new part of the <br/>famous series will <br/>plunge you into <br/>the horrors of Sanctuary", 
      position: {
        top: '15%',
        left: '5%',  
        classPos: '8k:pt-[400px] 8k:pl-[0px] 4k:pt-[320px] 4k:pl-[0px] 2k:pt-[170px] 2k:pl-[0px] xl:pt-32 xl:pl-[1px] lg:pt-[100px] lg:pl-[1px] md:pt-[70px] md:pl-[0px] sm:pt-[45px] sm:pl-[5px] xsm:pt-[40px] xsm:pl-[10px]',  
      },
      logo: { image: "src/img/Logo/DIABLO_LOGO_520x300 1.png", position: { top: '10%', left: '3%' }, sizeClasses: "8k:w-[1124px] 8k:h-[650px] 4k:w-[624px] 4k:h-[370px] 2k:w-[325px] 2k:h-[188px] xl:w-[222px] xl:h-[128px] lg:w-[171.05px] lg:h-[98.95px] md:w-[136px] md:h-[79px] sm:w-[102px] sm:h-[59px]  xsm:w-[87px] xsm:h-[50px] w-[325px] h-[188px] 8k:mt-[200px] 8k:mb-[0px] 2k:mt-[40px] 2k:ml-[1px] xl:mt-[20px] xl:ml-[1px] lg:mt-[5px] lg:ml-[1px] md:mt-[5px] md:ml-[1px] sm:mt-[0px] sm:ml-[10px] xsm:mt-[0px] xsm:ml-[20px]" },
      platforms: [
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],  
    },
    { 
      image: "src/img/Warcraft.png", 
      text: "An eternal classic of war <br/>between the Horde and the<br/> people of Lordaeron", 
      position: {
        top: '15%',
        
        classPos: '8k:pt-[900px] 8k:pl-[2300px] 4k:pt-[490px] 2k:pt-[310px] 4k:pl-[1050px] 2k:pl-[550px] xl:pt-[190px] xl:pl-[360px] lg:pt-[130px] lg:pl-[300px] md:pt-[110px] md:pl-[200px] sm:pt-[70px] sm:pl-[185px] xsm:pt-[50px] xsm:pl-[120px]',  
      },
      logo: { image: "src/img/Logo/Warcraft 1 logo 1.png", position: { top: '5%' }, sizeClasses: "8k:w-[2224px] 8k:h-[890px] 4k:w-[1224px] 4k:h-[550px] 2k:w-[724px] 2k:h-[350px] xl:w-[490px] xl:h-[203px] lg:w-[290px] lg:h-[133px] sm:w-[202px] sm:h-[99px] xsm:w-[97px] xsm:h-[50px] 8k:ml-[2720px] 4k:ml-[1320px] 2k:ml-[590px] xl:ml-[380px] lg:mt-[5px] lg:ml-[380px] md:mt-[20px] md:ml-[260px] sm:mt-[0px] sm:ml-[220px] xsm:mt-[0px] xsm:ml-[150px] " },
      platforms: [
        { main: "MacOs", additional: [] },
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],    
    },
    { 
      image: "src/img/Overwatch.png", 
      text: "A fresh take on <br/>co-op shooters expands <br/>the horizons of <br/>the genre", 
      position: {
        top: '15%',
        left: '5%',
        classPos: '8k:pt-[900px] 8k:pl-[1px] 4k:pt-[400px] 2k:pt-[230px] 2k:pl-[1px] xl:pt-[140px] xl:pl-[1px] lg:pt-[90px] lg:pl-[1px] md:pt-[80px] md:pl-1 sm:pt-[50px] sm:pl-[10px] xsm:pt-[45px] xsm:pl-[10px]',  
      },
      logo: { image: "src/img/Logo/Overwatch-Logo 1.png", position: { top: '5%', left: '5%' }, sizeClasses: "8k:w-[1124px] 8k:h-[650px] 4k:w-[624px] 4k:h-[370px] 2k:w-[450px] xl:w-[222px] xl:h-[128px] lg:w-[171.05px] lg:h-[98.95px] md:w-[136px] md:h-[79px] xsm:w-[97px] xsm:h-[57px] 2k:h-[250px] w-[270px] h-[190px] 8k:mt-[430px] 4k:mt-[130px] 2k:mt-[50px] 2k:ml-[1px] xl:ml-[1px] lg:mt-[20px] lg:ml-[1px] md:mt-[20px] md:ml-[1px] sm:mt-[10px] sm:ml-[10px] xsm:mt-[0px] xsm:ml-[10px]" },
      platforms: [
        { main: "Nintendo Switch", additional: [] },
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],     
    },
    { 
      image: "src/img/HoMM3.png", 
      text: "A modern version of <br/>the turn-based strategy <br/>genre immortal leader", 
      position: {
        top: '15%',
        
        classPos: '8k:pt-[1px] 8k:pl-[4050px] 4k:pt-[400px] 4k:pl-[1900px] 2k:pt-[200px] 2k:pl-[990px] xl:pt-[150px] xl:pl-[640px] lg:pt-[105px] lg:pl-[530px] md:pt-[85px] md:pl-[380px] sm:pt-[60px] sm:pl-[330px] xsm:pt-[40px] xsm:pl-[200px]',  
      },
      logo: { image: "src/img/Logo/HoMM-3-Logo 1.png", position: { top: '3%'  }, sizeClasses: "8k:w-[1900px] 8k:h-[980px] 4k:w-[1124px] 4k:h-[550px] 2k:w-[454px] 2k:h-[280px] xl:w-[322px] xl:h-[188px] lg:w-[251.05px] lg:h-[148.95px] md:w-[186px] md:h-[129px] sm:w-[140px] sm:h-[87px] xsm:w-[97px] xsm:h-[57px] 8k:mt-[200px] 8k:ml-[4490px] 4k:mt-[0px] 4k:ml-[2090px] 2k:mt-[0px] 2k:ml-[1100px] xl:ml-[730px]  lg:mt-[10px] lg:ml-[590px] md:mt-[0px] md:ml-[440px] sm:mt-[10px] sm:ml-[380px] xsm:mt-[0px] xsm:ml-[230px]" },  
      platforms: [
        { main: "Android", additional: ["Google Play", "Netflix", "Amazon"] },
        { main: "iOS", additional: ["App Store", "Apple Arcade"] },
        { main: "macOS", additional: [] },
        { main: "Linux", additional: [] },
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],     
    },
    { 
      image: "src/img/Warhammer40k.png", 
      text: "Defy Chaos in a <br/>classic real-time <br/>strategy game", 
      position: {
        top: '15%',
        left: '5%',
        classPos: '8k:pt-[800px] 8k:pl-[] 4k:pt-[470px] 4k:pl-[] 2k:pt-[250px] 2k:pl-[] xl:pt-[170px] xl:pl-[0px] lg:pt-[130px] lg:pl-[0px] md:pt-[95px] md:pl-1 sm:pt-[80px] sm:pl-[0px] xsm:pt-[55px] xsm:pl-[0px]',  
      },
      logo: { image: "src/img/Logo/Warhammer-40k-logo 1.png", position: { top: '0%', left: '3%' }, sizeClasses: "8k:w-[1900px] 8k:h-[1220px] 4k:w-[1124px] 4k:h-[650px] 2k:w-[424px] 2k:h-[280px] xl:h-[188px] lg:w-[251.05px] lg:h-[148.95px] md:w-[186px] md:h-[129px] sm:w-[140px] sm:h-[87px] xsm:w-[97px] xsm:h-[57px] xl:ml-[1px] xl:mt-[40px]  lg:mt-[30px] lg:ml-[1px] md:mt-[10px] md:ml-[0px] sm:mt-[30px] sm:ml-[0px] xsm:mt-[20px] xsm:ml-[0px]" },
      platforms: [
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],  
    },
    { 
      image: "src/img/Cyberpunk.png", 
      text: "A milestone in the <br/> contemporary art", 
      position: {
        top: '15%',
        
        classPos: '8k:pt-[2980px] 8k:ml-[1680px] 4k:pt-[880px] 4k:pl-[1380px] 2k:pt-[450px] 2k:pl-[750px] xl:pt-[290px] xl:pl-[500px] lg:pt-[190px] lg:pl-[400px] md:pt-[140px] md:pl-[280px] sm:pt-[100px] sm:pl-[230px] xsm:pt-[80px] xsm:pl-[150px]',  
      },
      logo: { image: "src/img/Logo/Cyberpunk-2077-logo 2.png", position: { top: '5%' }, sizeClasses: "8k:w-[2420px] 8k:h-[1280px] 4k:w-[1124px] 4k:h-[550px] 2k:w-[624px] 2k:h-[350px] xl:w-[322px] xl:h-[188px] lg:w-[220.05px] lg:h-[118.95px] md:w-[166px] md:h-[89px] sm:w-[127px] sm:h-[87px] xsm:w-[97px] xsm:h-[57px] 8k:ml-[5000px] 4k:mt-[200px] 4k:ml-[2600px] 2k:ml-[1200px] xl:ml-[850px] xl:mt-[40px]  lg:mt-[60px] lg:ml-[730px] md:mt-[50px] md:ml-[550px] sm:mt-[50px] sm:ml-[450px] xsm:mt-[30px] xsm:ml-[280px]" },
      platforms: [
        { main: "PS", additional: [] },
        { main: "Xbox", additional: [] },
        { main: "Win", additional: ["Battle.net", "Epic Games Store", "gog.com","Steam","Humble Bundle"] },
      ],   
    },
    { 
      video: "wB8BTbExm8g",
      image: "", 
      text: "", 
      position: {
        top: '15%',
        
        classPos: '8k:mt-1980px] 4k:pt-[780px] 2k:pt-[480px] xl:pt-[250px] xl:pl-[10px] lg:pt-[170px] lg:pl-[10px] md:pt-[90px] md:pl-[1px] sm:pt-[70px] sm:pl-[1px] xsm:pt-[30px] xsm:pl-[1px]',  
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
    const regex = /8k:pt-\[\d+px\]/;
    const match = positionClass.match(regex);
    if (match) {
      const height = parseInt(match[0].match(/\d+/)[0]);
      // Assuming width is half of the height
      const width = height / 2;
      return `${(height / width) * 100}%`;
    }
    return "56.25%"; // Default aspect ratio for 16:9
  }

  
  

  
</script>



<style>
  .main-image {
    width: 100%;
    height: auto;
    max-width: 100vw; 
    max-height: 100vh; 
  }

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

  .video-container {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    max-width: 100%;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
  }
  

</style>

<header title="Esc" class="w-full h-10 2k:h-20 4k:h-32 8k:h-64 m-5 text-white">
  <nav class="flex items-center justify-between px-4">
    <!-- Кнопка, при клике на которую открывается второй блок кода -->
    <a href="/esc" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block">Часть 2</a>
  </nav>
</header>


<main class="p-0 relative flex flex-col items-center">
 <!-- Video or Image Section -->
 <div class="relative w-full h-full">
  {#if mainImageIndex === carouselItems.length - 1 && carouselItems[mainImageIndex].video}
    <!-- Embed full-size YouTube video for the last slide -->
    <div
      class="video-container w-full"
      style={`padding-bottom: ${calculateVideoAspectRatio(carouselItems[mainImageIndex].position.classPos)};`}
    >
      <iframe
        title="video"
        class="w-full h-full"
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

    
  
    <div class="absolute bottom-0 left-0 w-full h-[67px] p-2.5 opacity-95 rounded-[20px] flex items-center justify-center whitespace-nowrap mb-7">
      {#if mainImageIndex !== carouselItems.length - 1 || !carouselItems[mainImageIndex].video}
        <div class="text-white text-[28px] 8k:text-[200px] 4k:text-[75px] 2k:text-[32px] xl:text-[24px] lg:text-xl md:text-xl sm:text-[17px] font-normal font-['Inter'] leading-[23px] whitespace-nowrap 8k:mb-[420px] 4k:mb-[120px] 4k:pl-[100px] xl:mt-[10px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block ">
          Buy it for
        </div>
    
        {#if visiblePlatforms.length > 0}
          {#each visiblePlatforms as platform (platform)}
            <div class="w-11 h-[47px] flex-col justify-center items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 8k:mb-[490px] 4k:ml-[110px] 4k:mb-[150px] ">
              <div class="w-[47px] h-[47px] 8k:w-[300px] 8k:h-[300px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group 4k:w-[130px] 4k:h-[130px]">
                <img class="w-full h-full object-fill" src={`src/img/Platforms/${platform}.svg`} alt={platform} />
                <div class="text-center text-white text-opacity-0 sm:text-xs md:text-lg xl:text-xl 2k:text-xl 4k:text-4xl 8k:text-7xl font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out">{platform}</div>
              </div>
            </div>
          {/each}
          <div
            role="button"
            tabindex="0"
            class="w-11 h-[47px] flex-col justify-start items-center gap-2.5 inline-flex group ml-3 8k:ml-[290px] 8k:mb-[720px] 4k:ml-[110px] 4k:mb-[220px] 2k:mb-[15px] md:mt-[20px] sm:mt-[25px] "
            on:click={resetVisiblePlatforms}
            on:keydown={e => e.key === 'Enter' && goToSlide()}
          >
            <div class="w-[47px] h-[47px] 8k:w-[300px] 8k:h-[300px] 4k:w-[130px] 4k:h-[130px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group ">
              <img class="w-full h-full " src={`src/img/Arrows/Back.svg`} alt="Arrow Back" />
              <div class="text-center text-white text-opacity-0 text-xs 8k:text-[75px]  4k:text-[32px] 2k:text-[14px] xl:text-[12px] md:text-[9px] font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out ">Back</div>
            </div>
          </div>
        {:else}
          {#each carouselItems[mainImageIndex].platforms as platform (platform)}
            <div
              role="button"
              tabindex="0"
              class="w-11 h-[47px] text-center flex-col justify-start items-center gap-2.5 inline-flex group ml-[20px] 8k:ml-[290px] 8k:mb-[720px] 4k:ml-[110px] 4k:mb-[220px]  sm:mt-[18px] xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block "
              on:click={() => showAdditionalPlatforms(mainImageIndex, platform.main)}
              on:keydown={e => e.key === 'Enter' && goToSlide()}
            >
              <div class="w-[47px] h-[47px] 8k:w-[300px] 8k:h-[300px] 4k:w-[130px] 4k:h-[130px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] relative group ">
                <img class="w-full h-full " src={`src/img/Platforms/${platform.main}.svg`} alt={platform.main} />
                <div class="text-center text-white text-opacity-0 text-xs 8k:text-[75px] 4k:text-[32px] 2k:text-[14px] xl:text-[12px] md:text-[9px] font-light font-['Inter'] leading-[23px] group-hover:text-opacity-100 transition-opacity duration-300 ease-in-out ">{platform.main}</div>
              </div>
            </div>
          {/each}
        {/if}
      {/if}
    </div>
    
    <!-- Navigation elements placed below text -->
    <div class="absolute bottom-0 left-0 w-full h-10 flex justify-center items-center ">
      {#each carouselItems as { image }, index (image)}
        <div
          role="button"
          tabindex="0"
          class="{ 'w-[50px] h-[9px] 8k:w-[350px] 8k:h-[50px] 8k:mx-[20px] 4k:w-[140px] 4k:h-[25px] 4k:mx-[10px] 2k:w-[60px] 2k:h-[10px] xl:w-[50px] xl:h-[9px] sm:w-[40px] sm:h-[7px] xsm:w-[30px] xsm:h-[8px] 8k:mb-20 mx-1 transition duration-300 ease-in-out cursor-pointer ' + (index === mainImageIndex ? 'bg-white rounded-sm' : 'bg-zinc-400 rounded-sm') }"
          on:click={() => goToSlide(index)}
          on:keydown={e => e.key === 'Enter' && goToSlide(index)}
        ></div>
      {/each}

      <button on:click={prevImage} class="arrow-button left h-full 8k:pb-[3600px] 4k:pb-[1900px] 2k:pb-[900px] pl-4 xl:pb-[600px] lg:pb-[450px] md:pb-[300px] sm:pb-[250px] 2k:pl-[27px] sm:pl-[2px]">
        <img class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[100px] 8k:h-[100px] 4k:w-[50px] 4k:h-[50px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]" src="src/img/Arrows/bx-top-arrow.svg" alt="Left Arrow" />
      </button>
      <button on:click={nextImage} class="arrow-button right h-full pr-4 8k:pb-[3800px] 4k:pb-[1900px] 2k:pb-[900px] xl:pb-[600px] lg:pb-[450px] md:pb-[300px] sm:pb-[250px] 2k:pr-[27px] sm:pr-[2px]">
        <img class="xsm:hidden sm:block md:block lg:block xl:block 2k:block 4k:block 8k:block 8k:w-[100px] 8k:h-[100px] 4k:w-[50px] 4k:h-[50px] 2k:w-[18px] 2k:h-[18px] xl:w-[12px] xl:h-[12px] lg:w-[10px] lg:h-[10px] md:w-[8px] md:h-[8px] sm:w-[5px] sm:h-[5px]" src="src/img/Arrows/icon-arrow-right.svg" alt="Right Arrow" />
      </button>
    </div>
  </div>
</main>