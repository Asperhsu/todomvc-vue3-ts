import { reactive } from 'vue'

export interface Todo {
    id: number,
    title: string;
    completed: boolean,
}

export const todos: Todo[] = reactive([]);

export const createTodo = function (title:string): Todo {
    const todo: Todo = {
        id: (new Date).getTime(),
        title: title,
        completed: false,
    };
    todos.push(todo);
    return todo;
};