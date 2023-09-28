<script setup>
const blogs = [
  {
    name: 'Systems design explains the world: volume 1',
    url: 'https://apenwarr.ca/log/20201227',
  },
  {
    name: 'Systems design 2: What we hope we know',
    url: 'https://apenwarr.ca/log/20230415',
  },
  {
    name: 'Taming the Mammoth: Why You Should Stop Caring What Other People Think',
    url: 'https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html',
  },
  {
    name: 'The Tail End',
    url: 'https://waitbutwhy.com/2015/12/the-tail-end.html',
  },
  {
    name: 'How to lose weight in 4 easy steps',
    url: 'https://medium.com/@AaronBleyaert/how-to-lose-weight-in-4-easy-steps-1f135f7e1dec',
  },
];

</script>

<template>
  <div class="max-w-2xl">
    <p>
      Below is a list of the best blogs i've read to date. Some of them are related to computers and technology,
      but many of them are not. I hope you enjoy them as much as I did.
    </p>
    <ul class="flex flex-col gap-y-2 mt-12">
      <li
        v-for="blog in blogs"
        :key="blog.name"
        class="list-disc list-inside "
      >
        <a
          :href="blog.url"
          target="_blank"
          class="text-blue-500 hover:underline"
        >
          {{ blog.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
