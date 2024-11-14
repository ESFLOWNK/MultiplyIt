
function setNumbers() {
    const m1 = document.getElementById("m1");
    const m2 = document.getElementById("m2");
    
    m1.value = Math.floor(Math.random() * 11);
    m2.value = Math.floor(Math.random() * 11);

    document.getElementById("result").value = 0;
}

function check(){
    const m1 = document.getElementById("m1");
    const m2 = document.getElementById("m2");

    const res = document.getElementById("result");
    
    if (res.value == m1.value * m2.value){
        alert("Felicidades la has atinado!");
    }
    else{
        alert("Has fallado :(");
    }

    setNumbers();
}