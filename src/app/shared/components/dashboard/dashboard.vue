<template>
    <div class="dashboard container-fluid bg-white ">
        <div class="row">
            <div class="col-md-12 text-center">
                <h4 class=" text-center">
                    Welcome to VueJS App!
                </h4>
                <P class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe architecto sed iste atque natus consequuntur nobis neque. Fugit, quos voluptatem libero temporibus architecto in? Ad commodi culpa ex obcaecati nulla.</P>
            </div>       
        </div>
    </div>
</template>


<script>
    export default {
        name: "dashboard"
    };
</script>


<style lang="scss">
 .dashboard h4{
   text-align: center;
   margin-top: 24px;
   font-weight: 500;
}

.dashboard p{
      color: #888888;
}
</style>

