<template>
  <div>
    <div v-if="$fetchState.pending">Loading ...</div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 p-4 lg:px-0"
    >
      <CardGame v-for="game in games" :key="game.id" :game="game" />
    </div>
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
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
