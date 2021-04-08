$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $running = $(".running");
  const $runningTwo = $(".runningTwo");
  const $runningThree = $(".runningThree");
  const $runningFour = $(".runningFour");
  const $runningFive = $(".runningFive");
  const $runningSix = $(".runningSix");
  const $runningSeven = $(".runningSeven");

  const $webl = $(".web.l");
  const weblFromTop = $webl.offset().top;
  const weblHeight = $webl.outerHeight();

  const $webll = $(".web.ll");
  const webllFromTop = $webll.offset().top;
  const webllHeight = $webll.outerHeight();

  const $webp = $(".web.p");
  const webpFromTop = $webp.offset().top;
  const webpHeight = $webp.outerHeight();

  const $webpp = $(".web.pp");
  const webppFromTop = $webpp.offset().top;
  const webppHeight = $webpp.outerHeight();

  const $aboutp = $(".about.p");
  const aboutpFromTop = $aboutp.offset().top;
  const aboutpHeight = $aboutp.outerHeight();

  const $aboutpp = $(".about.pp");
  const aboutppFromTop = $aboutpp.offset().top;
  const aboutppHeight = $aboutpp.outerHeight();

  const $aboutl = $(".about.l");
  const aboutlFromTop = $aboutl.offset().top;
  const aboutlHeight = $aboutl.outerHeight();

  const $aboutll = $(".about.ll");
  const aboutllFromTop = $aboutll.offset().top;
  const aboutllHeight = $aboutll.outerHeight();

  const $aboutfive = $(".about.five");
  const aboutfiveFromTop = $aboutfive.offset().top;
  const aboutfiveHeight = $aboutfive.outerHeight();

  const $webfive = $(".web.five");
  const webfiveFromTop = $webfive.offset().top;
  const webfiveHeight = $webfive.outerHeight();

  const $aboutsix = $(".about.six");
  const aboutsixFromTop = $aboutsix.offset().top;
  const aboutsixHeight = $aboutsix.outerHeight();

  const $websix = $(".web.six");
  const websixFromTop = $websix.offset().top;
  const websixHeight = $websix.outerHeight();

  const $aboutseven = $(".about.seven");
  const aboutsevenFromTop = $aboutseven.offset().top;
  const aboutsevenHeight = $aboutseven.outerHeight();

  const $webseven = $(".web.seven");
  const websevenFromTop = $webseven.offset().top;
  const websevenHeight = $webseven.outerHeight();

  if (scrollValue > aboutfiveFromTop + webfiveHeight - windowHeight) {
    $aboutfive.addClass("active");
  }
  if (scrollValue > webfiveFromTop + webfiveHeight - windowHeight) {
    $webfive.addClass("active");
    $runningFour.addClass("goMan2");
  }

  if (scrollValue > aboutsixFromTop + websixHeight - windowHeight) {
    $aboutsix.addClass("active");
  }
  if (scrollValue > websixFromTop + websixHeight - windowHeight) {
    $websix.addClass("active");
    $runningFive.addClass("goMan");
  }

  if (scrollValue > aboutsevenFromTop + websevenHeight - windowHeight) {
    $aboutseven.addClass("active");
  }
  if (scrollValue > websevenFromTop + websevenHeight - windowHeight) {
    $webseven.addClass("active");
    $runningSix.addClass("goMan2");
    $runningSeven.addClass("goMan3");
  }

  if (scrollValue > weblFromTop + weblHeight - windowHeight) {
    $webl.addClass("active");
  }
  if (scrollValue > webllFromTop + webllHeight - windowHeight) {
    $webll.addClass("active");
    $runningTwo.addClass("goMan2");
  }
  if (scrollValue > webpFromTop + webpHeight - windowHeight) {
    $webp.addClass("active");
    $running.addClass("goMan");
  }
  if (scrollValue > webppFromTop + webppHeight - windowHeight) {
    $webpp.addClass("active");
    $runningThree.addClass("goMan");
  }
  if (scrollValue > aboutpFromTop + weblHeight - windowHeight) {
    $aboutp.addClass("active");
  }
  if (scrollValue > aboutppFromTop + webllHeight - windowHeight) {
    $aboutpp.addClass("active");
  }
  if (scrollValue > aboutlFromTop + webpHeight - windowHeight) {
    $aboutl.addClass("active");
  }
  if (scrollValue > aboutllFromTop + webppHeight - windowHeight) {
    $aboutll.addClass("active");
  }

  if (scrollValue < 100) {
    $("div").removeClass("active");
    $("div").removeClass("goMan");
    $("div").removeClass("goMan2");
  }
});

$(".nav0").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("header").offset().top,
    },
    2000
  );
  $(".fas, nav").toggleClass("off");
});
$(".nav1").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".features").offset().top,
    },
    2000
  );
  $(".fas, nav").toggleClass("off");
});
$(".nav2").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    2000
  );
  $(".fas, nav").toggleClass("off");
});
// $(".tutaj").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $(".portfolio").offset().top,
//     },
//     2000
//   );
// });
$(".nav3").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".slogan").offset().top + 18,
    },
    1500
  );
  $(".fas, nav").toggleClass("off");
});
$(".nav4").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".hobby").offset().top + 25,
    },
    1000
  );
  $(".fas, nav").toggleClass("off");
});
$(".nav5").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".contact").offset().top,
    },
    1000
  );
  $(".fas, nav").toggleClass("off");
});

$(".burger").on("click", function () {
  $(".fas, nav").toggleClass("off");
});

$(".moreProject").on("click", function () {
  $(".xxx, .more").toggleClass("less");
});

const status = document.querySelector(".status");
const statusBar = () => {
  currentScroll = Math.round(
    (window.scrollY /
      (document.documentElement.offsetHeight - window.innerHeight)) *
      100
  );
  status.style.width = currentScroll + "%";
};

window.addEventListener("scroll", statusBar);

const tutaj = document.querySelector(".tutaj");

tutaj.addEventListener("click", () => {
  window.location = "projects.html";
});
const tutaj2 = document.querySelector(".tutaj2");

tutaj2.addEventListener("click", () => {
  window.location = "projects.html";
});
const tutaj3 = document.querySelector(".tutaj3");

tutaj3.addEventListener("click", () => {
  window.location = "projects.html";
});
