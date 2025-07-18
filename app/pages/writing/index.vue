<script setup lang="ts">
const { data: rawDocs } = await useAsyncData("content-titles", () =>
  queryCollection("content").all(),
);

const docs = computed(() =>
  (rawDocs.value ?? []).map((d) => ({
    ...d,
    formattedDate:
      typeof d.meta?.date === "string"
        ? new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(d.meta.date))
        : "",
  })),
);
</script>

<template>
  <section>
    <ul v-if="docs.length">
      <li v-for="doc in docs" :key="doc.path">
        <NuxtLink class="link" :to="'/writing' + doc.path">
          <h2>{{ doc.title || doc.path }}</h2>
          <p>{{ doc.formattedDate }}</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 65ch;

  ul {
    display: flex;
    flex-flow: column nowrap;

    margin: 0;
    padding: 0;

    list-style-type: none;

    li {
      padding: 0.5rem 0;

      &:first-of-type {
        padding-top: 0;
      }

      .link {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }
    }
  }
}
</style>
