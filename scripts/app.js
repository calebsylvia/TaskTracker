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


// Couldnt get my local storage to work at all so i spent most of the class trying to figure it out leaving me with no time for the card creations


