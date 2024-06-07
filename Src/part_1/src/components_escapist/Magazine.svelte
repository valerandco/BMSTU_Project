<script>
    let reviews = [
      {
        magazine: 'TheSixthAxis',
        rating: '9 / 10',
        content: `The Escapists 2 is a game that has added a lot to the formula that gave its predecessor success, while managing to maintain its core identity. If you played the original Escapists then getting the sequel is a no brainer, while if you fancy taking on a generally very challenging game where you have to rely on your own wits then The Escapists 2 may be just what you're looking for. There will be times when you get a little frustrated when you lose an item through messing with the wrong guards or a plan going wrong, but when you finally escape you'll feel elation as you'll love it when your plan comes together.`
      },
      {
        magazine: 'IGN Spain',
        rating: '8.1 / 10.0',
        content: `With the arrival of local cooperative games, Nintendo Switch version of The Escapists 2 becomes a must if you like games that make use your imagination and think out of the box. On the other hand, lack of extra content could ward off those who already tried desktop versions.`
      }
    ];
  </script>

<div class="">
    <p class="text-white text-base mt-4 mb-1 font-semibold font-inter xsm:px-5 sm:px-5 8k:text-7xl 8k:mb-10 4k:text-5xl">MAGAZINE REVIEWS</p>
    <div class="">
      <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto xsm:px-5 sm:px-5 8k:mb-10" />
    </div>
</div>
  
  <div class=" mb-5 p-4 max-w-xl mx-auto mt-0">
    {#each reviews as review}
      <div class="bg-user_review_bg rounded-lg p-4 shadow-lg mb-5">
        <div class="text-sm text-white  font-bold italic">{review.magazine}</div>
        <div class="text-sm text-white  font-bold">{review.rating}</div>
        <p class="text-sm text-white  mt-2">{review.content}</p>
      </div>
    {/each}
  </div>
  
  <style>
    /* Дополнительные стили при необходимости */
  </style>
  