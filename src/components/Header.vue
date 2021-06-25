<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo"
            placeholder="What needs to be done?"
            autofocus
            v-model="todo"
            @keyup.enter="submit">
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { create as createTodo } from '@/models/Todos';

export default defineComponent({
    setup() {
        const todo = ref('');
        const submit = function () {
            createTodo(todo.value);
            todo.value = '';
        }

        return {
            todo,
            submit,
        };
    },
})
</script>