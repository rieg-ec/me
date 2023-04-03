<script setup>
const hourBlocks = [
  '8:30 - 10:00',
  '10:00 - 11:30',
  '11:30 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:30',
  '15:30 - 17:00',
  '17:00 - 18:00',
];

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
];

const occupiedBlocks = {
  Lunes: {
    '10:00 - 11:30': { probability: 1, title: 'Clases' },
    '11:30 - 13:00': { probability: 2, title: 'Clases' },
  },
  Martes: {
    '8:30 - 10:00': { probability: 0, title: 'Clases' },
  },
  Miércoles: {
    '10:00 - 11:30': { probability: 1, title: 'Clases' },
    '11:30 - 13:00': { probability: 2, title: 'Clases' },
    '14:00 - 15:30': { probability: 0, title: 'Laboratorio' },
    '15:30 - 17:00': { probability: 0, title: 'Laboratorio' },
  },
  Jueves: {
    '8:30 - 10:00': { probability: 0, title: 'Clases' },
  },
  Viernes: {
    '10:00 - 11:30': { probability: 0, title: 'Clases' },
    '11:30 - 13:00': { probability: 2, title: 'Clases' },
    '14:00 - 15:30': { probability: 0, title: 'Clases' },
    '15:30 - 17:00': { probability: 0, title: 'Clases' },
    '17:00 - 18:30': { probability: 0, title: 'Clases' },
  },
};

function getSlotTitle(day, block) {
  return (occupiedBlocks[day][block] && occupiedBlocks[day][block].title) || 'Platanus';
}

function getSlotProbability(day, block) {
  if (!day || !block) return;

  if (!occupiedBlocks[day][block]) {
    return 3;
  }

  return occupiedBlocks[day][block].probability;
}

function getSlotColor({ day, block, probability }) {
  const options = ['red-500', 'orange-500', 'green-500', 'white'];

  if (day && block) {
    return options[getSlotProbability(day, block)];
  }

  return options[probability];
}

</script>

<template>
  <div class="flex flex-col items-center space-y-12">
    <span class="text-lg font-semibold">
      🎲 Probabilidad de asistir a cada clase
    </span>
    <div class="flex flex-row space-x-4">
      <div class="flex flex-row items-center space-x-2">
        <div
          :class="`bg-${getSlotColor({ probability: 0 })}`"
          class="w-4 h-4 border"
        />
        <span>Muy poco probable</span>
      </div>
      <div class="flex flex-row items-center space-x-2">
        <div
          :class="`bg-${getSlotColor({ probability: 1 })}`"
          class="w-4 h-4 border"
        />
        <span>Medianamente probable</span>
      </div>
      <div class="flex flex-row items-center space-x-2">
        <div
          :class="`bg-${getSlotColor({ probability: 2 })}`"
          class="w-4 h-4 border"
        />
        <span>Muy probable</span>
      </div>
    </div>
    <div class="grid grid-cols-6 bg-stone-700">
      <div class="z-30 flex flex-col flex-shrink-0">
        <span class="p-2 font-semibold text-center bg-stone-600">
          Horarios
        </span>
        <span
          v-for="(block, index) in hourBlocks"
          :key="index"
          class="p-4 font-semibold text-center w-36"
        >
          {{ block }}
        </span>
      </div>
      <div
        v-for="(day, dayId) in days"
        :key="`day-${dayId}`"
        class="flex flex-col"
      >
        <span class="w-full p-2 font-semibold text-center capitalize bg-stone-600">
          {{ day }}
        </span>
        <div
          v-for="(block, blockId) in hourBlocks"
          :key="`block-${blockId}`"
          class="flex flex-row items-center p-4 ml-6 space-x-2 text-left"
        >
          <div
            class="flex-shrink-0 w-4 h-4"
            :class="[
              `bg-${getSlotColor({ day, block })}`,
              { 'invisible': block === '13:00 - 14:00' }
            ]"
          />
          <span
            class="hover:text-lg"
            :class="`text-${getSlotColor({ day, block })}`"
          >
            {{ block === '13:00 - 14:00' ? '' : getSlotTitle(day, block) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
