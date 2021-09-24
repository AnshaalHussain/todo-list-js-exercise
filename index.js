// Arrays to keep track of each task's state
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function(task) {
      console.log(`${task.title} has${task.complete ? " ": " not "}been completed`);
    },

    markCompleted: function(task) {
      task.complete = true;
    }

  };

  return task
}





// DRIVER CODE BELOW

const task1 = newTask("clean cat litter", "Take out all the **** out of the litter box")
const task2 = newTask("Do Laundry", "🥲");
const tasks = [task1, task2];


task1.logTaskState();
task1.markCompleted();
task1.logTaskState();
