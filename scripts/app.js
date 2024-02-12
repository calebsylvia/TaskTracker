import { saveLocal, getLocal } from "./localStorage.js";


let addNewTask = document.getElementById("addNewTask");
let name = document.getElementById("name");
let due = document.getElementById("due");
let priority = document.getElementById("priority");
let description = document.getElementById("description");
let status = document.getElementById("status");


let tasksArr = [];

addNewTask.addEventListener('click', () => {
    let task = {
        name: name.value,
        due: due.value,
        prio: priority.value,
        status: status.value,
        desc: description.value
    };
    tasksArr.push(task);
    console.log(task);
    console.log(tasksArr);
    saveLocal(task);
})

const displayTasks = () => {
    let tasks = getLocal();

    tasks.map(taskAtHand => {
        let 
    })
}



