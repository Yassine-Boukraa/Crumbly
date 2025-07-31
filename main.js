const links = document.querySelectorAll(".l")
let isExpanded = false;
const viewMoreBtn = document.getElementById("viewMoreBtn");

links.forEach(link => {
    link.addEventListener("click", () =>{
        links.forEach(l => {
            l.classList.remove("active")
        })
        link.classList.add("active")
        console.log(link)
    })
});


let categorie_1 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Velvet Choco Chip.png">
                </div>
                <h2 class="title">
                    Velvet Choco Chip
                </h2>
                <p class="description">
                    Classic cookie with semi-sweet Belgian chocolate chunks.
                </p>
                <p class="price">
                    6.50 TND
                </p>
            </div>
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Golden Butter Crumb.png">
                </div>
                <h2 class="title">
                    Golden Butter Crumb
                </h2>
                <p class="description">
                    Buttery, crisp-edged cookie that melts in your mouth.
                </p>
                <p class="price">
                    6.00 TND
                </p>
            </div>
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Cinnamon Oat Glow.png">
                </div>
                <h2 class="title">
                    Cinnamon Oat Glow
                </h2>
                <p class="description">
                    Old-school oats with a warm cinnamon touch.
                </p>
                <p class="price">
                    5.80 TND
                </p>
            </div>`;

let categorie_2 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Nutella Core Melt.png">
                </div>
                <h2 class="title">
                    Nutella Core Melt
                </h2>
                <p class="description">
                    A soft cookie bursting with warm Nutella.
                </p>
                <p class="price">
                    7.20 TND
                </p>
            </div>
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Choco Fudge Bomb.png">
                </div>
                <h2 class="title">
                    Choco Fudge Bomb
                </h2>
                <p class="description">
                    Deep cocoa cookie with fudge and dark chocolate.
                </p>
                <p class="price">
                    7.00 TND
                </p>
            </div>
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Biscoff Butter Storm.png">
                </div>
                <h2 class="title">
                    Biscoff Butter Storm
                </h2>
                <p class="description">
                    Soft spiced cookie swirled with Biscoff spread.
                </p>
                <p class="price">
                    7.50 TND
                </p>
            </div>
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Salted Caramel Drop.png">
                </div>
                <h2 class="title">
                    Salted Caramel Drop
                </h2>
                <p class="description">
                    Rich cookie with gooey caramel center and a sea salt kiss.
                </p>
                <p class="price">
                    7.30 TND
                </p>
            </div>`;

let categorie_3 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Pumpkin Maple Kiss.png">
                </div>
                <h2 class="title">
                    Pumpkin Maple Kiss
                </h2>
                <p class="description">
                    Pumpkin purée & spices topped with maple drizzle.
                </p>
                <p class="price">
                    6.80 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Winter Mint Crunch.png">
                </div>
                <h2 class="title">
                    Winter Mint Crunch
                </h2>
                <p class="description">
                    Chocolate mint cookie with a white drizzle.
                </p>
                <p class="price">
                    6.70 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Lemon Spring Zest.png">
                </div>
                <h2 class="title">
                    Lemon Spring Zest
                </h2>
                <p class="description">
                    Soft lemon cookie with citrus glaze.
                </p>
                <p class="price">
                    6.50 TND
                </p>
            </div>`;

let categorie_4 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Velvet Choco Chip.png">
                </div>
                <h2 class="title">
                    Red Velvet Chunk
                </h2>
                <p class="description">
                    Red velvet base with dark & white chocolate.
                </p>
                <p class="price">
                    7.00 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Churro Swirl.png">
                </div>
                <h2 class="title">
                    Churro Swirl
                </h2>
                <p class="description">
                    Cinnamon sugar crust and creamy center.
                </p>
                <p class="price">
                    6.80 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Matcha Vanilla Crunch.png">
                </div>
                <h2 class="title">
                    Matcha Vanilla Crunch
                </h2>
                <p class="description">
                    Earthy matcha cookie with vanilla icing.
                </p>
                <p class="price">
                    7.00 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Raspberry Crumble Heart.png">
                </div>
                <h2 class="title">
                    Raspberry Crumble Heart
                </h2>
                <p class="description">
                    Sweet berry jam in a soft buttery cookie.
                </p>
                <p class="price">
                    6.90 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Fruity Pebble Pop.png">
                </div>
                <h2 class="title">
                    Fruity Pebble Pop
                </h2>
                <p class="description">
                    Colorful cereal bits inside vanilla dough.
                </p>
                <p class="price">
                    6.90 TND
                </p>
            </div>`;

