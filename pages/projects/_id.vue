<script src="https://unpkg.com/@diracleo/vue-enlargeable-image/dist/vue-enlargeable-image.min.js"></script>

<script>
import { Share2Icon, ClockIcon, TagIcon } from "vue-feather-icons";
import ProjectRelatedProjects from "../../components/projects/ProjectRelatedProjects.vue";
export default {
  scrollToTop: true,
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  methods: {
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: this.project.title,
            text: "Check this Fico Pangestu's portfolio project",
            url: window.location,
          });
          console.log("Shared successfully");
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        console.warn("Web Share API not supported");
      }
    },
  },
  components: { ProjectRelatedProjects, Share2Icon, ClockIcon, TagIcon },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <div class="flex justify-between items-center">
          <div>
            <p
              class="
                font-general-medium
                text-left text-3xl
                sm:text-4xl
                font-bold
                text-primary-dark
                dark:text-primary-light
                mt-14
                sm:mt-20
                mb-7
              "
            >
              {{ project.title }}
            </p>
          </div>
          <div class="mt-14 sm:mt-20 mb-7">
            <button
              class="
                px-4
                py-2.5
                text-white
                tracking-wider
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-1 focus:ring-indigo-900
                rounded-lg
                duration-500
              "
              type="button"
              aria-label="Share"
              @click="share"
            >
              <Share2Icon class="w-4 lg:w-5 h-4 lg:h-5"></Share2Icon>
            </button>
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center mr-10">
            <ClockIcon
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></ClockIcon>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <TagIcon
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></TagIcon>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <enlargeable-image
            :src="'~/../' + projectImage.img"
            :src_large="'~/../' + projectImage.img"
          >
            <nuxt-img
              :src="'~/../' + projectImage.img"
              loading="lazy"
              class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            />
          </enlargeable-image>
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
            >
              {{ project.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li
                v-for="info in project.companyInfos"
                :key="info.id"
                class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                "
              >
                <span>{{ info.details }}</span>
              </li>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.objectivesTitle }}
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.objectivesDetails }}
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.techTitle }}
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              {{ project.technologies.join(", ") }}
            </p>
          </div>

          <!-- Single project social sharing -->
          <div>
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              {{ project.linkTitle }}
            </p>
            <div class="flex items-center gap-2">
              <a
                v-for="link in project.links"
                :key="link.id"
                :href="link.url"
                target="__blank"
                aria-label="Share Project"
                class="
                  px-4
                  sm:px-6
                  py-2
                  bg-gray-600
                  text-primary-light
                  hover:bg-ternary-dark
                  dark:bg-gray-200
                  dark:text-secondary-dark
                  dark:hover:bg-primary-light
                  rounded-md
                  focus:ring-1 focus:ring-indigo-900
                  duration-500
                "
                >{{ link.title }}</a
              >
            </div>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            "
          >
            {{ project.detailsTitle }}
          </p>
          <p
            v-for="projectDetail in project.projectDetails"
            :key="projectDetail.id"
            class="
              font-general-regular
              mb-5
              text-lg text-ternary-dark
              dark:text-ternary-light
            "
          >
            {{ projectDetail.details }}
          </p>
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects />
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
