<template>
  <div class="page-wrapper">
    <AppAsciiArt />
    <aside>
      <NuxtImg class="logo" src="/image/profile-picture.jpeg" />
      <nav>
        <NuxtLink class="link" to="/">About</NuxtLink>
        <NuxtLink class="link" to="/writing">Writing</NuxtLink>
        <NuxtLink class="link" to="/misc">Misc</NuxtLink>
      </nav>
    </aside>
    <main>
      <h1 class="title">Adam Smielewski</h1>
      <slot />
      <footer>© 2025 Adam Smielewski.</footer>
    </main>
  </div>
</template>

<style lang="css" scoped>
.page-wrapper {
  display: flex;
  flex-flow: row nowrap;

  max-width: 64rem;
  min-height: calc(100vh - 18rem);
  margin: 8rem auto 10rem;
  padding: 0 1.8rem;
}

aside {
  width: 200px;

  .logo {
    aspect-ratio: 1/1;
    width: 36px;
    margin-bottom: 5rem;
    border-radius: 50%;
  }

  nav {
    overflow: visible;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;

    .link {
      position: relative;
      margin: 0.5rem 0;

      &.router-link-active::before,
      &.router-link-exact-active::before {
        content: "";

        position: absolute;
        top: 50%;
        left: -1rem;
        transform: translateY(-50%);

        width: 6px;
        height: 6px;
        border-radius: 50%;

        background: currentcolor;
      }

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  width: 75%;

  h1 {
    height: calc(36px - 9px);
    margin: 9px 0 5rem;
  }

  section {
    flex: 1;

    p {
      max-width: 65ch;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  footer {
    margin-top: 5rem;
    font-size: 14px;
  }
}
</style>
