export default class Todo {
    id: number;
    title: string;
    completed: boolean;

    constructor(title: string) {
        this.id = (new Date).getTime();
        this.title = title;
        this.completed = false;
    }

    edit(title: string): void {
        this.title = title;
    }

    toggleComplete(state?: boolean): void {
        if (typeof state === "undefined") {
            this.completed = !this.completed;
        } else {
            this.completed = state;
        }
    }
}