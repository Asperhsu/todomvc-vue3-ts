<template>
    <!-- These are here just to show the structure of the list items -->
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li :class="{completed: todo.completed, editing}">
        <div class="view">
            <input class="toggle" type="checkbox" :checked="todo.completed" @click="toggleCompleted($event)">
            <label @dblclick="enableEdit">{{ todo.title }}</label>
            <button class="destroy" @click="destroy"></button>
        </div>
        <input class="edit" :value="todo.title" @keyup.enter="finishEdit($event)" @keyup.esc="abortEdit">
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Todo } from '../../TodoApp';

export default defineComponent({
    props: {
        todo: Object as PropType<Todo>,
    },

    emits: ['edit', 'toggleComplete', 'destroy'],

    setup(props, { emit }) {
        const editing = ref(false);

        const enableEdit = () => {
            editing.value = true;
        };
        const finishEdit = (e: Event) => {
            const title = (e.target as HTMLInputElement).value;
            emit('edit', title);
        };
        const abortEdit = () => {
            editing.value = false;
        };

        const toggleCompleted = (e: Event) => {
            const completed = (props.todo as Todo).completed
            emit('toggleComplete', !completed);
            e.preventDefault();
        };

        const destroy = () => {
            emit('destroy');
        };

        return {
            editing,
            enableEdit,
            finishEdit,
            abortEdit,
            toggleCompleted,
            destroy,
        };
    },
})
</script>