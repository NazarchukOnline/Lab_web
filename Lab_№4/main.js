let button = document.querySelector(".reset-color").children[0];

button.onclick = function(){
    let post = document.querySelectorAll(".iteam");
    console.log(post);
    for(let n =0; n<post.length; n++){
        if(n%2!=0){
            console.log(post[n]);
            post[n].style.backgroundColor = "#e6e6e6";
        }
    }
};

let button_sort = document.querySelector(".reset-color").children[1];
let catalog = document.querySelector(".main-catalog");
let getPrice = (pc) => parseInt(pc.innerHTML.replace(/ /g, ""));

button_sort.onclick = function(){
    let post = document.querySelectorAll(".iteam");
        let sorted = [...post].sort((a, b) => {
            
            let firstPrice = a.querySelector(".match-text");
            let lastPrice = b.querySelector(".match-text");

            let sortA = getPrice(firstPrice);
            let sortB = getPrice(lastPrice);

            return sortA - sortB;
        });
        catalog.innerHTML = "";

        sorted.forEach(pc => catalog.appendChild(pc));
};

let catalog_link = document.querySelector('.first');

catalog_link.onclick = function(ev){
    ev.preventDefault();
    let yakor = catalog_link.getAttribute("href");
    document.querySelector('' + yakor).scrollIntoView({
        block: "start",
        behavior:"smooth"
    })
};