let imgs = ["https://images.unsplash.com/photo-1632814501477-7f3a88232a17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDg0NTcwNg&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1626609572015-420cd41eddb0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDg0NTcwNg&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1633506154789-71b72ff86cb3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDg0NTcwNg&ixlib=rb-1.2.1&q=85",
"https://images.unsplash.com/photo-1632884333982-e3b4f9fddd0e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDkwMDg5Nw&ixlib=rb-1.2.1&q=85",
"img//bg.jpg"];

// create pictures 
let pictures = imgs.map(e => {
  let picture = document.createElement("picture");
      let img = document.createElement("img");
    img.src = e;

  picture.append(img)
  return picture
})

function getCurrentImg () {
  return window.localStorage.img ? window.localStorage.img : imgs[0];
}
function setBackground () {
  document.body.style.cssText = `    
  background-image: url(${getCurrentImg()});  
  background-repeat: none;
  background-size: auto;`;
}
setBackground();


// button functionality
let btn = document.querySelector("button");
btn.onclick = () => {
  //create Overlay , container , gallery and close icon
  let overlay = document.createElement("div");
  let container = document.createElement("div");
  let gallery = document.createElement("div");
  let close = document.createElement("span");
  overlay.className = "overlay";
  container.className = "container";
  gallery.className = "gallery";
  // styling the close button + functionality
  close.className = "material-icons-outlined";
  close.id = "close-icon";
  close.innerHTML = "close";
  close.style.cssText = "position:absolute;top:10px;right:10px;color:white;cursor:pointer;";
  close.onclick = () => {
    overlay.remove();
  }
  // put everything into the dom 
  document.body.append(overlay);
  overlay.append(container);
  container.append(gallery);
  gallery.append(close);
  // add imgs into the gallery
  pictures.forEach (e => gallery.append(e));
  // add check icon to the current img 
      let check = document.createElement("span")
    check.className = "material-icons-outlined";
    check.id = "check-icon"
    check.innerHTML = "done";
    check.style.cssText = "position:absolute;top:10px; right:10px; background-color:green;color:white;width:30px;height:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;";
  
  let galleryImgs = gallery.children;
   galleryImgs = Array.from(galleryImgs);
      let currentImg = galleryImgs.find(e => {
      if(e.id !== "close-icon"){
      return e.firstElementChild.src === getCurrentImg();  
      }
       
    });
    if(currentImg && currentImg.lastElementChild.id !=="check-icon"){
      currentImg.append(check);
    }
      // the functionality of choosing the img
  galleryImgs.forEach(e => {
    if(e.id !== "close-icon"){
      e.onclick = () => {
      window.localStorage.img = e.firstElementChild.src;
      setBackground();
      galleryImgs.forEach (e => {
        if(e.id !== "close-icon"){
          let last = e.lastElementChild;
          if(last.id === "check-icon")
            last.remove()
        }
        
      })
      e.append(check)
    }
    }
    
  })
    
}