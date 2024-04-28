<script>
  export let image;
  export let isActive;
  export let handleClick;
</script>

<button
  class={` xsm:border-[3px] sm:border-[4.95px] md:border-[4.63px] lg:border-[5.79px] xl:border-[7.53px] 4k:border-[16px] 8k:border-[30px] sm:w-[100%] ${isActive ? 'border-blue-500' : 'border-gray-700'} border focus:border-white hover:border-white inline-block`}
  on:click={handleClick}
>
  <div class="w-full h-full bg-cover bg-center relative">
    <img src={image} alt="Thumbnail" class="w-full h-full" />
  </div>
</button>
