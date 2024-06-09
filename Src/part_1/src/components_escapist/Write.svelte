<script>
    let review = "";
  
    function submitReview() {
      console.log("Review submitted:", review); // Handle the review submission logic
    }
  </script>
  
  <div class="  rounded-lg ">
    <h2 class="text-white font-semibold mb-3">WRITE A REVIEW</h2>
    <textarea bind:value={review} class="w-full h-44 p-2 rounded-md border border-white bg-user_review_bg  text-white" placeholder="Type your review here..."></textarea>
    <div class="flex justify-end mt-4 mb-5">
        <button class="flex items-center bg-user_review_bg mr-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md border border-white" onclick={submitReview}>
            <img class="w-10 h-10  " src="src/img/like_12 1.png" alt=}>
          </button>  
      <button class="flex items-center bg-user_review_bg  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md border border-white" onclick={submitReview}>
        Submit
      </button>
      
    </div>
  </div>
  