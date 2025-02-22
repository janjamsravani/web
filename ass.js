function checkDay() {
  const day = prompt("Enter a day (e.g., mon, tue, wed):").toLowerCase();

  if (day === "mon" || day === "tue") {
    alert("The activity is cricket.");
  } else if (day === "wed" || day === "thu") {
    alert("The activity is football.");
  } else if (day === "fri") {
    alert("The activity is volleyball.");
  } else if (day === "sat") {
    alert("The activity is basketball.");
  } else if (day === "sun") {
    alert("It's a holiday!");
  } else {
    alert("Invalid day! Please enter a valid day (e.g., mon, tue, wed).");
  }
}
