<script>
    import { onMount } from 'svelte';
  
    let isTextVisible = false;
  
    function handleButtonClick() {
      isTextVisible = !isTextVisible;
    }
  
    onMount(() => {
    // Load the Twitch embed script
    const script = document.createElement('script');
    script.src = 'https://player.twitch.tv/js/embed/v1.js';
    script.onload = () => {
      // Create a Twitch.Player object. This will render within the placeholder div
      new Twitch.Player('twitch-embed', {
        video: '1882398279',
        width: '500px', // Set the width of the player to 100% of its container
        height: '350px' // Set the height of the player to 100% of its container
      });
    };
    document.body.appendChild(script);
  });
  </script>


<div class="flex justify-center max-w-xl  pt-2 mx-auto 8k:max-w-12xl 4k:max-w-12xl  mt-5 ">
    <div class="max-w-4xl 8k:max-w-8xl 4k:max-w-9xl grid grid-cols-3 lg:max-w-5xl lg:gap-x-0 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 xsm:grid-cols-1 8k:grid-cols-3 4k:grid-cols-3">
      <div class="col-span-4 flex flex-col justify-between sm:order-2 md:order-2 lg: order-2 xl:order-1 2xl:order-1 ">
        <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">ABOUT THIS GAME</h1>
        
            <div class="mb-4">
              <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20" />
            </div>
  
            <div class="mb-4 max-h-full">
              <img src= "src/img/About/The_Escapist_2_img_2.png" alt="The_Escapist_2_img_2" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
            </div>
        
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">
              The Ultimate Prison Sandbox!</h1>
        
              <div class="mb-4">
                  <img src="src/img/About/The_Escapist_2_img_1.png" alt="The_Escapist_2_img_1" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
                </div>
        
            <h1 class="text-white h-full text-base font-semibold mb-4 font-inter text-justify xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Risk it all to breakout from the toughest prisons in the world. Explore the biggest prisons yet, with multiple floors, roofs, vents and underground tunnels.You’ll have to live by the prison rules, attending roll call, doing prison jobs and following strict routines; all the while secretly engineering your bid for freedom!Your prison escape antics will take you from the frosty Fort Tundra, a train hurtling through the desert, and even to the final frontier!</h1>
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Escape Team Assemble!</h1>
        
            {#if isTextVisible}
            <div class="mb-4">
              <img src="src/img/About/The_Escapist_2_img_3.png" alt="The_Escapist_2_img_3" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
            </div>
            <h1 class="text-white text-base font-semibold mb-4 font-inter text-justify xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Unite with up to 3 friends to create the ultimate escape crew and engineer the wildest escapes yet! Jump online or gather round on a couch to prepare for your sneaky adventures. By working together you'll be able to create even more elaborate and daring plans.Feeling competitive? Dive into the versus mode and show that you've got the skills to break out of any prison faster than your friends can. If all else fails, settle your rivalry in the court yard with a prison punch up!</h1>
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Create YOUR Con!</h1>
            <div class="mb-4">
              <img src="src/img/About/The_Escapist_2_img_4.png" alt="The_Escapist_2_img_4 " class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
            </div>
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Craft your Escape!</h1>
            <div class="mb-4">
              <img src="src/img/About/The_Escapist_2_img_5.png" alt="The_Escapist_2_img_5" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
            </div>
            <h1 class="text-white text-base font-semibold mb-4 font-inter text-justify xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Being in prison forces you to be creative and work with the limited tools at your disposal. You'll have to combine everyday objects like soap and socks to craft new weapons and tools to help you achieve your goal. Steal forks from the cafeteria to chip a tunnel in your room, and craft a poster from magazines and duct tape to hide the evidence. You'll soon learn that duct tape solves (almost) everything!</h1>
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">Prepare for a fight!</h1>
            <div class="mb-4">
              <img src="src/img/About/The_Escapist_2_img_6.png" alt="The_Escapist_2_img_6" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:text-5xl 4k:mb-10" />
            </div>
            <h1 class="text-white text-base font-semibold mb-4 font-inter text-justify xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">The Escapists 2 introduces a brand new combat system to make every prison brawl more exciting and interactive. You'll have to block and tie together chains of attacks whilst strafing around your locked on targets to gain the upper hand in combat. Make sure your visit the gym first to build up those muscles!</h1>
            <h1 class="text-white text-base font-semibold mb-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">New ways to escape!</h1>
            <div class="mb-4">
              <img src="src/img/About/The_Escapist_2_img_7.png" alt="The_Escapist_2_img_7" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-20 4k:mb-10" />
            </div>
            <h1 class="text-white text-base font-semibold mb-4 text-justify xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-20 4k:text-5xl 4k:mb-10">As the prisons get tougher you're going to have to get more creative with your escape plans. There's a ton of options to tackle almost any prison escape.</h1>
            {/if}
        
            <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto mt-4 xsm:px-5 sm:px-5 4k:mb-10" />
        
            <button class="flex justify-end text-white text-base font-semibold customBlue mb-5 py-2 mt-4 font-inter xsm:px-5 sm:px-5 8k:text-7xl 4k:text-5xl 8k:mb-32 4k:mb-10" on:click={handleButtonClick}>
              {isTextVisible ? 'Hide' : 'Read more...'}
            </button>
  
  
      </div>
    </div>
</div>