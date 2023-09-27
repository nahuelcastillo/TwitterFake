url =  "https://my-json-server.typicode.com/alexist00/pruebajson/db"


async function fecthTwits(){

    let promise = await fetch(url);
    let data = await promise.json();


    return data
}

document.addEventListener('DOMContentLoaded', async (e) => {
let data = await fecthTwits();
console.log(data)



let divcoint = document.getElementById("conteiner");
var randomPERSON = 15
data.posts.forEach(element => {
    divcoint.innerHTML += `
    <div class="tweets">
      <div class="avatar" width = 30px><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${randomPERSON}.jpg" /></div>
      <div class="content">
        <div class="names">
          <p class="full-name">${element.name}</p>
          <p class="time"> 27mins  </p>
        </div>
      </div>
      <div class="tweet-content">
        <p>${element.text}</p>
      </div>
      <div class="tweet-icons">
        <i class="fa fa-comment" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
      </div>
    </div>

    `
    randomPERSON = randomPERSON + 1
    
})
});






