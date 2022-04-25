export function evaluate({ currentOperand, previousOperand, operation}) {
    const previous = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(previous) || isNaN(current))
    return ""
    let calculation = ""
    switch (operation) {
        case "÷":
        calculation = previous / current
        break;
        case "x":
        calculation = previous * current
        break;
        case "-":
        calculation = previous - current
        break;
        case "+":
        calculation = previous + current
        break
    }
    return calculation.toString()
}