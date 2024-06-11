<script>
    let originalPrice = 13.59;
    let discountPercentage = 28;
    let discountedPrice = originalPrice * (1 - discountPercentage / 100);

    let platforms = [
    { name: "Android", img: "Android" },
    { name: "iOS", img: "iOS" },
    { name: "Nintendo Switch", img: "Nintendo Switch" },
    { name: "PlayStation", img: "PS" },
    { name: "Xbox", img: "Xbox" },
    { name: "macOS", img: "macOS" },
    { name: "Linux", img: "Linux" },
    { name: "Windows", img: "Windows" }
  ];
  </script>
  
  <div class="flex items-center justify-center mt-5">
    <div class="text-white p-4 flex items-center pr-[155px]">
      <div class="flex items-center">
        <span class="mr-5 text-[28px]">Buy it for</span>
        <!-- Контейнер для иконки и текста -->
        {#each platforms as platform}
          <div class="icon-container mr-5" style="position: relative;">
            <img src={`src/img/Platforms/${platform.img}.svg`} class="icon-size" alt={platform.name}>
            <span class="platform-name ">{platform.name}</span>
          </div>
        {/each}
        <div>
          <span class="line-through">${originalPrice.toFixed(2)}</span>
          <span class="mr-4 bg-price">-{discountPercentage}%</span>
          <span>${discountedPrice.toFixed(2)}</span>
        </div>
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
  
  