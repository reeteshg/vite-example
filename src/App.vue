<template>
  <div id="nav">
    <!-- <router-view /> -->
    <router-link to="/">
      VueUse Example
    </router-link> |
    <router-link to="/tanstack-basic">
      Basic TanStack Example
    </router-link> |
    <router-link to="/tanstack-pagination">
      TanStack Pagination Example
    </router-link>
  </div>
  <router-view />
</template>
