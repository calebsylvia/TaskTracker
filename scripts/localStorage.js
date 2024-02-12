
const saveLocal = (task) => {
    
    let tasks = getLocal();

    if(!tasks.includes(task.name)){
        tasks.push(task);
    }
    

    localStorage.setItem("Tasks", JSON.stringify(tasks));
}


const getLocal = () => {
    let localData = localStorage.getItem("Tasks");

    if(localData == null){
        return [];
    }
        return JSON.parse(localData);
}

export { saveLocal, getLocal }