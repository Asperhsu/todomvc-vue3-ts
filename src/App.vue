<template>
    <section class="todoapp">
        <Header />
        <Main />
        <Footer />
    </section>

    <footer class="info">
        <p>Double-click to edit a todo</p>
        <!-- Remove the below line ↓ -->
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <!-- Change this out with your name and url ↓ -->
        <p>Created by <a href="https://asper.one/">Asper</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
</template>

<script lang="ts">
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    name: 'App',
    components: { Header, Main, Footer },
});
</script>