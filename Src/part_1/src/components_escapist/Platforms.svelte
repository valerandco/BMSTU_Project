<script>
  let originalPrice = 13.59;
  let discountPercentage = 28;
  let discountedPrice = originalPrice * (1 - discountPercentage / 100);

  let platforms = [
    {
      name: "Android",
      img: "Android",
      additionalIcons: [
        { name: "Google Play", img: "Google Play" },
        { name: "Netflix", img: "Netflix" },
        { name: "Amazon", img: "Amazon" },
      ]
    },
    {
      name: "iOS",
      img: "iOS",
      additionalIcons: [
        { name: "App Store", img: "App Store" },
        { name: "Apple Arcade", img: "Apple Arcade" }
      ]
    },
   {
      name: "Nintendo Switch",
      img: "Nintendo Switch",
      additionalIcons: [
        
      ]
    },
    {
      name: "PS",
      img: "PS",
      additionalIcons: [
        
      ]
    },
    {
      name: "Xbox",
      img: "Xbox",
      additionalIcons: [
        
      ]
    },
    {
      name: "macOS",
      img: "macOS",
      additionalIcons: [
        
      ]
    },
    {
      name: "linux",
      img: "Linux",
      additionalIcons: [
       
      ]
    },
    {
      name: "Windows",
      img: "Windows",
      additionalIcons: [
        { name: "Battle.net", img: "Battle.net" },
        { name: "Epic Games Store", img: "Epic Games Store" },
        { name: "gog.com", img: "Gog.com" },
        { name: "Steam", img: "Steam" },
        { name: "Humble Bundle", img: "Humble Bundle" },
      ]
    },
  ];

  let activeIcons = platforms;
  let activeAdditionalIcons = [];
  let showingAdditional = false;

  function toggleIcons(mainIconIndex = null) {
    if (mainIconIndex !== null && platforms[mainIconIndex].additionalIcons && platforms[mainIconIndex].additionalIcons.length > 0) {
      activeAdditionalIcons = platforms[mainIconIndex].additionalIcons;
      showingAdditional = true;
    } else {
      showingAdditional = false;
      activeAdditionalIcons = []; // Очищаем список активных дополнительных иконок
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleIcons(event.currentTarget.dataset.index ? parseInt(event.currentTarget.dataset.index) : null);
    }
  }
</script>

  
<div class="flex items-center justify-center mt-5">
  <div class="text-white p-4 flex items-center pr-[155px]">
    <div class="flex items-center">
      <span class="mr-5 text-[28px]">Buy it for</span>
      {#if showingAdditional}
        {#each activeAdditionalIcons as icon}
          <button class="icon-container mr-5" style="position: relative;" on:click={() => toggleIcons()} tabindex="0" on:keydown={handleKeydown}>
            <img src={`src/img/Platforms/${icon.img}.svg`} class="icon-size" alt={icon.name}>
            <span class="platform-name">{icon.name}</span>
          </button>
        {/each}
        <button class="icon-container mr-5" style="position: relative;" on:click={() => toggleIcons()} tabindex="0" on:keydown={handleKeydown}>
          <img src="src/img/Platforms/Back.svg" class="icon-size" alt="Back">
          <span class="platform-name">Back</span>
        </button>
      {:else}
        {#each platforms as platform, index}
          <button class="icon-container mr-5" style="position: relative;" on:click={() => toggleIcons(index)} tabindex="0" on:keydown={handleKeydown}>
            <img src={`src/img/Platforms/${platform.img}.svg`} class="icon-size" alt={platform.name}>
            <span class="platform-name">{platform.name}</span>
          </button>
        {/each}
      {/if}
    </div>
    <div class="flex justify-between items-center mb-2">
      <div class="text-4xl line-through text-white mr-4 ml-4">$13.59</div>
      <span class="mr-4  bg-price text-customText_green text-[25px]  text-base font-extrabold  font-inter px-3 py-2 rounded-md">-28%</span>
      <div class="text-4xl font-bold text-white">$9.99</div>
    </div>
  </div>
  
</div>
  

  <div class="">
    <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-1/2 ml-[20.2%] h-auto mt-3  mb-2 " />
  </div>
  
  <style>
    .icon-container {
      display: inline-block;
      position: relative;
    }
  
    .platform-name {
      position: absolute;
      width: auto;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      display: none;
      color: white;
      padding: 5px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
    }
  
    .icon-container:hover .platform-name {
      display: block;
    }
  
    .icon-size {
      width: 47px;
      height: 47px;
    }

    
  </style>
  
  