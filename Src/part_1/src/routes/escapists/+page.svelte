<script>
  import ImageCarousel from '../../components_escapist/ImageCarousel.svelte';
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
</script>

<Header/>

<main class="p-0 relative">
  <ImageCarousel {currentIndex} {images} />
</main>
