<script>
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
</style>

<div class="w-full h-auto">
  {#if carouselItems && carouselItems.length > 0}
    {#if mainImageIndex === carouselItems.length - 1 && carouselItems[mainImageIndex].video}
      <div class="video-container w-full" style="position: relative;">
        <iframe
          title="video"
          class="w-full h-full"
          style="video-container iframe"
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
  {/if}
</div>
