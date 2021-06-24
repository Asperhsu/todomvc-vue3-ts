<template>
    <TodoApp />
    <Footer />
</template>

<script lang="ts">
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import { defineComponent } from 'vue';
import TodoApp from './components/TodoApp.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
    name: 'App',
    components: { TodoApp, Footer },
});
</script>