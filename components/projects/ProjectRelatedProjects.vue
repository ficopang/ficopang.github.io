<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      relatedProject: {
        relatedProjectsHeading: "Other Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/static/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/static/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/static/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/static/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["projects"]),
    randomProjects() {
      const projectsCopy = [...this.projects]; // Create a copy of the projects array
      const randomProjects = [];

      while (randomProjects.length < 4 && projectsCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * projectsCopy.length);
        randomProjects.push(projectsCopy.splice(randomIndex, 1)[0]);
      }

      return randomProjects;
    },
  },
};
</script>

<template>
  <div
    class="
      mt-10
      pt-10
      sm:pt-14 sm:mt-20
      border-t-2 border-primary-light
      dark:border-secondary-dark
    "
  >
    <p
      class="
        font-general-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      {{ relatedProject.relatedProjectsHeading }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="project in randomProjects" :key="project.id">
        <NuxtLink :to="`/projects/${project.id}`">
          <img
            :src="'../' + project.img"
            class="rounded-xl cursor-pointer"
            :alt="project.title"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
