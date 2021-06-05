const myEmojis = []
const emojiContainer=document.getElementById('emojiContainer')
const button=document.getElementById('push-btn')
const unShiftBtn=document.getElementById('unshift-btn')
const emojiInput=document.getElementById('emoji-input')



function getAllEmojis(){
    let emojis=''
    for(let count=0;count<myEmojis.length;count++){
        emojis+=`
        <span>${myEmojis[count]}</span>
        `
      }
      emojiContainer.innerHTML=emojis
}




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




