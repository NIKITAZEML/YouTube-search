<template>
    <div class="favorites">
        <Header></Header>
        <div class="container">
            <h3>
                Избранное
            </h3>
            <div class="favorites__queries">
                <query></query>
                <query></query>
                <query></query>
                <query></query>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/favorites/Header";
import Query from "../components/favorites/Query";
import SafeQuery from "../components/favorites/SafeQuery";
export default {
    name: "Favorites",
    components: {
        SafeQuery,
        Header, Query
    }
}
</script>

<style scoped>
    h3{
        font-size: 1.944vw;
        font-weight: 400;
        margin-top: 2.778vw;
        margin-bottom: 2.778vw;
    }

    .favorites__queries div:nth-child(1){
        border-top-left-radius: .694vw;
        border-top-right-radius: .694vw;
    }

    .favorites__queries div:last-child{
        border-bottom-left-radius: .694vw;
        border-bottom-right-radius: .694vw;
    }

    @media screen and (max-width: 768px) {
       h3{
           font-size: 3.646vw;
           margin-top: 5.208vw;
           margin-bottom: 5.208vw;
       }

        .favorites__queries div:nth-child(1){
            border-top-left-radius: 1.302vw;
            border-top-right-radius: 1.302vw;
        }

        .favorites__queries div:last-child{
            border-bottom-left-radius: 1.302vw;
            border-bottom-right-radius: 1.302vw;
        }
    }

    @media screen and (max-width: 320px) {
        h3{
            font-size: 8.75vw;
            margin-top: 12.5vw;
            margin-bottom: 12.5vw;
        }

        .favorites__queries div:nth-child(1){
            border-top-left-radius: 3.125vw;
            border-top-right-radius: 3.125vw;
        }

        .favorites__queries div:last-child{
            border-bottom-left-radius: 3.125vw;
            border-bottom-right-radius: 3.125vw;
        }
    }
</style>