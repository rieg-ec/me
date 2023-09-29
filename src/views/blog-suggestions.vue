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
    name: 'Text is All You Need',
    url: 'https://studio.ribbonfarm.com/p/text-is-all-you-need',
  },
  {
    name: 'The Tail End',
    url: 'https://waitbutwhy.com/2015/12/the-tail-end.html',
  },
  {
    name: 'How to lose weight in 4 easy steps',
    url: 'https://medium.com/@AaronBleyaert/how-to-lose-weight-in-4-easy-steps-1f135f7e1dec',
  },
  {
    name: 'Why Procrastinators Procrastinate',
    url: 'https://waitbutwhy.com/2013/10/why-procrastinators-procrastinate.html',
  },
  {
    name: 'How to Beat Procrastination',
    url: 'https://waitbutwhy.com/2013/11/how-to-beat-procrastination.html',
  },
  {
    name: 'Considerations on cost disease',
    url: 'https://slatestarcodex.com/2017/02/09/considerations-on-cost-disease/',
  },
  {
    name: 'Is this a good book for me, now?',
    url: 'https://maryrosecook.com/blog/post/is-this-a-good-book-for-me-now',
  },
  {
    name: "Don't be clever",
    url: 'https://stitcher.io/blog/dont-be-clever',
  },
  {
    name: "I'm OK; The Bull Is Dead",
    url: 'https://www.computerworld.com/article/2565077/i-m-ok--the-bull-is-dead.html',
  },
  {
    name: 'WTF Happened in 1971?',
    url: 'https://wtfhappenedin1971.com/',
  },
  {
    name: "There's no speed limit",
    url: 'https://sive.rs/kimo',
  },
];

</script>

<template>
  <div class="max-w-2xl">
    <p>
      Below is a list of the best blogs i've read to date. Some of them are related to computers and technology,
      but many of them are not. I hope you enjoy them as much as I did :)
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
