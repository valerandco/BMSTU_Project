<!-- ImageCarousel.svelte -->
<script>
  import ImageDisplay from '../../components_escapist/ImageDisplay.svelte';
  import Thumbnail from '../../components_escapist/Thumbnail.svelte';
  import CarouselControls from '../../components_escapist/CarouselControls.svelte';
  import Header from '../../components_escapist/Header.svelte';

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

  function handleKeyPress(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      currentIndex = index;
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
</script>

<Header />

<main class="p-0 relative">
  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} class="w-full h-full" /> 

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