let categorie_5 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Crumbly Mini Box (6 pcs).png">
                </div>
                <h2 class="title">
                    Crumbly Mini Box (6 pcs)
                </h2>
                <p class="description">
                    A delightful mix of your top picks.
                </p>
                <p class="price">
                    18.00 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Party Pack (12 pcs).png">
                </div>
                <h2 class="title">
                    Party Pack (12 pcs)
                </h2>
                <p class="description">
                    Ideal for sharing, celebrations, or offices.
                </p>
                <p class="price">
                    34.00 TND
                </p>
            </div>`;

let categorie_6 = `<div class="card">
                <div class="img">
                    <img src="Images/cookies/Hot Chocolate (Dark or Milk).webp">
                </div>
                <h2 class="title">
                    Hot Chocolate (Dark or Milk)
                </h2>
                <p class="description">
                    Rich, creamy, and topped with marshmallow.
                </p>
                <p class="price">
                    5.00 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Vanilla Iced Latte.webp">
                </div>
                <h2 class="title">
                    Vanilla Iced Latte
                </h2>
                <p class="description">
                    Cold brew with smooth vanilla.
                </p>
                <p class="price">
                    6.00 TND
                </p>
            </div>
            
            <div class="card">
                <div class="img">
                    <img src="Images/cookies/Choco Cookie Milkshake.png">
                </div>
                <h2 class="title">
                    Choco Cookie Milkshake
                </h2>
                <p class="description">
                    Thick chocolate shake with cookie crumble.
                </p>
                <p class="price">
                    7.50 TND
                </p>
            </div>`;

let Cards_Container = document.getElementById("Cards");

let Allbutton = document.getElementsByClassName("all")[0];
let cat1 = document.getElementById("l1");
let cat2 = document.getElementById("l2");
let cat3 = document.getElementById("l3");
let cat4 = document.getElementById("l4");
let cat5 = document.getElementById("l5");
let cat6 = document.getElementById("l6");

const allCardsHTML = categorie_1 + categorie_2 + categorie_3 + categorie_4 + categorie_5 + categorie_6;

showInitialCards();


Allbutton.addEventListener("click", () => {
    Cards_Container.innerHTML = allCardsHTML;
    showInitialCards();
    viewMoreBtn.style.display = "block"
})

cat1.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_1;
    viewMoreBtn.style.display = "none"
})
cat2.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_2;
    viewMoreBtn.style.display = "none"
})
cat3.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_3;
    viewMoreBtn.style.display = "none"
})
cat4.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_4;
    viewMoreBtn.style.display = "none"
})
cat5.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_5;
    viewMoreBtn.style.display = "none"
})
cat6.addEventListener("click", () => {
    Cards_Container.innerHTML = categorie_6;
    viewMoreBtn.style.display = "none"
})





function showInitialCards() {
  Cards_Container.innerHTML = categorie_1 + categorie_2;
  viewMoreBtn.innerHTML = 'View More <i class="fa-solid fa-arrow-down"></i>';
  isExpanded = false;
}

// Show all cards
function showAllCards() {
  Cards_Container.innerHTML = allCardsHTML;
  viewMoreBtn.innerHTML = 'View Less <i class="fa-solid fa-arrow-up"></i>';
  isExpanded = true;
}

;

// Button click toggles between showing less or more cards
viewMoreBtn.onclick = () => {
  if (isExpanded) {
    showInitialCards();
  } else {
    showAllCards();
  }
}

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show/hide button on scroll
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
    // Optional: Pulse if near bottom
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if ((window.scrollY / scrollTotal) > 0.8) {
      backToTopBtn.style.animation = "pulse 1.5s infinite";
    } else {
      backToTopBtn.style.animation = "none";
    }
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



window.addEventListener("load", () => {
  document.querySelector(".loading-screen").classList.add("fade-out");
});
