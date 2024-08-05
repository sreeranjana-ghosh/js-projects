let output = document.getElementById("outputScreen");

const display = (num) => {
    output.value += num
}

const calculate = () => {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid");
    }
}

const Clear = () => { output.value = "" }
const del = () => { output.value = output.value.slice(0, -1) }