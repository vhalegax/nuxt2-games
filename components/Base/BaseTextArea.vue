<template>
  <div>
    <ValidationProvider v-slot="{ errors }" :rules="rules">
      <BaseLabel :id="id" :error="errors.length > 0" :label="label">
        <div>
          <slot name="icon"> </slot>

          <textarea
            :id="id"
            class="rounded-lg block w-full p-2 border-2 focus:outline-none"
            :class="setInputClass(errors.length > 0)"
            :placeholder="placeholder"
            :rows="typeof rows === 'string' ? Number(rows) : rows"
            :value="value"
            @input="$emit('input', $event.target.value)"
          ></textarea>

          <div
            v-if="errors.length > 0"
            class="mt-1 text-sm text-error-700 dark:text-error-500 h-5"
          >
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
    rows: {
      type: [String, Number],
      required: false,
      default: 3,
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
      if (error)
        return [
          'dark:bg-base-700',
          'dark:text-error-50',
          'dark:placeholder-error-400',
          'dark:border-error-600',
          'dark:focus:border-error-600',
        ]

      return [
        'dark:bg-base-700',
        'dark:text-base-50',
        'dark:placeholder-base-400',
        'dark:border-base-600',
        'dark:focus:border-primary-500',
      ]
    },
  },
}
</script>
