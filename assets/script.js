const accordion = document.querySelectorAll("article");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

let navList = document.querySelector(".nav__list");
let navHamburger = document.querySelector(".nav__ham");
let navClose = document.querySelector(".nav__close");
let navBar = document.querySelector(".navbar");

navHamburger.addEventListener("click", function () {
  navList.classList.toggle("nav__active");
  navBar.classList.add("nav_clicked");
  navHamburger.style.display = "none";
  navClose.style.display = "inline";
});
navClose.addEventListener("click", function () {
  navList.classList.toggle("nav__active");
  navHamburger.style.display = "inline";
  navClose.style.display = "none";
  navBar.classList.remove("nav_clicked");
});

let featureHeader = document.querySelectorAll(".feature-name");
let featureContainer = document.querySelector(".feature-container");

featureHeader.forEach(function (feature) {
  feature.addEventListener("click", function () {
    feature.classList.add('active-feature');

    if (feature.innerHTML == "Simple bookmarking") {
      featureContainer.innerHTML = ` 
        <img
          src="assets/images/illustration-features-tab-1.svg"
          alt=""
          class="feature-img"
        />
        <div class="full-feature">
          <h3 class="full-header">Bookmark in one click</h3>
          <p class="full-body">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
         <button class="faq-btn btn btn-primary">More Info</button>   
      </div>
          `;
    } else if (feature.innerHTML == "Speedy searching") {
      featureContainer.innerHTML = `
        <img
          src="assets/images/illustration-features-tab-2.svg"
          alt=""
          class="feature-img"
        />
        <div class="full-feature">
          <h3 class="full-header">  Intelligent search </h3>
          <p class="full-body">
            Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.
          </p>
           <button class="faq-btn btn btn-primary">More Info</button>
        </div>`;
    } else {
      featureContainer.innerHTML = `
        <img
          src="assets/images/illustration-features-tab-3.svg"
          alt=""
          class="feature-img"
        />
        <div class="full-feature">
          <h3 class="full-header"> Share your bookmarks </h3>
          <p class="full-body">
            Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.
          </p>
          <button class="faq-btn btn btn-primary">More Info</button> 
        </div>
          `;
    }
  });
  featureHeader[0].classList.add('active-feature');

});



featureHeader.forEach((feature) => {
  feature.addEventListener("click", () => {
    featureHeader.forEach(f => f.classList.remove("active-feature"));
    feature.classList.add("active-feature");
  });
});
