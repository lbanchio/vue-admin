<template>
  <nav class="navbar is-fixed-top" id="main-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{name: 'dashboard'}">
        <img src="~assets/logo.png" alt="" width="42" class="header-logo">
      </router-link>


      <button class="button navbar-burger" @click="toggleSidebar({opened: !sidebar.opened})">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <!-- navbar items -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Usuario
          </a>
          <div class="navbar-dropdown is-boxed">
            <hr class="navbar-divider">
            <a class="navbar-item">Cerrar sesion</a>
          </div>
        </div>
        <div class="navbar-item">

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {

    components: {
    },

    props: {
      show: Boolean
    },

    computed: mapGetters({
      sidebar: 'sidebar'
    }),

    methods: {
      ...mapActions([
        'toggleSidebar'
      ])
    }
  }
</script>

<style lang="sass">
  #main-navbar
    z-index: 1024
    box-shadow: 1px 1px 1px #ccc
</style>
