<script>
    let review = "";
  
    function submitReview() {
      console.log("Review submitted:", review);
      likeImage = "src/img/like_fill.svg"; // Handle the review submission logic
    }

    
  let likeImage = "src/img/like_outline.svg"; // начальное изображение

  function toggleLike() {
    if (likeImage === "src/img/like_outline.svg") {
      likeImage = "src/img/like_fill.svg"; // переключить на заполненное сердце
    } else {
      likeImage = "src/img/like_outline.svg"; // переключить обратно на контурное сердце
    }
  }
  </script>
  
  <div class="rounded-lg">
    <h2 class="text-white font-semibold mb-3">WRITE A REVIEW</h2>
    <textarea bind:value={review} class="w-full h-44 p-2 rounded-md border border-white bg-user_review_bg text-white" placeholder="Type your review here..."></textarea>
    <div class="flex justify-end mt-4 mb-5">
        <button class="flex items-center bg-user_review_bg mr-5 hover:bg-like_hover text-white font-bold py-2 px-4 rounded-md border border-white" on:click={toggleLike}>
            <img class="w-8 h-8" src={likeImage} alt="Like">
        </button>  
      <button class="flex items-center bg-user_review_bg hover:bg-like_hover text-white font-bold py-2 px-4 rounded-md border border-white" on:click={submitReview}>
        Submit
      </button>
    </div>
  </div>  
  
  