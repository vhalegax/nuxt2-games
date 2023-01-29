<template>
  <div class="font-sans p-4 w-full rounded-lg text-white shadow shadow-purple-600">
    <div class="font-sans">
      <a href="#">
        <img
          class="h-full w-full rounded-lg object-cover hover:shadow-lg hover:shadow-purple-600"
          :src="game.thumbnail"
          alt="image"
          loading="lazy"
        />
      </a>

      <div class="py-2">
        <!-- Title -->

        <div class="mb-1">
          <a href="#">
            <h3
              class="text-xl font-medium tracking-tight text-white hover:text-purple-600"
            >
              {{ game.title }}
            </h3>
          </a>
        </div>

        <div
          class="text-sm text-gray-400 tracking-tight flex justify-between mb-3"
        >
          <span class="w-1/2 md:w-2/3">{{ game.publisher }}</span>
          <span>{{ releaseDate }}</span>
        </div>

        <!-- Desc -->
        <p class="text-sm text-left text-gray-300 tracking-tight">
          {{ desc }}
        </p>

        <div class="mt-3 flex items-center gap-1">
          <div
            v-for="(chip, index) in chips"
            :key="index"
            class="rounded-full px-2 py-1 text-center text-xs font-medium text-white bg-purple-700"
          >
            {{ chip }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'CardGame',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },

  computed: {
    desc() {
      const desc = this.game.short_description
      return desc.length > 100 ? `${desc.substr(0, 97)}...` : desc
    },
    releaseDate() {
      return dayjs(this.game.release_date).format('MMM, DD YYYY')
    },
    chips() {
      const chips = []

      chips.push(this.game.genre)
      chips.push(...this.game.platform.split(','))

      return chips
    },
  },
}
</script>
