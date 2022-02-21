<template>
    <button class="main__search-btn">
        Найти
    </button>
</template>

<script>
export default {
    name: "SearchBtn"
}
</script>

<style scoped>
    .main__search-btn{
        height: 3.611vw;
        width: 10.417vw;
        border-bottom-right-radius: 0.694vw;
        border-top-right-radius: 0.694vw;
    }

    @media screen and (max-width: 768px){
        .main__search-btn{
            height: 6.771vw;
            width: 19.531vw;
            border-bottom-right-radius: 1.302vw;
            border-top-right-radius: 1.302vw;
        }
    }

    @media screen and (max-width: 320px){
        .main__search-btn{
            height: 16.25vw;
            width: 28.438vw;
            border-bottom-right-radius: 3.125vw;
            border-top-right-radius: 3.125vw;
        }
    }
</style>