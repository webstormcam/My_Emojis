const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer=document.getElementById('emojiContainer')
const button=document.getElementById('push-btn')
const unShiftBtn=document.getElementById('unshift-btn')
const emojiInput=document.getElementById('emoji-input')
const popBtn=document.getElementById('pop-Btn')
const shiftBtn=document.getElementById('shift-Btn')
const nameTop=document.getElementById('top-font')

getAllEmojis()


function getAllEmojis(){
    let emojis=''
    for(let count=0;count<myEmojis.length;count++){
        emojis+=`
        <span>${myEmojis[count]}</span>
        `
      }
      emojiContainer.innerHTML=emojis
}





popBtn.addEventListener('click',function(){
    myEmojis.pop(emojiInput.value)
    console.log(myEmojis)
    getAllEmojis()
    
      
   

})



shiftBtn.addEventListener('click',function(){
    myEmojis.shift(emojiInput.value)
    console.log(myEmojis)
    getAllEmojis()
    
      
   

})




button.addEventListener('click',function(){
    if(emojiInput.value===''){
        console.log('No emoji, no push for you :)')
    } else{
    myEmojis.push(emojiInput.value)
    emojiInput.value=''
    console.log(myEmojis)
    getAllEmojis()
    }
      
   

})


unShiftBtn.addEventListener('click',function(){
    if(emojiInput.value===''){
        console.log('No emoji, no push for you :)')
    } else{
    myEmojis.unshift(emojiInput.value)
    emojiInput.value=''
    console.log(myEmojis)
    getAllEmojis()
    }
      
   

})




