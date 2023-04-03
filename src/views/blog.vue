<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import markdownIt from 'markdown-it';

const route = useRoute();

const blog = ref(null);
const blogMeta = ref(null);
const markdown = ref(null);
onMounted(() => {
  axios.get('/blogs/index.json')
    .then((res) => {
      blogMeta.value = res.data.blogs.find((_blog) => _blog.id == route.params.id);
    });

  axios.get(`/blogs/${route.params.id}.md`)
    .then((res) => {
      blog.value = res.data;
      markdown.value = markdownIt().render(blog.value);
    });
});
</script>

<template>
  <div
    v-if="blogMeta && markdown"
    class="min-h-screen py-12"
  >
    <h1>
      {{ blogMeta.title }}
    </h1>
    <div class="w-full h-px my-4 bg-gray-500" />
    <div
      class="mt-12 prose prose-lg"
      v-html="markdown"
    />
  </div>
</template>
