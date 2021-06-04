const myEmojis = ['👨‍💻','⛷','🍲']
const emojiContainer=document.getElementById('emojiContainer')
const button=document.getElementById('push-btn')
const emojiInput=document.getElementById('emoji-input')
let emojis=''


function getAllEmojis(){
    for(let count=0;count<myEmojis.length;count++){
        emojis+=`
        <span>${myEmojis[count]}</span>
        `
      }
}

emojiContainer.innerHTML=emojis


button.addEventListener('click',function(){
    if(emojiInput){
     myEmojis.push(emojiInput.value)
    emojiInput.value=''
    getAllEmojis()
    console.log('dog')
      }
   

})



