<template>
    <section class="todoapp">
        <TodoAppHeader @submit="createTodo" />
        <TodoAppMain v-model:todos="todos" />
        <TodoAppFooter />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoAppHeader from './TodoApp/Header.vue';
import TodoAppMain from './TodoApp/Main.vue';
import TodoAppFooter from './TodoApp/Footer.vue';
import * as TodoApp from '../TodoApp';

export default defineComponent({
    components: { TodoAppHeader, TodoAppMain, TodoAppFooter },

    setup() {
        return {
            todos: TodoApp.todos,
            createTodo: TodoApp.createTodo,
        };
    },
})
</script>