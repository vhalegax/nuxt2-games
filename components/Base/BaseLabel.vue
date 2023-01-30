<template>
  <div>
    <div class="mb-1">
      <label :for="id" class="font-medium capitalize" :class="labelClass">
        {{ label }}
      </label>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    error: Boolean,
    id: {
      type: String,
      required: false,
      default: undefined,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
  },

  computed: {
    labelClass() {
      if (this.error) return 'text-error-500'
      return 'text-base-900 dark:text-base-50'
    },
  },
}
</script>
