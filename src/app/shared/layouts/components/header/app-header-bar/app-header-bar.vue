<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <router-link  class="navbar-brand"  :to="'/dashboard'">
      <span>Company name</span>
    </router-link>
    <b-dropdown id="language-dropdown-right" right :text="appLang" variant="link" class="mr-2">
      <b-dropdown-item href="javascript:;"
        v-for="lang in languages"
        :key="lang.title"
        @click="changeLocale(lang.language)">{{lang.title}}</b-dropdown-item>
    </b-dropdown>
  </nav>
</template>


<script src="./app-header-bar.js"></script>

