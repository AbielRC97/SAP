<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light
  a.navbar-brand(href="#") Navbar
  button.navbar-toggler(
    type="button",
    data-toggle="collapse",
    data-target="#navbarNav",
    aria-controls="navbarNav",
    aria-expanded="false",
    aria-label="Toggle navigation"
  )
    span.navbar-toggler-icon
  #navbarNav.collapse.navbar-collapse
    ul.navbar-nav
      li.nav-item.active
        router-link.nav-link(to="/")
          | Contador
      li.nav-item
        router-link.nav-link(to="/avatar") Avatar
      li.nav-item
        router-link.nav-link(to="/brage") Brage
      li.nav-item
        a.nav-link.disabled(href="#") Disabled
</template>
