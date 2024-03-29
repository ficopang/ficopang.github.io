<script>
import { mapState } from "vuex";
import { SearchIcon } from "vue-feather-icons";

export default {
  props: {
    limit: String,
  },
  components: {
    SearchIcon,
  },
  data: () => {
    return {
      selectedProject: "",
      searchProject: "",
    };
  },
  computed: {
    ...mapState(["projectsHeading", "projectsDescription", "projects"]),
    filteredProjects() {
      if (this.selectedProject && this.searchProject) {
        if (this.limit)
          return this.filterProjectsByCategoryAndSearch().splice(0, 6);
        return this.filterProjectsByCategoryAndSearch();
      } else if (this.selectedProject) {
        if (this.limit) return this.filterProjectsByCategory().splice(0, 6);
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        if (this.limit) return this.filterProjectsBySearch().splice(0, 6);
        return this.filterProjectsBySearch();
      }
      if (this.limit) return [...this.projects].splice(0, 6);
      return this.projects;
    },
  },
  methods: {
    filterProjectsByCategoryAndSearch() {
      const categoryFilter = this.filterProjectsByCategory();
      return categoryFilter.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(this.searchProject.toLowerCase());
      });
    },
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.selectedProject);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
};
</script>

<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <h2
        class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          text-ternary-dark
          dark:text-ternary-light
        "
      >
        {{ projectsHeading }}
      </h2>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p> -->
    </div>

    <!-- Filter and search projects -->
    <div class="mt-2 sm:mt-4">
      <h3
        class="
          font-general-regular
          text-center text-secondary-dark
          dark:text-ternary-light
          text-md
          sm:text-xl
          font-normal
          mb-10
        "
      >
        Search projects by title or filter by category
      </h3>
      <div
        class="
          flex flex-col
          sm:flex-row
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-0
          gap-2
        "
      >
        <div class="flex justify-between gap-2">
          <span
            class="
              block
              bg-primary-light
              dark:bg-ternary-dark
              p-2.5
              shadow-sm
              rounded-xl
              cursor-pointer
            "
          >
            <SearchIcon
              class="text-ternary-dark dark:text-ternary-light"
            ></SearchIcon>
          </span>
          <input
            v-model="searchProject"
            class="
              font-general-medium
              pl-3
              pr-1
              sm:px-4
              py-2
              w-full
              border-1 border-gray-200
              dark:border-secondary-dark
              rounded-lg
              text-sm
              sm:text-md
              bg-secondary-light
              dark:bg-ternary-dark
              text-primary-dark
              dark:text-ternary-light
            "
            id="query"
            name="query"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        "
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.id}`">
          <div>
            <nuxt-img
              :src="project.img"
              :alt="project.title"
              class="rounded-t-xl border-none"
              width="780"
              height="680"
              sizes="sm:100vw md:50vw lg:400px"
              format="webp"
              loading="lazy"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
              class="
                font-general-semibold
                text-xl text-ternary-dark
                dark:text-ternary-light
                font-semibold
                mb-2
              "
            >
              {{ project.title }}
            </p>
            <span
              class="
                font-general-medium
                text-lg text-ternary-dark
                dark:text-ternary-light
              "
              >{{ project.category }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
