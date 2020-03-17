<template>
    <div class="d-flex flex-wrap">
        <div class="container-fluid p-0">
            <slot />
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: 'no-navbar',
        components: {

        },
        data: () => ({

        }),
    };
</script>

<style lang="scss" scoped></style>