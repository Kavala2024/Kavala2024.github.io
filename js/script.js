
//product-view

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('kactive');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('kactive');
    preveiwContainer.style.display = 'none';
  };
  
});

//catagory filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("butn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("hactive");
    current[0].className = current[0].className.replace(" hactive", "");
    this.className += " hactive";
  });
}
//Search//
function search() {
  let filter = document.getElementById('myinput').value.toUpperCase();
  let item = document.querySelectorAll('.target');
  let l = document.getElementsByTagName('p');
  for(var i = 0;i<=l.length;i++){
  let a=item[i].getElementsByTagName('p')[0];
  let value=a.innerHTML || a.innerText || a.textContent;
  if(value.toUpperCase().indexOf(filter) > -1) {
  item[i].style.display="";
  }
  else
  {
  item[i].style.display="none";
  }
  }
  }

  //poppup
  function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    function openPopup(){
      popupNode.classList.add("active");
    }
    function closePopup(){
      popupNode.classList.remove("active");
    }
    overlay.addEventListener("click",closePopup);
    closeBtn.addEventListener("click",closePopup);
    return openPopup;
  }
  let popup =createPopup("#popup");
  document.querySelector("#open-popup").addEventListener("click",popup);
  document.querySelector("#open-popup1").addEventListener("click",popup);
  document.querySelector("#open-popup2").addEventListener("click",popup);
document.querySelector("#open-popup3").addEventListener("click",popup);
  document.querySelector("#open-popup4").addEventListener("click",popup);
  document.querySelector("#open-popup5").addEventListener("click",popup);
document.querySelector("#open-popup6").addEventListener("click",popup);
document.querySelector("#open-popup8").addEventListener("click",popup);
document.querySelector("#open-popup9").addEventListener("click",popup);
document.querySelector("#open-popup10").addEventListener("click",popup);
document.querySelector("#open-popup11").addEventListener("click",popup);
document.querySelector("#open-popup12").addEventListener("click",popup);
document.querySelector("#open-popup13").addEventListener("click",popup);
document.querySelector("#open-popup14").addEventListener("click",popup);
document.querySelector("#open-popup15").addEventListener("click",popup);
document.querySelector("#open-popup16").addEventListener("click",popup);
document.querySelector("#open-popup17").addEventListener("click",popup);
document.querySelector("#open-popup18").addEventListener("click",popup);
document.querySelector("#open-popup19").addEventListener("click",popup);
document.querySelector("#open-popup20").addEventListener("click",popup);
document.querySelector("#open-popup21").addEventListener("click",popup);
document.querySelector("#open-popup22").addEventListener("click",popup);
document.querySelector("#open-popup23").addEventListener("click",popup);
document.querySelector("#open-popup24").addEventListener("click",popup);
document.querySelector("#open-popup25").addEventListener("click",popup);
document.querySelector("#open-popup26").addEventListener("click",popup);
document.querySelector("#open-popup27").addEventListener("click",popup);
document.querySelector("#open-popup28").addEventListener("click",popup);





 
