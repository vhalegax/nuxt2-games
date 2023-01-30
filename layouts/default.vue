<template>
  <div :class="{ dark: isDark }">
    <div class="bg-base-50 dark:bg-base-900 text-base-900 dark:text-base-50 min-h-screen">
      <TheNavbar />

      <div class="h-14"></div>

      <NuxtLink v-if="canSeeButtonAddGame" :to="'/games/create'">
        <BaseButton
          color="secondary"
          class="fixed bottom-6 right-8 z-[1001] hover:scale-110"
        >
          Add Game
        </BaseButton>
      </NuxtLink>

      <div class="container min-w-full p-4 mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    canSeeButtonAddGame() {
      return !this.$route.name.includes('create')
    },

    isDark() {
      return this.$store.state.webConfig.darkMode
    },
  },

  mounted() {
    if (!localStorage.theme) {
      localStorage.theme = 'dark'
    }

    const isDark = localStorage.theme === 'dark'
    this.$store.dispatch('setDarkMode', { value: isDark })
  },
}
</script>
