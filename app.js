const taskNode = document.getElementById('js-task')
const inputNode = document.getElementById('js-input')
const btnNode = document.getElementById('js-btn')




let toDos = []

function addTodo (text) {
    const toDo = {
        text,
        done: false,
        id: `${Math.random()}`
    }

    toDos.push(toDo)
}

const deleteTodo = (id) => {
    toDos.forEach(toDo => {
        if (toDo.id === id) {
            toDo.done = true
        }
    })
}

function render() {
    console.log(toDos)
    let html = ''

    toDos.forEach(toDo => {
        if (toDo.done) {
            return
        }

        html += `
            <h3>
            ${toDo.text}
            <button data-id='${toDo.id}'>X</button>
            </h3>
        `
    })

    taskNode.innerHTML = html
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value

    addTodo(text)

    render()
})

taskNode.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON') {
        return
    }

    const id = event.target.dataset.id

    deleteTodo(id)

    render()
})

render()