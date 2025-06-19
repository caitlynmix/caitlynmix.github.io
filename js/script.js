function upDate(previewPic){
   document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')"
   document.getElementById("image").style.backgroundColor = "#8e68ff"
   document.getElementById("image").innerHTML = previewPic.alt
  
}

function unDo(){
   document.getElementById("image").style.backgroundImage = "url('')"
   document.getElementById("image").style.backgroundColor = "#8e68ff"
   document.getElementById("image").innerHTML = "Hover over an image below to display here."

}

function newFunction(){
   console.log("Onload function starting")

   currentImages = document.querySelectorAll("img")
   for (var i = 0;i < currentImages.length; i++) {
      currentImages[i].setAttribute("tabindex", "0")
   }
}