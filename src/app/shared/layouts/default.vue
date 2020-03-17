<template>
  <div>
    <header class="main-header">
        <AppHeaderBar />
    </header>
  <div class="container-fluid">
    <div class="row">
      <SideNavBar />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="content">
          <slot />          
          </div>
          <div class="clear"></div>
      </main>
    </div>
  </div>

  </div>
</template>

<script>
import AppHeaderBar from '@/app/shared/layouts/components/header/app-header-bar/app-header-bar.vue';
import SideNavBar from '@/app/shared/layouts/components/header/side-nav-bar/side-nav-bar.vue';

export default {
  name: 'default',
  data() {
    return {
    navEl: false
    }
  },
  components: {
    AppHeaderBar,
    SideNavBar
  },
};
</script>

<style lang="scss" scoped>
</style>