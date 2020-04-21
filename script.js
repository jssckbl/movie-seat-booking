const container = document.querySelector(".container"); // if there were multiple containers it would only select the first one
const seats = document.querySelectorAll(".row .seat:not(.occupied)"); // puts things into a node list which is similar to an array and we can run methods on it as if it were an array
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value; // + has similar function to parseInt

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length; // length is a property that gets the number of elements in an array, or node list!
  console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// registers 'click' only on seats that are unoccupied
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
