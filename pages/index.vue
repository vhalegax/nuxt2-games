<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <template v-if="$fetchState.pending">
      <CardSkeleton v-for="index in 25" :key="index" />
    </template>
    <template v-else>
      <CardGame v-for="game in games" :key="game.id" :game="game" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  fetchOnServer: false,

  data() {
    return {
      games: [],
    }
  },

  async fetch() {
    try {
      const res = await this.$axios({
        url: `api1/games?platform=pc`,
        method: 'get',
      })

      if (res.status === 200) {
        this.games = res.data
      }
    } catch (e) {}
  },

  head() {
    return {
      title: 'Games',
    }
  },
}
</script>
