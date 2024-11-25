
function keypressed(ev) {
    if (ev.key === "Enter"){
        check();
    }
}

function setNumbers() {
    const m1 = document.getElementById("m1");
    const m2 = document.getElementById("m2");
    
    m1.value = Math.floor(Math.random() * 11);
    m2.value = Math.floor(Math.random() * 11);

    if (document.getElementById("difConfig").innerText == "1"){
        m1.value = Math.floor(Math.random() * 21);
        m2.value = Math.floor(Math.random() * 21);
    }

    document.getElementById("result").value = null;
    document.getElementById("result").focus();
}

function check(){
    const m1 = document.getElementById("m1");
    const m2 = document.getElementById("m2");

    const res = document.getElementById("result");
    
    if (res.value == m1.value * m2.value){
        document.getElementById("strike").innerText = String(Number(document.getElementById("strike").innerText)+1);
        alert("Felicidades la has atinado!\nRacha de "+String(document.getElementById("strike").innerText)+" aserciones");
    }
    else{
        alert("Has fallado :(\nLa respuesta era: "+String(m1.value * m2.value));
    }

    setNumbers();
}

// Doesnt work
function toggleDif(){
    const dif = document.getElementById("difConfig");
    if (dif.innerText == "0" || dif.innerText == undefined) {
        dif.innerText = "1";
        document.getElementById("difBut").className = "difbut1";
        document.getElementById("difBut").innerText = "Modo facil";
    }
    else if (dif.innerText == "1") {
        dif.innerText = "0";
        document.getElementById("difBut").className = "difbut0";
        document.getElementById("difBut").innerText = "Modo dificil";
    }
}