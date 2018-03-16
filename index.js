// 1. Get the <form> element
form = document.querySelector('#create-form');
console.log(form)

// 2. Event Listen when form has been submitted
// // 2.1 Prevent the default behavior of form submission
form.onsubmit = function(){
  event.preventDefault();
  msg = document.querySelector('#input-msg').value;
  img = document.querySelector('#input-img').value;

  homeUrl="C:\\Users\\geral\\OneDrive\\Documents\\next academy\\disappearing-message-app-boiler-master\\message.html"

  url = homeUrl + "?img-url=" + img + "&msg=" + msg
  console.log(url);

  paragraph= document.querySelector('#share-url');
  paragraph.innerHTML = url;



}
