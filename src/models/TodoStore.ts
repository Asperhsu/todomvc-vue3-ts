import { reactive } from 'vue';
import Todo from '@/models/Todo';

class TodoStore {
    todos: Array<Todo>;

    constructor() {
        this.todos = reactive([]);
    }

    all(): Array<Todo> {
        return this.todos;
    }

    create(title: string): Todo | false {
        if (! title.trim().length) return false;

        const todo: Todo = new Todo(title.trim());
        this.todos.push(todo);
        return todo;
    }

    remove(todo: Todo): void {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    clearCompleted(): void {
        const activeTodos = this.todos.filter(todo => ! todo.completed);
        this.todos.length = 0;
        this.todos.push(...activeTodos);
    }
}

export default new TodoStore;