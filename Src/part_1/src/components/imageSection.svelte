<script>
  import { slide, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let direction;

  export let mainImageIndex;
  export let carouselItems;

  function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&controls=0&showinfo=0&autohide=1&mute=1&modestbranding=1&loop=1&rel=0&key=${apiKey}`;
  }

  function handleVideoTimeUpdate(event) {
    currentTime = event.detail.currentTime;
  }

  function startTimer() {
    // Устанавливаем таймер на 1 минуту и 55 секунд
    timer = setTimeout(nextSlide, 115 * 1000);
  }

  const apiKey = 'AIzaSyCf72M2WmMeWnrJ0ADzfZv86Ap7EI3ASNU';
</script>

<style>
  @import '../components/css/ImageCarousel.styles.css';
  .video-container {
    position: relative;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
  
</style>
<!-- h-[80vh] xsm:h-[20vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[70vh] 2k:h-[85vh]  4k:h-[82vh]  8k:h-[82vh] -->
<div class="p-0 relative w-full overflow-hidden h-[80vh] xsm:h-[20vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[80vh] 2k:h-[85vh]  4k:h-[85vh]  8k:h-[82vh]">
  {#if carouselItems && carouselItems.length > 0}
    {#if mainImageIndex === carouselItems.length - 1 && carouselItems[mainImageIndex].video}
      <div class="video-container w-full h-[80vh] xsm:h-[20vh] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[80vh] 2k:h-[85vh]  4k:h-[85vh]  8k:h-[82vh]">
        <iframe
          title="video"
          src={getYouTubeEmbedUrl(carouselItems[mainImageIndex].video)}
          allow="autoplay; encrypted-media"
          allowfullscreen
          on:timeupdate={handleVideoTimeUpdate}
          on:playing={startTimer}
          in:fly="{{ x: direction * 1000, duration: 500, easing: cubicOut }}"
          out:fly="{{ x: -direction * 1000, duration: 500, easing: cubicOut }}"
        ></iframe>
      </div>
    {:else}
      {#key mainImageIndex}
        <img class="w-full h-full " alt={`Image ${mainImageIndex + 1}`} src={carouselItems[mainImageIndex].image} 
        in:fly="{{ x: direction * 1000, duration: 250, easing: cubicOut }}"
        out:fly="{{ x: -direction * 1000, duration: 250, easing: cubicOut }}" />
      {/key}
    {/if}
  {/if}
</div>

