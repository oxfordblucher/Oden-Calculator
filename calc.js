document.addEventListener('DOMContentLoaded', () => {

    let displayed = document.querySelector('input[name="current"]');
    let current = "";
    let adjust = "";
    let operation = null;

    document.querySelector('button.clear').addEventListener('click', (e) => {
        e.preventDefault();
        displayed.value = "";
        current = "";
        adjust = "";
        operation = null;
    })

    document.querySelectorAll('button.num').forEach((numBtn) => {
        numBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`${numBtn.innerText}`);
            if (!operation) {
                current += numBtn.innerText;
                displayed.value = current;
            } else {
                if (adjust === "0") {
                    displayed.value = numBtn.innerText;
                } else {
                    adjust += numBtn.innerText;
                    displayed.value = adjust;
                }
            }
        })
    })

    document.querySelectorAll('button.operator').forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            operation = operatorBtn.id;
            console.log(operation);
        })
    })

    document.querySelector('button.solve').addEventListener('click', (e) => {
        e.preventDefault();
        let newNum = 0;
        switch (operation) {
            case "add":
                newNum = parseFloat(current) + parseFloat(adjust);
                break;
            case "subtract":
                newNum = parseFloat(current) - parseFloat(adjust);
                break;
            case "multiply":
                newNum = parseFloat(current) * parseFloat(adjust);
                break;
            case "divide":
                newNum = parseFloat(current) / parseFloat(adjust);
                break;
            default:
                newNum = current;
        }
        displayed.value = newNum.toString();
        current = newNum.toString();
        adjust = "";
        operation = null;
    })

})