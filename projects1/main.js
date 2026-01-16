const likeBtn = document.querySelector("like-btn"); 
const likeCountElement= document.querySelector("#like-count");

let isLiked=false; 
let likeCount=9311;

likeBtn.addEventListener("click",function()
{
    isLiked=!isLiked;
    if(isLiked){
        likeBtn.classList.remove("ri-heart-line"); 
        likeBtn.classList.add("ri-heart-fill");
        likeBtn.classList.add("liked-color");
        likeCount++;
    }
    else{
        likeBtn.classList.remove("ri-heart-fill");
        likeBtn.classList.add("ri-heart-line");
        likeBtn.classList.remove("like-color");
        likeCount--;
    }

    likeCountElement.textContent=likeCount.toLocaleString()+"likes";


});