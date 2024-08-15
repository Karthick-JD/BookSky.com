// For Pop-up

var popupoverlay = document.querySelector(".popup")
var popupScreen = document.querySelector(".popup-screen")

function popup() {
    popupoverlay.style.display = "block"
    popupScreen.style.display = "block"
}

function closepopup(event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupScreen.style.display = "none"
}

function deletebook(event) {
    event.target.parentElement.remove()
}

// for adding a book

var bookTitle = document.querySelector(".bookTitle")
var bookAuthor = document.querySelector(".bookAuthor")
var bookDescription = document.querySelector(".bookDescription")

var container = document.querySelector(".books")

function addBook(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML = `<h2 class="book-title">${bookTitle.value}</h2>
                    <h5 class="book-author">by <span class="author-name">${bookAuthor.value}</span></h5>
                    <p class="book-description">${bookDescription.value}</p>
                    <button class="delete-book" title="Delete Book" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    document.querySelector('form').reset()
    popupoverlay.style.display = "none"
    popupScreen.style.display = "none"
}

document.getElementById("top-btn").addEventListener("click",function(){
    window.scrollTo({ top:0, behavior:"smooth"})
})

window.addEventListener("scroll", function() {
    var element = document.getElementById("top-btn");
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  