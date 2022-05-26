/*
Implement a simple text editor. The editor initially contains an empty s string, Perform Q operations of the following
4 types:
    1) append(W):
        - Append W string to the end of s
    2) delete(k):
        - Delete the last k characters of
    3) print(k):
        - Print the k th character of s
    4) undo():
        - Undo the last (not previously undone) operation of type 1 or 2, reverting s to the state it was in prior to that operation.
* */
const textEditor = (input) => {
    const operation = {
        append: 1,
        delete: 2,
        print: 3,
        undo: 4
    }

    class TextEditor {
        constructor() {
            this.data = "";
            this.operations = [];
        }

        append(d) {
            this.operations.push({operation: operation.append, data: d});
            this.data += d;
        }

        delete(k) {
            this.operations.push({operation: operation.delete, data: this.data.substring(this.data.length - 1 - k)})
            this.data = this.data.substring(0, this.data.length - k);
        }

        print(k) {
            console.log(this.data[k - 1]);
        }

        undo() {
            const operationToUndo = this.operations.pop();
            if (operationToUndo.operation === operation.append) {
                this.data = this.data.substring(0, this.data.length - operationToUndo.data.length);
            } else if (operationToUndo.operation === operation.delete) {
                this.data += operationToUndo.data;
            }
        }

        evaluate(op, data) {
            switch (op) {
                case operation.append:
                    this.append(data)
                    break;
                case operation.delete:
                    this.delete(+data);
                    break;
                case operation.print:
                    this.print(+data);
                    break;
                case operation.undo:
                    this.undo();
                    break;
                default:
                    throw "Unknown operation"
            }
        }
    }

    const [first, ...operations] = input.split('\n')
    const textEditor = new TextEditor();
    operations.forEach((instructionLine, index) => {
        const [op, data] = instructionLine.split(' ');
        textEditor.evaluate(+op, data);
    });
};
const testCases = [`8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`,
`50
1 zsfncpxdzl
3 4
3 6
2 1
3 7
3 2
4
2 4
2 6
4
4
1 l
1 hpe
3 6
2 7
4
3 6
4
3 6
1 zipsqagri
1 vuqxstnj
4
3 13
4
3 10
3 6
1 uzdpy
1 bupqp
1 kn
2 6
3 8
1 iiuvfbn
4
2 1
2 12
4
3 7
4
2 9
3 1
1 axbhx
1 wovbfyvt
3 11
3 7
3 2
4
1 tjmqp
4
2 6
3 4`];
const expectedOutputs = [`c
y
a`,
`n
p
x
s
p
p
p
i
l
p
d
x
z
b
x
s
n`];
textEditor(testCases[1])