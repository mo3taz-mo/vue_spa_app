
<template>
    <div class="page-not-found container-fluid bg-white">
        <div class="row">
            <div class="col-md-12 text-center pl-0 pr-0">
                <h4 class=" text-center">
                    Page Not Found
                </h4>
                <P class="text-center">Error 404</P>
                <router-link v-bind:to="'/dashboard'"  class="btn btn-primary backBtnErrorPage "><a>Back to Dashboard</a></router-link>
            </div>        
        </div>

    </div>
</template>

<script>
 
export default {
  name: "app-page-not-found"
};
</script>

<style lang="scss">
</style>

