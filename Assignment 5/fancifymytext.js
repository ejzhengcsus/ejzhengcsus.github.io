function biggerButton() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function styleChange() {
    alert("The style has been changed.");

    let textBox = document.getElementById("textInput");
    let fancyChoice = document.getElementById("fancy");

    if (fancyChoice.checked) {
        textBox.style.fontFamily = "Arial, sans-serif";
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";
    } else {
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
}

function mooButton() {
    let textBox = document.getElementById("textInput");
    let text = textBox.value.toUpperCase();
    let sentences = text.split(".");

    for (i = 0; i < sentences.length - 1; i++) {
        let sentence = sentences[i].trim();

        if (sentence.length > 0) {
            let words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textBox.value = sentences.join(".");
}