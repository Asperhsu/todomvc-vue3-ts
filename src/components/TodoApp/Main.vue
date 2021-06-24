<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <Item v-for="todo in todos" :key="todo.id" :todo="todo" />
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Item from './Item.vue';
import { Todo } from '../../TodoApp';

export default defineComponent({
    components: { Item },

    props: {
        todos: {
            type: Array as PropType<Array<Todo>>,
        },
    },

    setup(props) {
        return {
            // todos: toRef(props, 'todos'),
        };
    },
})
</script>