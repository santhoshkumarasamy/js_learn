let count =0;
let batches=[]
// console.log(count)

function increment(){
    count = count +1 
    setCount(count)
}
function setCount (count){
    document.getElementById('count').innerText=count
}
function batchCompleted(){
    batches.push(count)
    count =0
    let batch = ''
    batches.map((item)=>{
        batch= batch + item+ " " 
    })
    setCount(count)
    document.getElementById('completeBatch').innerText=batch;
}

setCount(count)