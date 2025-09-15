const toggleBtn = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

toggleBtn.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});

const reviews = [
  {
    text: "They have the best customer service. The project is also incredibly flexible and easy to use and explore. Glad to have met this team!",
    name: "Lucas Wolfer",
    job: "SEO Ocean",
    img: "assets/little-picture-1.jpg"
  },
  {
    text: "Working with this team was a fantastic experience. They understood our needs perfectly and delivered everything on time with great attention to detail.",
    name: "Emma Clarkson",
    job: "Graphic Designer",
    img: "assets/little-picture-2.jpg"
  },
  {
    text: "The collaboration exceeded my expectations. Communication was smooth and the final product looks absolutely stunning. I would definitely recommend them!",
    name: "Sofia Martinez",
    job: "Marketing Specialist",
    img: "assets/little-picture-3.jpg"
  }
];

let currentIndex = 0;

const reviewText = document.getElementById("review-text");
const reviewerName = document.getElementById("reviewer-name");
const reviewerJob = document.getElementById("reviewer-job");
const reviewerImg = document.getElementById("reviewer-profile-picture");

function showReview(index) {
  const review = reviews[index];
  reviewText.textContent = review.text;
  reviewerName.textContent = review.name;
  reviewerJob.textContent = review.job;
  reviewerImg.src = review.img;
}

document.getElementById("rew-arr-l").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
});

document.getElementById("rew-arr-r").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
});

showReview(currentIndex);