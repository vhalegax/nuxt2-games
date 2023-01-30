<template>
  <div>
    <ValidationProvider v-slot="{ errors }" :rules="rules">
      <BaseLabel :id="id" :error="errors.length > 0" :label="label">
        <div>
          <slot name="icon"> </slot>

          <input
            :id="id"
            :type="type"
            class="rounded-lg block w-full p-2 border-2 focus:outline-none"
            :class="setInputClass(errors.length > 0)"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
          />

          <div v-if="errors.length > 0" class="mt-1 text-sm text-error-500 h-5">
            <span> {{ errors[0] }} </span>
          </div>

          <div v-else class="mt-1 text-sm text-base-500 dark:text-base-400 h-5">
            <span v-show="hint">{{ hint }}</span>
          </div>
        </div>
      </BaseLabel>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
  },

  props: {
    value: {},
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
    disabled: Boolean,
    id: {
      type: String,
      required: false,
      default: undefined,
    },
    loading: Boolean,
    hint: {
      type: String,
      required: false,
      default: undefined,
    },
    readonly: Boolean,
    placeholder: {
      type: String,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    rules: {
      type: String,
      required: false,
      default: '',
    },
  },

  emits: ['input'],

  methods: {
    setInputClass(error) {
      const defaultClass = ['dark:bg-base-700']

      if (error)
        return [
          ...defaultClass,
          'placeholder-error-500',
          'border-error-500',
          'focus:border-error-500',
        ]

      return [
        ...defaultClass,
        'placeholder-base-400',
        'dark:placeholder-base-400',
        'dark:border-base-600',
        'focus:border-primary-600',
        'dark:focus:border-primary-600',
      ]
    },
  },
}
</script>
