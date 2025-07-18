<template>
  <section>
    <p>
      I'm a DevOps Engineer, formerly a Full-Stack Developer based in Munich
      🥨🍺.
    </p>
    <p>
      Today I focus mostly on build reproducability and IaC pipelines at
      <NuxtLink to="https://www.xalt.de/" target="_blank">XALT</NuxtLink>.
    </p>
    <p>
      I also study Information Systems at TUM, where I circle around
      cybersecurity, distributed computing, process optimization, and...
      accounting.
    </p>
    <p>
      I’m a huge fan of the “Dotfile Renaissance” as I believe a developer’s
      workflow should center around the terminal. Both my
      <NuxtLink to="https://github.com/blyedev/dotfiles" target="_blank"
        >dotfiles</NuxtLink
      >
      and my
      <NuxtLink to="https://github.com/blyedev/nvim-config" target="_blank"
        >neovim</NuxtLink
      >
      config are open-sourced on GitHub for anyone to see. I generally try to
      open source as much as possible.
    </p>
    <p>I hope to share write-ups of projects I worked on here.</p>
  </section>
</template>

<style lang="css" scoped>
section {
  flex: 1;

  p {
    max-width: 65ch;
    margin: 1.25em 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  a {
    color: var(--color-accent-primary);
  }
}
</style>
