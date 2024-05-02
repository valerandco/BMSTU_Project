<script>
  import Header from '../components/Header.svelte';
  import CarouselImage from '../components/imageSection.svelte';
  import TextAndLogoSection from '../components/textLogo.svelte';
  import NavigationButtons from '../components/NavigationButtons.svelte';
  import Platforms from '../components/Platforms.svelte';
  import CarouselControls from '../components_escapist/CarouselControls.svelte';
  
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
        top: '42%',
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
        top: '47%',
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
        top: '42%',
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
        top: '47%',
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
        top: '52%',
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
        top: '67%',
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
      video: "CPbY4PKendc",
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
 
</script>

<style>
  @import '../components/css/ImageCarousel.styles.css';
</style>

<Header/>

<main class="p-0 relative flex flex-col items-center">
  <CarouselImage mainImageIndex={mainImageIndex} carouselItems={carouselItems}/>
  <TextAndLogoSection mainImageIndex={mainImageIndex} carouselItems={carouselItems} />
  <CarouselControls prevImage={prevImage} nextImage={nextImage} />
  <Platforms 
    mainImageIndex={mainImageIndex}
    carouselItems={carouselItems}
    goToSlide={goToSlide}
    resetVisiblePlatforms={resetVisiblePlatforms}
    visiblePlatforms={visiblePlatforms}
    showAdditionalPlatforms={showAdditionalPlatforms}
  />
  <NavigationButtons 
    goToSlide={goToSlide} 
    prevImage={prevImage} 
    nextImage={nextImage} 
    carouselItems={carouselItems} 
    mainImageIndex={mainImageIndex} 
  />
</main>