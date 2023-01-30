<template>
  <div
    class="max-w-5xl mx-auto p-4 shadow border dark:border-base-500 dark:shadow-base-600 rounded-lg"
  >
    <ValidationObserver ref="form">
      <form @submit.prevent="">
        <div class="grid sm:grid-cols-2 gap-2 gap-x-4">
          <h1 class="text-5xl font-medium tracking-tight sm:col-span-2 mb-4">
            Add New Game
          </h1>

          <BaseTextField
            id="title"
            v-model="form.title"
            label="title"
            placeholder="Input title"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="status"
            v-model="form.status"
            label="status"
            placeholder="Input status"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="genre"
            v-model="form.genre"
            label="genre"
            placeholder="Input genre"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="platform"
            v-model="form.platform"
            label="platform"
            placeholder="Input platform"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="developer"
            v-model="form.developer"
            label="developer"
            placeholder="Input developer"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="publisher"
            v-model="form.publisher"
            label="publisher"
            placeholder="Input publisher"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="game_url"
            v-model="form.gameUrl"
            label="game url"
            placeholder="Input game url"
            rules="required"
          ></BaseTextField>
          <BaseTextField
            id="profile_url"
            v-model="form.profileUrl"
            label="profile url"
            placeholder="Input profile url"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="os"
            v-model="form.spec.os"
            label="operating system"
            placeholder="Input operating system"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="memory"
            v-model="form.spec.memory"
            label="memory"
            placeholder="Input memory"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="graphics"
            v-model="form.spec.graphics"
            label="graphics"
            placeholder="Input graphics"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="storage"
            v-model="form.spec.storage"
            label="storage"
            placeholder="Input storage"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="processor"
            v-model="form.spec.processor"
            label="processor"
            placeholder="Input processor"
            rules="required"
          ></BaseTextField>

          <BaseTextField
            id="release_date"
            v-model="form.releaseDate"
            label="release date"
            placeholder="Input release date"
            type="date"
            rules="required"
          ></BaseTextField>

          <BaseTextArea
            id="short_desc"
            v-model="form.shortDescription"
            label="short description"
            placeholder="Input short description"
            class="sm:col-span-2"
            rows="2"
            rules="required"
          ></BaseTextArea>

          <BaseTextArea
            id="description"
            v-model="form.description"
            label="description"
            placeholder="Input description"
            class="sm:col-span-2"
            rules="required"
          ></BaseTextArea>

          <BaseFileInput
            id="thumbnail"
            v-model="form.thumbnail"
            label="thumbnail"
            placeholder="Input thumbnail"
            class="sm:col-span-2"
            accept="image/*"
            rules="required"
          ></BaseFileInput>

          <BaseFileInput
            id="screenshots"
            v-model="form.screenshots"
            label="screenshots"
            placeholder="Input screenshots"
            class="sm:col-span-2"
            accept="image/*"
            multiple
            rules="required"
          ></BaseFileInput>

          <div class="mt-4 sm:col-span-2">
            <BaseButton @click="submit()"> Add Game </BaseButton>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'CreateGame',
  fetchOnServer: false,

  components: {
    ValidationObserver,
  },

  data() {
    return {
      form: {
        description: null,
        shortDescription: null,
        developer: null,
        gameUrl: null,
        genre: null,
        spec: {
          os: null,
          memory: null,
          graphics: null,
          storage: null,
          processor: null,
        },
        platform: null,
        profileUrl: null,
        publisher: null,
        releaseDate: null,
        title: null,
        status: null,
        thumbnail: null,
        screenshots: null,
      },
    }
  },

  head() {
    return {
      title: 'Add New Game',
    }
  },

  methods: {
    async submit() {
      if (await this.$refs.form.validate()) {
        this.$swal({
          icon: 'success',
          text: 'Successfully to add new game!',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(() => this.$router.push('/'))
      } else {
        this.$swal({
          icon: 'error',
          text: 'Please check again all of your inputs.',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        })
      }
    },
  },
}
</script>
