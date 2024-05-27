<script>
  import Thumbnail from '../../components_escapist/Thumbnail.svelte';
  import CarouselControls from '../../components_escapist/CarouselControls.svelte';
  import Header from '../../components_escapist/Header.svelte';
  import { slide, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

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







