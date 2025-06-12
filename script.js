const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach((cell) => {
    total += parseFloat(cell.innerText);
  });

  // ✅ Create new row and cell for total
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // ✅ Set the cell to span 2 columns
  totalCell.setAttribute("colspan", "2");
  totalCell.innerText = `Total Price: Rs ${total}`;

  // ✅ Add cell to row and row to table
  newRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(newRow);
};

// ✅ Attach event listener
getSumBtn.addEventListener("click", getSum);

