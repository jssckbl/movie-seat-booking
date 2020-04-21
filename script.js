const container = document.querySelector(".container"); // if there were multiple containers it would only select the first one
const seats = document.querySelectorAll(".row .seat:not(.occupied)"); // puts things into a node list which is similar to an array and we can run methods on it as if it were an array
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value; // + has similar function to parseInt
