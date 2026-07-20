const logs = [
    "Recovered evidence located...",
    "Scanning archive...",
    "Metadata verified.",
    "One file successfully restored.",
    "",
    "You looked where everyone else looked.",
    "Now look where browsers don't."
];

const container = document.getElementById("logs");

let i = 0;

function nextLog(){

    if(i >= logs.length){
        document.getElementById("status").innerHTML = "Recovery Complete<span class='cursor'>_</span>";
        return;
    }

    const div = document.createElement("div");
    div.className = "log";
    div.textContent = logs[i];

    container.appendChild(div);

    i++;

    setTimeout(nextLog,1200);

}

setTimeout(nextLog,1200);