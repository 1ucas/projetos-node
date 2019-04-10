const fs = require('fs');

const removeTask = (name) => {
    var tasks = loadTasks();
    tasks.forEach((item, index) => {
        if(item.name == name){
            tasks.splice(index, 1);
        }
    });
    fs.writeFileSync("repo.json", JSON.stringify(tasks));
};

const addTask = (name, description) => {

    var tasks = loadTasks();
    var sameTask = tasks.find((task) => task.name == name);
    if(sameTask == undefined)
    {
        var obj = {
        name: name,
        description: description
        };
        tasks.push(obj);
        fs.writeFileSync("repo.json", JSON.stringify(tasks));
    }
};

const loadTasks = () => {
    try
    {
        var fileContent = fs.readFileSync("repo.json");
        return JSON.parse(fileContent.toString());
    }
    catch(e) {
        return [];
    }
}

module.exports = {
    addTask,
    loadTasks,
    removeTask
}

