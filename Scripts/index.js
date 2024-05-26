// //add your js code here

document.addEventListener("DOMContentLoaded", () => {
  let logOut = document.getElementById("logout");
  let logoutContainer = document.querySelector(".logoutContainer");

  let userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    logoutContainer.style.display = "flex";
  } else {
    logoutContainer.style.display = "none";
  }

  logOut.addEventListener("click", () => {
    localStorage.clear();
    alert("You have successfully logged out");
    logoutContainer.style.display = "none";
  });
});
