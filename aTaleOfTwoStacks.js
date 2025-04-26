
function processData(input) {
    //Enter your code here
    class FiFoStack {
        data
        constructor() {
            this.data = []
        }
        enqueue(item) {
            this.data.push(item)
        }
        dequeue() {
            this.data.shift()
        }
        peak() {
            console.log(this.data[0])
        }

    }
    class LiFoStack {
        data
        constructor() {
            this.data = []
        }
        enqueue(item) {
            this.data.unshift(item)
        }
        dequeue() {
            this.data.pop()
        }
        peak() {
            console.log(this.data[0])
        }
    }
    const fifo = new FiFoStack()
    const lifo = new LiFoStack()
    const inputData = input.split('\n')
    inputData.shift()
    inputData.forEach(element => {
        const [operation, data] = element.split(' ')
        if (operation === '1') {
            fifo.enqueue(data)
            lifo.enqueue(data)
        } else if (operation === '2') {
            fifo.dequeue()
            lifo.dequeue()
        } else if (operation === '3') {
            fifo.peak()
        }
    });
}
processData(`10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`)