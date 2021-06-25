<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" @change="toggleAll($event)">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <Item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
        </ul>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Item from '@/components/Item.vue';
import Todo from '@/models/Todo';
import TodoStore from '@/models/TodoStore';
import bus from '@/bus';

export default defineComponent({
    components: { Item },

    setup() {
        const todos = TodoStore.all();
        const toggleAll = (e: Event) => {
            const isChecked = (e.target as HTMLInputElement).checked;
            todos.map(todo => todo.toggleComplete(isChecked));
        };

        const filterType = ref('all');
        bus.on('filter', (type) => filterType.value = type as string);
        const filteredTodos = computed((): Array<Todo> => {
            switch (filterType.value) {
                case 'all': return todos;
                case 'active': return todos.filter(todo => ! todo.completed);
                case 'completed': return todos.filter(todo => todo.completed);
            }
            return [];
        });

        return {
            filteredTodos,
            toggleAll,
        };
    },
})
</script>