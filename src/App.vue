<template>
  <v-app>
    <v-app-bar density="compact" absolute>
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Admin Dashboard</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      floating
      temporary
      permanent
      v-model="drawer"
      elevation="0"
      absolute
    >
    <v-list density="compact">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.link"
        active-color="primary"
      >
        <v-list-item-avatar left>
          <v-icon :icon="item.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
      
    </v-navigation-drawer>

    <v-main >
      <v-slide-y-reverse-transition>
      <router-view v-show="show"> </router-view>
      </v-slide-y-reverse-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,
    show: false,
    items: [
        { text: 'Home', icon: 'mdi-home' , link:"/" },
        { text: 'Deserts', icon: 'mdi-car-seat-heater' , link:"/deserts" },
        { text: 'Github Users', icon: 'mdi-account-group-outline' , link:"/github-users"},
      ],
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  created(){
    this.show= true;
  }
};
</script>
