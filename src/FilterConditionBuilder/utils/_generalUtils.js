export const GENERAL_UTILS = {
    clone: (item) => JSON.parse(JSON.stringify(item)),
    generateID: () => `f${(+new Date).toString(16)}`,
    findOperator: (condition, operators) => {
        let operator = '';
        for (let i = 0; i < operators.length; i++) {
            if (condition.indexOf(operators[i]) > -1) {
                operator = operators[i];
                break;
            }
        }
    
        return operator;
    }
}