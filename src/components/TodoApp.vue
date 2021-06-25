<template>
    <section class="todoapp">
        <TodoAppHeader />
        <TodoAppMain />
        <TodoAppFooter />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoAppHeader from './TodoApp/Header.vue';
import TodoAppMain from './TodoApp/Main.vue';
import TodoAppFooter from './TodoApp/Footer.vue';

export default defineComponent({
    components: { TodoAppHeader, TodoAppMain, TodoAppFooter },
})
</script>