<script lang="ts" setup>
const route = useRoute();

const docPath = computed(() => {
  const stripped = route.path.replace(/^\/writing(\/|$)/, "/");
  return stripped || "/";
});

const { data: page } = await useAsyncData(docPath.value, () =>
  queryCollection("content").path(docPath.value).first(),
);
</script>

<template>
  <section>
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>

<style scoped>
section {
  max-width: 65ch;
}
</style>
