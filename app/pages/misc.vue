<template>
  <section>
    <h2>Miscellany</h2>
    <ul>
      <li>
        <NuxtLink
          class="link"
          to="https://keys.openpgp.org/vks/v1/by-fingerprint/86022F5C4A46C30F804FCF29F67AEA1B362B1207"
          >My GPG Public Key</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>

<style lang="css" scoped>
section {
  flex: 1;

  p {
    max-width: 65ch;

    &:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
