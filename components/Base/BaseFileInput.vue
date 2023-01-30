<template>
  <div>
    <ValidationProvider
      ref="provider"
      v-slot="{ validate, errors }"
      :rules="rules"
    >
      <BaseLabel :id="id" :error="errors.length > 0" :label="label">
        <div>
          <slot name="icon"> </slot>

          <input
            :id="id"
            type="file"
            class="rounded-lg block w-full p-2 border-2 focus:outline-none cursor-pointer"
            :class="setInputClass(errors.length > 0)"
            :placeholder="placeholder"
            :multiple="multiple"
            :accept="accept"
            @change="onChangeFile"
          />

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
    multiple: Boolean,
    accept: {
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
    async onChangeFile(event) {
      const { valid } = await this.$refs.provider.validate(event)

      if (valid) {
        if (this.multiple) {
          this.$emit('input', event.target.files)
        } else {
          this.$emit('input', event.target.files[0])
        }
      }
    },
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
