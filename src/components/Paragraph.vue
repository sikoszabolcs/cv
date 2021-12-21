<template>
<div style="white-space: pre-line;">
  <p>{{ text }}</p>
</div>
</template>

<script>
export default {
  Name: "Paragraph",

  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  line-height: 22px;
  margin: 0;
  font-size: 15px;
  color: #303030;
}
</style>
