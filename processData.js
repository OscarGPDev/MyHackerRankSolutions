function processData(input) {
    const operation = { enqueue: 1, dequeue: 2, print: 3 };
    class Queue {
        constructor(data) {
            this.data = data || [];
            this.operations = [];
        }
        enqueue(x) {
            this.operations.push(operation.enqueue);
            this.data.push(x);
        }
        dequeue() {
            this.operations.push(operation.dequeue);
            return this.data.splice(0, 1)[0]
        }
        print() {
            this.operations.push(operation.print);
            console.log(this.data[0]);
        }
    };
    const [first, ...operations] = input.split('\n')
    const q = new Queue();
    operations.forEach(op => {
        const [todo, d] = op.split(' ');
        switch (+todo) {
            case operation.enqueue:
                q.enqueue(+d);
                break;
            case operation.dequeue:
                q.dequeue();
                break;
            case operation.print:
                q.print();
                break;
        }
    });

}
module.exports = {
    processData
}