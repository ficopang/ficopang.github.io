<script>
import { mapState } from "vuex";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "vue-feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
export default {
  components: {
    FooterCopyright,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
  },
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            text-primary-dark
            dark:text-primary-light
            mb-5
          "
        >
          Follow me
        </p>
        <div class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
            :aria-label="social.name"
          >
            <component
              :is="social.icon"
              class="w-6 sm:w-8 h-6 sm:h-8"
            ></component>
          </a>
        </div>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
