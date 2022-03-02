let count =0;
// console.log(count)

function increment(){
    count +=1 
    setCount(count)
}
function setCount (count){
    document.getElementById('count').innerText=count
}
function save(){
    var pre= count
    count =0
    setCount(count)
    document.getElementById('completeBatch').innerText +=pre+ "-";
}

setCount(count)