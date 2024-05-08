//add your js code here
let logOut = document.getElementById("logout");
logOut.addEventListener('click', () => {
    localStorage.clear();
    alert("You have successfully logged out")
})