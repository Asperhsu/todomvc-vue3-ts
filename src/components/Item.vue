<template>
    <!-- These are here just to show the structure of the list items -->
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li :class="{completed: todo.completed, editing}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="completed">
            <label @dblclick="enableEdit">{{ todo.title }}</label>
            <button class="destroy" @click="destroy"></button>
        </div>
        <input class="edit" :value="todo.title" @keyup.enter="finishEdit($event)" @keyup.esc="abortEdit">
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import Todo from '@/models/Todo';
import TodoStore from '@/models/TodoStore';

export default defineComponent({
    props: {
        todo: Object as PropType<Todo>,
    },

    setup(props) {
        const todo = props.todo as Todo;
        const editing = ref(false);
        const completed = computed({
            get: () => todo.completed,
            set: (state) => {
                todo.toggleComplete(state);
            }
        });

        const enableEdit = () => {
            if (! todo.completed) {
                editing.value = true;
            }
        };
        const finishEdit = (e: Event) => {
            const title = (e.target as HTMLInputElement).value;
            todo.edit(title);
            editing.value = false;
        };
        const abortEdit = () => {
            editing.value = false;
        };

        const destroy = () => {
            TodoStore.remove(todo);
        };

        return {
            editing,
            completed,
            enableEdit,
            finishEdit,
            abortEdit,
            destroy,
        };
    },
})
</script>