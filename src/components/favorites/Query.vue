<template>
        <div class="favorites__query"
             @mouseover="edit = true"
             @mouseleave="edit = false"
             :class="{ focused :  edit}">
            <div class="favorites__query-words">
                видео
            </div>
            <SafeQuery v-if="showModal" @close="showModal = !showModal">
                <div slot="header">
                    Изменить запрос
                </div>
            </SafeQuery>
            <div class="edit-query" v-if="edit" @mouseover="edit = false">
                <div class="edit" @click="showModal = !showModal">
                    Изменить
                </div>
                <div class="delete">
                    Удалить
                </div>
            </div>
        </div>
</template>

<script>
import SafeQuery from "./SafeQuery";
export default {
    name: "Query",
    components: {SafeQuery},
    data(){
        return{
            edit: false,
            showModal: false
        }
    },
    methods:{
        close(){
            this.showModal = !this.showModal;
            this.favoritesOn = true
        },
        closeno(){
            this.showModal = !this.showModal;
            this.favoritesOn = false;
        }
    }
}
</script>

<style scoped>
    .favorites__query{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #fff;
        height: 3.264vw;
        padding: .972vw 1.389vw .972vw 1.389vw;
        border-bottom: .1vw solid #F1F1F1;
    }

    .favorites__query-words{
        font-weight: 500;
        font-size: 1.111vw;
    }

    .edit-query{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .edit, .delete{
        font-size: .972vw;
    }

    .edit{

        color: #1390E5;
    }

    .delete{
        z-index: 5;
        color: #FF0000;
        margin-left: 2.083vw;
    }

    .focused{
        background-color: #F1F1F1;
    }

    @media screen and (max-width: 768px) {
        .favorites__query{
            height: 6.120vw;
            padding: 1.693vw 2.604vw 1.693vw 2.604vw ;
            border-bottom: .3vw solid #F1F1F1;
        }

        .favorites__query-words{
            font-size: 2.083vw;
        }

        .edit, .delete{
            font-size: 1.823vw;
        }

        .delete{
            margin-left: 3.906vw;
        }
    }

    @media screen and (max-width: 320px) {
        .favorites__query{
            height: 14.688vw;
            padding: 4.063vw 6.250vw 4.063vw 6.250vw;
            border-bottom: .7vw solid #F1F1F1;
        }

        .favorites__query-words{
            font-size: 5vw;
        }

        .edit, .delete{
            font-size: 4.375vw;
        }

        .delete{
            margin-left: 3.125vw;
        }
    }
</style>