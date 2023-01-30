<template>
  <button type="button" :class="classes" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    outlined: Boolean,
    disabled: Boolean,
    loading: Boolean,
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'accent', 'success', 'error'].includes(
          value
        )
      },
    },
  },

  emits: ['click'],

  computed: {
    buttonColor() {
      const { color } = this

      switch (color) {
        case 'primary':
          return [
            'bg-primary-600',
            'hover:bg-primary-700',
            'focus:bg-primary-700',
            'active:bg-primary-800',
          ]

        case 'secondary':
          return [
            'bg-secondary-600',
            'hover:bg-secondary-700',
            'focus:bg-secondary-700',
            'active:bg-secondary-800',
          ]

        case 'accent':
          return [
            'bg-accent-600',
            'hover:bg-accent-700',
            'focus:bg-accent-700',
            'active:bg-accent-800',
          ]

        case 'error':
          return [
            'bg-error-600',
            'hover:bg-error-700',
            'focus:bg-error-700',
            'active:bg-error-800',
          ]

        case 'success':
          return [
            'bg-success-600',
            'hover:bg-success-700',
            'focus:bg-success-700',
            'active:bg-success-800',
          ]

        default:
          return [
            'bg-primary-600',
            'hover:bg-primary-700',
            'focus:bg-primary-700',
            'active:bg-primary-800',
          ]
      }
    },

    classes() {
      const classes = [
        ...this.buttonColor,
        'inline-block',
        'px-6',
        'py-2.5',
        'text-white',
        'font-medium',
        'leading-tight',
        'uppercase',
        'rounded-lg',
        'shadow-md',
        'hover:shadow-lg',
        'focus:shadow-lg',
        'focus:outline-none',
        'focus:ring-0',
        'active:shadow-lg',
        'transition',
        'duration-150',
        'ease-in-out',
        'max-w-fit'
      ]

      return classes
    },
  },
}
</script>
