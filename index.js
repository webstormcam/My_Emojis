const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer=document.getElementById('emojiContainer')
let emojis=''

for(let count=0;count<myEmojis.length;count++){
  emojis+=`
  <span>${myEmojis[count]}</span>
  `
}

emojiContainer.innerHTML=emojis