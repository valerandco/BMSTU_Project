<script>
  import Thumbnail from '../../components_escapist/Thumbnail.svelte';
  import Platforms from '../../components_escapist/Platforms.svelte';
  import Blizzard from '../../components_escapist/Blizzard_classic_bundle.svelte';
  import About from '../../components_escapist/Abot.svelte';
  import System from '../../components_escapist/System.svelte';
  import Write from '../../components_escapist/Write.svelte';
  import Game_info from '../../components_escapist/Game_info.svelte';
  import Game_param from '../../components_escapist/Game_param.svelte';
  import Awards from '../../components_escapist/Awards.svelte';
  import User_review from '../../components_escapist/User_reviews.svelte';
  import Magazine from '../../components_escapist/Magazine.svelte';
  import Similar_games from '../../components_escapist/Similar_games.svelte';
  import Team17 from '../../components_escapist/TEAM17.svelte';
  import CarouselControls from '../../components_escapist/CarouselControls.svelte';
  import Header from '../../components_escapist/Header.svelte';
  import { slide, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
    import SimilarGames from '../../components_escapist/Similar_games.svelte';

  let direction = 1;

  let currentIndex = 0;
  let images = [
    '/img/Escapists 2 0.png',
    '/img/Escapists 2 1.png',
    '/img/Escapists 2 2.png',
    '/img/Escapists 2 3.png',
    '/img/Escapists 2 4.png',
    '/img/Escapists 2 5.png',
    '/img/Escapists 2 6.png',
    '/img/Escapists 2 7.png',
  ];

  function handleThumbnailClick(index) {
    currentIndex = index;
  }

  function prevImage() {
    direction = -1;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    direction = 1;
    currentIndex = (currentIndex + 1) % images.length;
  }

  
  
</script>

<Header />

<main class="p-0 relative overflow-hidden  h-[80vh] xsm:h-[20vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[80vh] 2k:h-[85vh]  4k:h-[85vh]  8k:h-[82vh]">
  {#key currentIndex}
  <img  src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full"
  in:fly="{{ x: direction * 1000, duration: 500, easing: cubicOut }}"
  out:fly="{{ x: -direction * 1000, duration: 500, easing: cubicOut }}" />
  {/key}

  <CarouselControls prevImage={prevImage} nextImage={nextImage} />

  <div class="flex justify-center absolute bottom-5 w-[70%] mx-[15%]">
    {#each images as image, index (image)}
      <div class="mr-[1%]">
        <Thumbnail
          image={image}
          isActive={index === currentIndex}
          handleClick={() => handleThumbnailClick(index)}
        />
      </div>
    {/each}
  </div>
</main>

<Platforms  />



<div class="flex justify-center pt-2 mx-auto max-w-5xl lg:max-w-5xl 8k:max-w-12xl">
  
  <!-- Main content column -->
  <div class="flex-grow grid grid-cols-1 xl:grid-cols-2">
    <!-- All main components in the first sub-column -->
    <div class="flex flex-col space-y-4">
      <Blizzard />
      <About />
      <System />
    </div>

    <!-- Game_info in the second sub-column -->
    <div class="hidden xl:block mt-4 w-full xl:w-80 ">
      <Game_info />
      <Game_param />
      <Awards />
    </div>
  </div>
</div>


<div class="flex justify-center pt-2 mx-auto max-w-5xl lg:max-w-5xl 8k:max-w-12xl">
  <!-- Main content column -->
  <div class="flex-grow grid grid-cols-1 xl:grid-cols-1">
    <!-- All main components in the first sub-column -->
    <div class="flex flex-col space-y-4">
      <Similar_games />
      <Team17 />
      <Write />
    </div>

    <!-- Game_info in the second sub-column -->
    
  </div>
</div>




<div class="flex justify-center pt-2 mx-auto max-w-4xl lg:max-w-5xl 8k:max-w-12xl">
  <!-- Main content column -->
  <div class="flex-grow grid grid-cols-1 xl:grid-cols-2">
    <!-- All main components in the first sub-column -->
    <div class="flex flex-col space-y-4">
      <User_review />  
    </div>

    <!-- Game_info in the second sub-column -->
    <div class="hidden xl:block mt-4 w-full ">
      <Magazine />
    </div>
  </div>
</div>
