let counter = 0
const input = document.querySelector('input[type="text"]')

userInput.addEventListener('submit', () => {
  addTask()
})


let addTask = () => {
  if (input.value) {
  counter++
  let newValue = input.value
  list.innerHTML += `<div class="task-container" id="${counter}">
  <label> 
    <input type="checkbox" class="check">
    ${newValue}
  </label>
  <img src="./images/delete.png" class="closeBtn"></div>`

input.value = ""
updateStats()
  } else {
    alert ('Write a task...')
  }
}

let updateStats = () => {
  let element = list.querySelectorAll('div')
  let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
  stats.innerHTML = `<p>Pending: ${element.length} Completed: ${checkbox.length}</p>`
}
list.addEventListener("click", (event)=> {
  if (event.srcElement.nodeName == "INPUT") {
      updateStats()
  } else if (event.srcElement.nodeName == "IMG") {
       deleteTask(event.srcElement.parentNode.id)
  }
})

function deleteTask(id) {
  let taskToDelete = document.getElementById(id)
  list.removeChild(taskToDelete)
  updateStats()
}
