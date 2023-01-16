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

let catalog_link = document.querySelector('.first');

catalog_link.onclick = function(ev){
    ev.preventDefault();
    let yakor = catalog_link.getAttribute("href");
    document.querySelector('' + yakor).scrollIntoView({
        block: "start"
    })
};