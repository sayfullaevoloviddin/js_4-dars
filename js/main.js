let byTag = document.getElementsByTagName("h1");

let byId = document.getElementById("idRaqam");

let byClass = document.getElementsByClassName("classnomi");

let bySelector = document.querySelector(".classnomi");

let bySelectorAll = document.querySelectorAll(".classnomi");

let byAll = document.getElementsByTagName("h1").namedItem("idRaqam2");
byAll.style.backgroundColor = "red";
byAll.style.color = "blue";
byAll.style.border = "3px solid yellow";
byAll.style.boxShadow = "10px 10px 15px grey";
byAll.style.borderRadius = "25px";
byAll.style.paddingLeft = "15px";
console.log(byAll);