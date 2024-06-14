function convertToBinary() {
    const input = document.getElementById("decimalInput").value
    const result = document.getElementById("binaryResult")

    let binary = "";
    let i = input;

    while (i > 0) {
        let moduloIndex = i % 2;
        binary = moduloIndex + binary;
        i = Math.floor(i / 2);
    }

    if (binary === "") {
        binary = "0";
    }
    result.innerText = binary
}