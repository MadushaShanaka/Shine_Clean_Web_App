(function () {
  fetch("resources/reviews.json")
    .then((response) => response.json())
    .then((data) => {
      const reviewsContainer = document.getElementById("reviews");
      data.forEach((review) => {
        const div = document.createElement("div");
        div.className = "review";
        div.innerHTML = `
    <div class="item">
      <div class="testimony-wrap py-4">
      <div
        class="icon d-flex align-items-center justify-content-center"
      >
        <span class="fa fa-quote-right"></span>
      </div>
      <div class="text">
        <div class="d-flex align-items-center mb-4">
        <div
          class="user-img"
          style="background-image: url(images/person_2.jpg)"
        ></div>
        <div class="pl-3">
          <p class="name">${review.name}</p>
          <span class="position">${review.date}</span>
          <span class="rating">${"★".repeat(review.rating)}${"☆".repeat(
          5 - review.rating
        )}</span><br>
        </div>
        </div>
        <p class="mb-1">
        ${review.review}
        </p>
      </div>
      </div>
    </div>
    `;
        reviewsContainer.appendChild(div);
      });
    });

    
if($('.owl-carousel').hasClass('owl-theme')){ //resize event was triggering an error, this if statement is to go around it

  $('.owl-carousel').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
  $('.owl-carousel').find('.owl-stage-outer').children().unwrap();
  $('.owl-carousel').removeClass("owl-center owl-loaded owl-text-select-on");

  $(".owl-carousel").owlCarousel(); //re-initialise the owl
}
})();
