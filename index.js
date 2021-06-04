const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer=document.getElementById('emojiContainer')
const button=document.getElementById('push-btn')
let emojis=''

for(let count=0;count<myEmojis.length;count++){
  emojis+=`
  <span>${myEmojis[count]}</span>
  `
}
emojiContainer.innerHTML=emojis


button.addEventListener('click',function(){
    console.log
})



