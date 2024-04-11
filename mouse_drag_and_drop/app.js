const answer = "box1box7box13";
let data = "";
let resultData = "";

const boxElements = document.querySelectorAll(".box");

boxElements.forEach(draggable => {
    draggable.addEventListener('dragenter', (event) => {
        console.log("dragstart");
        console.log("진입: " + event.target.innerHTML);
        event.target.classList.add(event.target.innerHTML);
    });
});


boxElements.forEach(draggable => {
    draggable.addEventListener('dragleave', (event) => {

        console.log("dragleave");
        console.log("빠져나감: " + event.target.innerHTML);
        data += event.target.innerHTML;
        
        console.log("data: " + data);
        resultData = data;

        if (answer === resultData) {
            alert("정답");
        } 
    });
});