<template>
  <div :class="{ dark: true }" class="bg-gray-900 min-h-screen text-white">
    <TheNavbar />

    <div class="h-12"></div>

    <NuxtLink v-if="canSeeButtonAddGame" :to="'/games/create'">
      <BaseButton color="secondary" class="fixed bottom-6 right-8 z-[1001] hover:scale-110">
        Add Game
      </BaseButton>
    </NuxtLink>

    <div class="container min-w-full p-4 mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    canSeeButtonAddGame() {
      return !this.$route.name.includes('create')
    }
  }
}
</script>
