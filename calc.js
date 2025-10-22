document.addEventListener('DOMContentLoaded', () => {

    let displayed = document.querySelector('input[name="current"]');
    let current = "";
    let adjust = "";
    let operation = null;
    let decimal = false;

    document.querySelector('button.clear').addEventListener('click', (e) => {
        e.preventDefault();
        if (displayed.value !== "" || displayed.value !== "0") {
            if (adjust !== "" || adjust !== "0") {
                adjust = "";
            } else {
                current = "";
                operation = null;
            }
            displayed.value = "";
        } else {
            current = "";
            adjust = "";
            operation = null;
        }
        decimal = false;
    })

    document.querySelector('button.decimal').addEventListener('click', (e) => {
        e.preventDefault();
        if (!decimal) {
            if (!operation) {
                current = current + ".";
                displayed.value = current;
            } else {
                adjust = adjust + ".";
                displayed.value = adjust;
            }
            decimal = true;
        }
    })

    document.querySelectorAll('button.num').forEach((numBtn) => {
        numBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!operation) {
                current += numBtn.innerText;
                displayed.value = current;
            } else {
                if (adjust === "0" || adjust === "") {
                    adjust = numBtn.innerText;
                } else {
                    adjust += numBtn.innerText;
                }
                displayed.value = adjust;
            }
        })
    })

    document.querySelectorAll('button.operator').forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            operation = operatorBtn.id;
            decimal = false;
        })
    })

    document.querySelector('button.back').addEventListener('click', (e) => {
        e.preventDefault();
        if (operation !== null) {
            if (adjust !== "0" || adjust !== "") {
                adjust = adjust.slice(0, -1);
            }
            displayed.value = adjust;
        } else {
            current = current.slice(0, -1);
            displayed.value = current;
        }
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