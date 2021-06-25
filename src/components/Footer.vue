<template>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ activeItems.length }}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li v-for="(label, type) in filterTypes" :key="type">
                <a :class="{selected: filterType === type}" @click="changeFilter(type)">{{ label }}</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TodoStore from '@/models/TodoStore';
import bus from '@/bus';

export default defineComponent({
    setup() {
        const activeItems = computed(() => {
            return TodoStore.all().filter(todo => ! todo.completed);
        });

        const filterTypes = {
            'all': 'All',
            'active': 'Active',
            'completed': 'Completed',
        };
        const filterType = ref('all');
        const changeFilter = (type: string) => {
            filterType.value = type;
            bus.emit('filter', filterType.value);
        };

        return {
            activeItems,
            filterTypes,
            filterType,
            changeFilter,
            clearCompleted: () => TodoStore.clearCompleted(),
        };
    },
})
</script>