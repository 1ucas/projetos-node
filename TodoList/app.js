/* Aula 2 */

const yargs = require('yargs');
const task = require('./taskUtil');

yargs.version("1.0.1");

yargs.command(
    {
        command: "add",
        describe: "add a new task",
        builder: {
            name: {
                describe: "task name",
                demandOption: true,
                type: 'string'
            },
            description: {
                describe: 'task description',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            task.addTask(argv.name, argv.description);
        }
    }
).command(
    {
        command: "remove",
        describe: "remove a new task",
        builder: {
            name: {
                describe: "task name",
                demandOption: true,
                type: 'string'
            },
            description: {
                describe: 'task description',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            task.removeTask(argv.name);
        }
    }
).command(
    {
        command: "list",
        describe: "list the tasks",
        builder: {},
        handler: (argv) => {
            console.log(task.loadTasks());
        }
    }
);

yargs.parse();