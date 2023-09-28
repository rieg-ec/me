<template>
  <div class="flex flex-col justify-center w-full max-w-2xl px-4 space-y-12 sm:flex-row sm:space-x-12 sm:space-y-0">
    <div class="flex flex-col items-center space-y-6">
      <a
        href="https://github.com/rieg-ec"
        target="_blank"
        class="w-48 h-48 overflow-hidden transform rounded-full hover:scale-105"
      >
        <img
          src="https://avatars.githubusercontent.com/u/58893812?v=4"
          alt="Github profile avatar"
        >
      </a>
      <div
        class="flex flex-row space-x-3"
        id="social-media-row"
      >
        <a
          href="https://github.com/rieg-ec"
          target="_blank"
        >
          <img
            class="object-cover w-full h-full"
            src="/public/images/icons/github.svg"
          >
        </a>
        <a
          href="https://www.linkedin.com/in/ram%C3%B3n-echeverr%C3%ADa-258a14199/"
          target="_blank"
        >
          <img
            class="object-cover w-full h-full text-red-500 fill-current"
            src="/public/images/icons/linkedin.svg"
          >
        </a>
        <a
          href="https://twitter.com/rieg3c"
          target="_blank"
        >
          <img
            class="object-cover w-full h-full"
            src="/public/images/icons/twitter.svg"
          >
        </a>
        <a
          href="https://codeforces.com/profile/rieg-ec"
          target="_blank"
        >
          <img
            class="w-full h-full"
            src="/public/images/icons/codeforces.svg"
          >
        </a>
      </div>
    </div>
    <div class="flex flex-col space-y-8">
      <h1 class="text-3xl font-semibold">
        Hello!, my name is Ramón Echeverría.
      </h1>
      <span class="text-2xl">Here are some links that might be useful:</span>
      <ul class="flex flex-col space-y-2 list-disc list-inside">
        <li>
          <a
            href="https://num.cl/rieg"
            target="_blank"
          >
            Bank details
          </a>
        </li>
        <li>
          <a
            href="https://buda.com/registro?rf=C5OBY8PT5"
            target="_blank"
          >
            Buda referral
          </a>:
          <span>the largest cryptocurrency exchange in LATAM.</span>
        </li>
        <li>
          <a
            href="/rieg.keys"
            target="_blank"
          >
            My computer's public key
          </a>
        </li>
        <li>
          You can send me an email at
          <a
            href="mailto:rieg.10199@gmail.com"
            target="_blank"
          >
            rieg.10199@gmail.com
          </a>
        </li>
        <li>
          <router-link to="/blog-suggestions">
            The best blogs I've read
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  @apply flex flex-row space-x-3;
}

a {
  @apply text-blue-400 underline;
}

#social-media-row > a {
  @apply w-8 h-8 cursor-pointer transform hover:scale-125;
}
</style>
