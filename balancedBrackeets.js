function isBalanced(s) {
    // Write your code here
    const bracketsType = {
        parenthesisOpen: '(',
        parenthesisClose: ')',
        bracketOpen: '{',
        bracketClose: '}',
        squareBracketOpen: '[',
        squareBracketClose: ']',
    }

    class BracketsBalancer {
        constructor() {
            this.brackets = [];
            this.lastBracket = '';
        }

        getExpectedClosingBracket(b) {
            switch (b || this.lastBracket) {
                case bracketsType.parenthesisOpen:
                    return bracketsType.parenthesisClose;
                case bracketsType.bracketOpen:
                    return bracketsType.bracketClose;
                case bracketsType.squareBracketOpen:
                    return bracketsType.squareBracketClose;
            }
        }

        pushBracket(b) {
            this.lastBracket = b;
            this.brackets.push(b);
        }

        removeStackedBracket() {
            const removedBracket = this.brackets.pop()
            this.lastBracket = this.brackets.length ? this.brackets.at(-1) : '';
            return removedBracket
        }

        isClosingBracket(b) {
            switch (b) {
                case bracketsType.parenthesisClose:
                    return true;
                case bracketsType.bracketClose:
                    return true;
                case bracketsType.squareBracketClose:
                    return true;
                default:
                    return false;
            }
        }

        isOpeningBracket(b) {
            switch (b) {
                case bracketsType.parenthesisOpen:
                    return true;
                case bracketsType.bracketOpen:
                    return true;
                case bracketsType.squareBracketOpen:
                    return true;
                default:
                    return false;
            }
        }

        isEmptyStack() {
            return this.brackets.length === 0;
        }
    }

    let result = "";
    let factory = new BracketsBalancer();
    for (const b of s) {
        if (factory.isOpeningBracket(b)) {
            factory.pushBracket(b);
        } else {
            if (b === factory.getExpectedClosingBracket()) {
                factory.removeStackedBracket();
            } else {
                result = "NO";
                break;
            }
        }
    }
    if (result !== "NO" && factory.isEmptyStack()) {
        result = "YES";
    }else {
        result = "NO";
    }
    return result;
}

module.exports = {
    isBalanced
}