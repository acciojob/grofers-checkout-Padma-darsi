// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Make .price cells editable so test cases can type new values
const prices = document.querySelectorAll(".price");
prices.forEach((cell) => {
  cell.setAttribute("contenteditable", "true");
});

const getSum = () => {
  let total = 0;
  prices.forEach((cell) => {
    total += parseFloat(cell.innerText) || 0;
  });

  // Create or update a <div id="ans"> to display the total
  let ans = document.querySelector("#ans");
  if (!ans) {
    ans = document.createElement("div");
    ans.id = "ans";
    document.body.appendChild(ans);
  }
  ans.innerText = total;
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);

