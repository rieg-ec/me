<script setup>
const hourBlocks = [
  '9:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
];

const days = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
];

const occupiedBlocks = {
  lunes: {
    '9:00 - 10:00': 'PUC',
    '10:00 - 11:00': 'PUC',
    '11:00 - 12:00': 'PUC',
    '12:00 - 13:00': 'PUC',
  },
  martes: {
    '14:00 - 15:00': 'PUC',
    '15:00 - 16:00': 'PUC',
    '16:00 - 17:00': 'PUC',
    '17:00 - 18:00': 'PUC',
  },
  miércoles: {
    '9:00 - 10:00': 'PUC',
    '10:00 - 11:00': 'PUC',
    '11:00 - 12:00': 'PUC',
    '12:00 - 13:00': 'PUC',
  },
  jueves: {},
  viernes: {
    '10:00 - 11:00': 'PUC',
    '11:00 - 12:00': 'PUC',
    '12:00 - 13:00': 'PUC',
  },
};

</script>

<template>
  <div class="grid grid-cols-6">
    <div class="z-30 flex flex-col flex-shrink-0 w-36">
      <span class="!bg-stone-600 font-semibold">
        Horarios
      </span>
      <span
        v-for="(block, index) in hourBlocks"
        :key="index"
        class="font-semibold"
      >
        {{ block }}
      </span>
    </div>
    <div
      v-for="(day, dayId) in days"
      :key="`day-${dayId}`"
      class="flex flex-col"
    >
      <span class="!bg-stone-600 font-semibold capitalize">
        {{ day }}
      </span>
      <span
        v-for="(block, blockId) in hourBlocks"
        :key="`block-${blockId}`"
        :class="{ '!bg-stone-900': block === '13:00 - 14:00' }"
        class="hover:text-lg"
      >
        {{ occupiedBlocks[day][block] || (block === '13:00 - 14:00' ? '' : 'Platanus') }}
      </span>
    </div>
  </div>
</template>

<style scoped>
span {
  @apply w-36 h-12 p-2 bg-stone-700 flex items-center justify-center;
}
</style>
