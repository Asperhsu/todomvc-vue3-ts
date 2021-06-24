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

export default defineComponent({
    emits: ['submit'],

    setup(props, {emit}) {
        const todo = ref('');
        const submit = function () {
            emit('submit', todo.value);
            todo.value = '';
        }

        return {
            todo,
            submit,
        };
    },
})
</script>