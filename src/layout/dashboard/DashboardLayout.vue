<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/start" :name="$t('sidebar.start')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/summary" :name="$t('sidebar.summary')" icon="tim-icons icon-notes"/>
        <sidebar-link to="/categories" :name="$t('sidebar.categories')" icon="tim-icons icon-bullet-list-67"/>
        <sidebar-link to="/settings" :name="$t('sidebar.settings')" icon="tim-icons icon-settings"/>
        <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/notifications" :name="$t('sidebar.notifications')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/table-list" :name="$t('sidebar.tableList')" icon="tim-icons icon-puzzle-10"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
