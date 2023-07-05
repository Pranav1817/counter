input_value = document.getElementById("input_value");

start = document.getElementById("start");

display = document.getElementById("display");
display.innerText = 0;
var limit = null;
start.addEventListener("click", function () {
  limit = parseFloat(input_value.value);
  console.log(limit);
  let count = 0;
  var id = setInterval(function () {
    if (count < limit) count++;
    else {
      clearInterval(id);
    }
    display.innerText = count;
    console.log(count);
  }, 1000);
});
