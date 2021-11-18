var arr = [
  '433% salary hike',
  '300+ placement partners',
  '1 MILLION+ total registered users',
  'INR 73 LPA Highest salary offered',
];

var text_changer = document.getElementById('text_changer_ms');

var index = 0;

var test = document.getElementById("test");
test.addEventListener("click", function(){
  console.log("clicked");
});

setInterval(function () {
  index++;
  // var text = document.createElement("p");
  // text.setAttribute("text", arr[index % arr.length]);

  var div = document.createElement('div');

  div.setAttribute('text', arr[index % arr.length]);

  div.innerText = arr[index % arr.length];

  div.setAttribute('id', index);

  text_changer.append(div);
}, 2000);

setInterval(function () {
  var previous_text = index - 1;
  document.getElementById(previous_text).remove();
}, 2000);


