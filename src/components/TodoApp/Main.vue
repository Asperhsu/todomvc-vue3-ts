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
import { defineComponent } from 'vue'
import Item from './Item.vue';
import { todos } from '@/models/Todos';

export default defineComponent({
    components: { Item },

    setup(props) {
        return {
            todos,
        };
    },
})
</script>