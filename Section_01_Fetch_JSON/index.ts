/**
 * In order to run this script
 * Open cmd
 *
 * Step: 1 - npm install tsc ts-node --save-dev
 * Step: 2 - npm install axios
 * Step: 3 - ./node_modules/.bin/ts-node index.ts
 */
import axios from "axios";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios({ method: "GET", url }).then((response) => {
  const todo = response.data as ToDo;
  const { id, title, completed } = todo;

  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The ToDo with id: ${id}
    Has a title of: ${title}
    Is it completed: ${completed}
    `);
};
