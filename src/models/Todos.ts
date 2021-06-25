import { reactive } from 'vue';
import Todo from '@/models/Todo';

export const todos: Todo[] = reactive([]);

export const create = function (title:string): Todo | false {
    if (! title.trim().length) return false;

    const todo: Todo = new Todo(title.trim());
    todos.push(todo);
    return todo;
};

export const remove = function (todo: Todo): void {
    const index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
}