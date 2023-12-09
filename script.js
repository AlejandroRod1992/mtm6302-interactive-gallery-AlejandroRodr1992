//Gallery
const list = [["husky","High energy dog good for winter and pulling sleds"], ["pitbull","Medium energy dog, good family dogs very protective and good with kids"], ["chihuahua","low energy dog, small dogs original from North America"], ["Corgi","Low energy dog with small little legs"], ["aus_shepard","The Australian Shepard is a very high energy dog with really fast reflex"], ["golden","Golden retrivers are really good family dogs they required of alot of energy but they are really good with kids"], ["pug","Pugs are really low energy dogs and dont required much excersise"], ["bulldog","Bulldogs are low energy dogs with really short legs"], ["akita","Akitas are really beautiful looking dogs but are very stubburn and hard to train"], ["german-shepard","German shepards are really high energy dogs they are very smart and sometimes could be agressive if not trained, they are used for police dogs"], ["dalmatian","very high energy dogs famous for the movie 101 dalmatians"], ["wolves","Wolves are wild animals and should not be considered as pets, they look very similar to dogs but they have a more agressive instinct"]]


const gallery = document.getElementById('g')
let listArray = []
for(const lists of list){
    listArray.push(`<div> <img class="gallery" src="/gallery/${lists[0]}.jpg" alt="${lists[0]}"></img> <p style="display:none; font-size:100px">${lists [1]}</p> </div>`)
}

gallery.insertAdjacentHTML("beforeend",listArray.join(' '))

// description

gallery.addEventListener('click', function (i) {
if (i.target.classList.contains("big")){
    i.target.className = "gallery"
    i.target.parentElement.children[1].style ="display:none; font-size:100px"
} else {
    i.target.className += " big" 
    i.target.parentElement.children[1].style ="display:block; font-size:100px"
}
});