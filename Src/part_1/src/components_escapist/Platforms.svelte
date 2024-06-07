<script>
    let originalPrice = 13.59;
    let discountPercentage = 28;
    let discountedPrice = originalPrice * (1 - discountPercentage / 100);
  </script>
  
  <div class="flex items-center justify-center mt-5">
    <div class=" text-white p-4 flex items-center pr-[155px]">
      <div class="flex items-center">
        <span class="mr-5 text-[28px] 8k:text-[160px] 4k:text-[75px] 2k:text-[32px] xl:text-[24px] lg:text-xl md:text-xl sm:text-[17px] font-normal font-['Inter'] leading-[23px] whitespace-nowrap">Buy it for </span>
        <img src="src/img/Platforms/Android.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="Android">
        <img src="src/img/Platforms/iOS.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="iOS">
        <img src="src/img/Platforms/Nintendo Switch.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="Nintendo Switch">
        <img src="src/img/Platforms/PS.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="PlayStation">
        <img src="src/img/Platforms/Xbox.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="PlayStation">
        <img src="src/img/Platforms/macOS.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="PlayStation">
        <img src="src/img/Platforms/Linux.svg" class="mr-5 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="PlayStation">
        <img src="src/img/Platforms/Windows.svg" class="mr-12 w-[47px] h-[47px] 8k:w-[230px] 8k:h-[230px] 4k:w-[110px] 4k:h-[110px] 2k:w-[47px] 2k:h-[47px] xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] " alt="PlayStation">
      </div>
      <div>
        <span class="p-4 text-white text-[26px]  text-base font-regular  font-inter line-through">${originalPrice.toFixed(2)}</span>
        <span class="mr-4  bg-price text-customText_green text-[22px]  text-base font-extrabold  font-inter px-3 py-1 rounded-sm">-{discountPercentage}%</span>
        <span class=" text-white text-[26px]  text-base font-bold  font-inter">${discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
  
  <style>
    img {
      filter: brightness(0) invert(1);
    }
  </style>
  