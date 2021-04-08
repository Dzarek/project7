const video = document.querySelector(".video");
const text = document.querySelector(".text");
const play = document.querySelector(".play");

const wisielec = document.querySelector(".wisielec");
const pingPong = document.querySelector(".pingPong");
const memory = document.querySelector(".memory");
const listaZadan = document.querySelector(".listaZadan");
const kapitanRakieta = document.querySelector(".kapitanRakieta");
const blackJack = document.querySelector(".blackJack");
const serialoweQuizowanie = document.querySelector(".serialoweQuizowanie");
const aplikacjaPogodowa = document.querySelector(".aplikacjaPogodowa");
const ninjaVsZombie = document.querySelector(".ninjaVsZombie");
const dorotaSzydełkuje = document.querySelector(".dorotaSzydełkuje");
const jjApartments = document.querySelector(".jjApartments");

wisielec.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/wisielecGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Pamiętacie czasy gdy na nudnych lekcjach w szkole wraz z kolegami graliście w różne gry na kartce papieru? Jeśli macie ochotę zabić nudę to proponuję wam moją wersję gry WISIELEC.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/wisielecGame/";
  });
});
pingPong.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/pingpongGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Odbij piłeczkę! Rozruszaj trochę swoją komputerową mysz i sprawdź czy uda Ci się wygrać w Ping Ponga.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/pingpongGame/";
  });
});
memory.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/memoryGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Czy dobrą masz pamięć? Sprawdź i zagraj w MEMORY uzyskując jak najlepszy czas!";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/memoryGame/";
  });
});
listaZadan.addEventListener("click", () => {
  video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/listazadanGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Łatwo zapominasz o swoich obowiązkach? Zaplanuj swój czas z aplikacją Lista Zadań!";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/taskList/";
  });
});

kapitanRakieta.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/kapitanrakietaGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Podbijaj kosmos w grze Kapitan Rakieta! Strzelaj swoim kosmicznym statkiem w wrogów i nie daj się zniszczyć.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/kapitanRakietaGame/";
  });
});
blackJack.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/blackjackGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Przenieś się do wirtualnego kasyna i zagraj w przyjemną grę BlackJack.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/blackjackGame/";
  });
});
serialoweQuizowanie.addEventListener("click", () => {
  // video.style.opacity = 0.8;
  video.style.backgroundImage = "url('images/serialeGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Coś dla fanów oglądania seriali! Pochwal się swoją wiedzą z różnych serialowych hitów i zdobądź jak najwięcej punktów.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/serialoweQuizowanie/";
  });
});

aplikacjaPogodowa.addEventListener("click", () => {
  // video.style.opacity = 0.6;
  video.style.backgroundImage = "url('images/pogodaGif.gif')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Tutaj możesz sprawdzić pogodę prawie dla każdego miasta na świecie.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/pogoda/";
  });
});
ninjaVsZombie.addEventListener("click", () => {
  // video.style.opacity = 0.6;
  video.style.backgroundImage = "url('images/11a.jpg')";
  text.style.fontSize = "20px";
  text.innerHTML = "Pozabijaj wszystkie zombiaki bo inaczej Cię zjedzą...";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/ninjaGame/";
  });
});
dorotaSzydełkuje.addEventListener("click", () => {
  // video.style.opacity = 0.6;
  video.style.backgroundImage = "url('images/9a.jpg')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Strona internetowa stworzona dla osoby, która zajmuje się szydełkowaniem. Można tam zamówić produkty wykonane z włóczki takie jak: zabawki, pufy, koce itd.";
  play.addEventListener("click", () => {
    window.location = "https://dzarek.github.io/dorotaSzydelkuje/";
  });
});
jjApartments.addEventListener("click", () => {
  // video.style.opacity = 0.6;
  video.style.backgroundImage = "url('images/10a.jpg')";
  text.style.fontSize = "20px";
  text.innerHTML =
    "Strona internetowa hotelu/apartamentów do wynajęcia. Umożliwia sprawdzenie pokoi i ich filtrowanie, oraz zarezerwowanie pokoju.";
  play.addEventListener("click", () => {
    window.location = "https://jjapartments2.netlify.app/";
  });
});

const ring = document.querySelector(".ring");
const gry = document.querySelector(".gry");
const aplikacje = document.querySelector(".aplikacje");
const stronyWWW = document.querySelector(".stronyWWW");

const games = document.querySelector(".games");
const app = document.querySelector(".app");
const WWW = document.querySelector(".WWW");

const ringBtn = document.querySelector(".ring button");

gry.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  games.classList.remove("none");
  app.classList.add("none");
  WWW.classList.add("none");
  gry.classList.add("changeColorBtn");
  stronyWWW.classList.remove("changeColorBtn");
  aplikacje.classList.remove("changeColorBtn");
});
aplikacje.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  app.classList.remove("none");
  games.classList.add("none");
  WWW.classList.add("none");
  gry.classList.remove("changeColorBtn");
  stronyWWW.classList.remove("changeColorBtn");
  aplikacje.classList.add("changeColorBtn");
});
stronyWWW.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  WWW.classList.remove("none");
  app.classList.add("none");
  games.classList.add("none");
  gry.classList.remove("changeColorBtn");
  stronyWWW.classList.add("changeColorBtn");
  aplikacje.classList.remove("changeColorBtn");
});
