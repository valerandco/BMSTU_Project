<script>
  let allGames = [
    { name: "Diablo II: Resurrected", genre: "RPG / Action", originalPrice: "$59.99", discount: "-33%", price: "$39.99", image: "src/img/Similar_games/Group 2.png", platforms: { pc: true, xbox: true, playstation: true }},
    { name: "Warcraft III: Reforged", genre: "Real-time strategy", originalPrice: "$39.99", discount: "-25%", price: "$29.99", image: "src/img/Similar_games/Group 3.png", platforms: { pc: true, xbox: false, playstation: false }},
    { name: "HearthStone", genre: "HearthStone", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 4.png", platforms: { pc: true, ios: true, android: true }},
    { name: "Overwatch 2", genre: "First-person shooter", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 5.png", platforms: { pc: true, playstation: true, xbox: true, nintendo: true }},
    { name: "Starcraft II", genre: "Real-time strategy", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 6.png", platforms: { pc: true }},
    { name: "Diablo Immortal", genre: "Real-time strategy", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 8.png", platforms: { pc: true, playstation: true, xbox: true, nintendo: true }},
    { name: "World of Warcraft Classic", genre: "MMORPG", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 9.png", platforms: { pc: true }},
    { name: "World of Warcraft", genre: "MMORPG", originalPrice: "", discount: "", price: "", image: "src/img/Similar_games/Group 10.png", platforms: { pc: true }},
    { name: "Diablo III", genre: "RPG / Action", originalPrice: "", price: "", image: "src/img/Similar_games/Group 11.png", platforms: { pc: true, playstation: true, xbox: true, nintendo: true }},
    { name: "The Escapists 2", genre: "RPG / Action / Strategy", originalPrice: "$13.59", discount: "-28%", price: "$9.99", image: "src/img/Similar_games/Group 12.png", platforms: { pc: true, mac: true, linux: true, playstation: true, xbox: true, nintendo: false, ios: true, android: true, }},
    { name: "Streets of Rogue", genre: "Roguelike", originalPrice: "$10.00", discount: "-75%", price: "$2.50", image: "src/img/Similar_games/Group 14.png", platforms: { pc: true, mac: true, linux: true, playstation: true, xbox: true, nintendo: false, ios: true, android: true,}},
    { name: "As Dusk Falls", genre: "Adventure / Interactive movie", originalPrice: "$29.99", discount: "-67%", price: "$9.89", image: "src/img/Similar_games/Group 13.png", platforms: { pc: true, xbox: false, }},
    



  ];
  let gamesToShow = 4;
  let games = allGames.slice(0, gamesToShow);

  function showMore() {
    let nextToShow = gamesToShow + 4;
    gamesToShow = nextToShow > allGames.length ? allGames.length : nextToShow;
    games = allGames.slice(0, gamesToShow);
  }
</script>




<div class="grid grid-cols-4 gap-0">
  {#each games as game}
    <div class="text-white rounded-md overflow-hidden shadow-md" style="background: linear-gradient(to top, #143156, #2E4582);">
      <div class="w-full">
        <img src={game.image} alt={game.name} class="w-full object-cover"/>
      </div>
      <div class="p-4">
        <p class="text-2xl font-bold font-inter">{game.name}</p>
       
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center">
            {#if game.platforms.pc}
              <img src="src/img/Platforms/Windows.svg" alt="PC" class="h-6"/>
            {/if}
            {#if game.platforms.playstation}
              <img src="src/img/Platforms/PS.svg" alt="PlayStation" class="h-6 mx-2"/>
            {/if}
            {#if game.platforms.xbox}
              <img src="src/img/Platforms/Xbox.svg" alt="Xbox" class="h-6"/>
            {/if}
            {#if game.platforms.nintendo}
              <img src="src/img/Platforms/Nintendo Switch.svg" alt="Xbox" class="h-6 mx-2"/>
            {/if}
            {#if game.platforms.ios}
              <img src="src/img/Platforms/iOS.svg" alt="Xbox" class="h-6 mx-2"/>
            {/if}
            {#if game.platforms.android}
              <img src="src/img/Platforms/Android.svg" alt="Xbox" class="h-6 "/>
            {/if}
            {#if game.platforms.mac}
              <img src="src/img/Platforms/macOS.svg" alt="Xbox" class="h-6 mx-2"/>
            {/if}
            {#if game.platforms.linux}
              <img src="src/img/Platforms/Linux.svg" alt="Xbox" class="h-6 "/>
            {/if}
          </div>
        </div>
        <p class="text-md text-gray-300 mt-3 font-inter">{game.genre}</p>
        <div class="text-right flex items-center space-x-5  mt-2">
          <p class="text-lg line-through opacity-50 font-inter">{game.originalPrice}</p>
          {#if game.discount}
            <span class="bg-price text-xs text-customText_green font-bold uppercase px-2 py-1 rounded font-inter">{game.discount}</span>
          {/if}
          <p class="text-xl font-bold">{game.price}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
{#if games.length < allGames.length}
  <button class="px-6 py-3 bg-user_review_bg text-white rounded " on:click={showMore}>
    Show more...
  </button>
{/if}
