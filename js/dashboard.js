var myVar;
function myLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader1").style.display = "none";
  document.getElementById("slideIn").style.display = "block";
}



var menu = document.querySelector("#menu-open");
var nav = document.querySelector(".sidebar");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");
  // if (nav.classList.contains("hide-mobile")) {
  //   nav.style.width = 0;
  // } else {
  //   nav.style.width = "240px";
  // }
  // nav.style.width = "240px";
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");
  // nav.style.width = "100px";
  e.preventDefault();
});

// POFILE AND LOGOUT LINKS REVIEWS
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show-drop-content");

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".down-arrow")) {
      var dropdowns = document.getElementById("myDropdown");

      if (dropdowns.classList.contains("show-drop-content")) {
        dropdowns.classList.remove("show-drop-content");
      }
    }
  };
}

/******TRANSACTION DETAILS POP UP*********/
function detailPop() {
  const details = document.querySelector(".details-popup");
  const closeBtn = document.querySelector(".close-btn");
  const popBtn = document.querySelectorAll(".pop");

  for (i = 0; i < popBtn.length; i++) {
    popBtn[i].addEventListener("click", function () {
      details.style.display = "block";
    });
  }
  closeBtn.onclick = function () {
    details.style.display = "none";
  };
}
detailPop();

// INBETWEEN THE TRANSACTION STATUS WITH THE POPUP

//BACK TO PREVIOUS PAGE
function goBack() {
  window.history.back();
}
/***************************** */

var stats = document.getElementById("transaction-status").textContent;
// var verifyText = document.querySelector(".item > div p");


  if (stats.includes("Verify")) {
    // verifyText[i].classList.add("verify");
     stats.classList.add("verify");
    } else if (stats.includes("Sent")) {
      stats.classList.add("sent");
    } else if (stats.includes("Recieved")) {
      stats.classList.add("recieve");
    }
//TRANSACTION STATUS

var verify = document.querySelectorAll(".item > div");
// var verifyText = document.querySelector(".item > div p");

for (let i = 0; i < verify.length; i++) {
  if (verify[i].includes("Verify")) {
    // verifyText[i].classList.add("verify");
     verify[i].classList.add("verify");
  } else if (verify[i].textContent === "Sent") {
    verify[i].classList.add("sent");
  } else if (verify[i].textContent === "Recieved") {
    verify[i].classList.add("recieve");
  }
}
