<template>
  <div :class="{ dark: false }" class="bg-gray-900 min-h-screen text-white">
    <nav
      class="sm:px-4 py-2.5 bg-gray-800 text-white fixed h-12 w-full shadow shadow-gray-800"
    >
      <div
        class="container min-w-full px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <a href="#" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Games
          </span>
        </a>
      </div>
    </nav>

    <div class="h-12"></div>

    <div class="container min-w-full sm:px-4 mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      isMounted: false
    }
  },
  mountd() {
    this.isMounted = true
  },
  computed: {
    dark() {
      if (this.isMounted) {
        return localStorage.theme === 'dark'
      }
      return false
    },
  },
}
</script> -->
