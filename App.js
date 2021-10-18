let score = prompt("คะแนนของตุณ : ")
if(score >= 80){
    document.getElementById("result").innerHTML = "คุณได้เกรดA"
}
else if(score >= 70){
    document.getElementById("result").innerHTML = "คุณได้เกรดB"
}
else if(score >= 60){
    document.getElementById("result").innerHTML = "คุณได้เกรดC"
}
else if(score >= 50){
    document.getElementById("result").innerHTML = "คุณได้เกรดD"
}
else{
    document.getElementById("result").innerHTML = "คุณได้เกรดE"
}