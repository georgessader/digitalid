<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Digital Id
          </v-list-item-title>
          <v-list-item-subtitle>
            Project
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {

  data() {
    return {
      drawer: null,
      items: [],
      right: null,
    }
  },
  methods: {
    loadApp() {
      if (sessionStorage.getItem('email') && sessionStorage.getItem('admin')=="true")
        this.items = [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
          { title: 'Profile', icon: 'mdi-account', to: '/profile' },
          { title: 'Admin page', icon: 'mdi-shield-crown-outline', to: '/admin' },
          { title: 'Requests page', icon: 'mdi-shield-crown-outline', to: '/request' },
          { title: 'Log out', icon: 'mdi-logout', to: '/logout' },
        ]
      else if (sessionStorage.getItem('email') && sessionStorage.getItem('admin')=="false")
        this.items = [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
          { title: 'Profile', icon: 'mdi-account', to: '/profile' },
          { title: 'Log out', icon: 'mdi-logout', to: '/logout' },
        ]
      else
        this.items = [
          { title: 'Login', icon: 'mdi-login', to: '/' }
        ]
    },
  },
  created() {
    this.loadApp();
  },
  mounted() {
    const thisInstance = this
    this.$root.$on('loadApp', function () {
      thisInstance.loadApp()
    })
  }
}
</script>
