<template>
  <Title :text="languagesLabel" />

  <div class="language-line" v-for="(language, index) in languages" :key="index">
    <img class="circle" src="@/assets/circle.svg" />
    <Paragraph class="contact" :text="language" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
// import SubTitle from "@/components/SubTitle.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Languages",

  components: { Title, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    resumeLabels() {
      return this.currentLanguage.resumeLabels;
    },

    languagesLabel() {
      return this.resumeLabels.languages;
    },

    languages() {
      return this.currentLanguage.data.languages;
    }
  }
};
</script>

<style scoped>
.circle {
  width: 8px;
  margin-left: 8px;
}

.material-icons {
  display: inline-flex;
  align-items: center;
}

.language-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.25em;
}
</style>
