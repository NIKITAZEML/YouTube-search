<template>
    <div class="search-line">
        <h2>
            Поиск видео
        </h2>
        <div class="search-line__container">
            <input type="text" class="borr-10 search-line__input">
            <svg class="search-line__heart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showModal = !showModal">
                <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg  class="search-line__heart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  v-if="favoritesOn" @click="showModal = !showModal">
                <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012Z" fill="#C5E4F9" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <SearchBtn :class="w150"></SearchBtn>
        </div>
        <div class="favorite-added-message" v-if="favoritesOn">
            <h4>
                Поиск сохранён в разделе «Избранное»
            </h4>
            <router-link to="/favorites">
                <div class="to-favorite">
                    Перейти в избранное
                </div>
            </router-link>
        </div>
        <SafeQuery v-if="showModal" @close="close()" @closeno="closeno()">
        </SafeQuery>
    </div>
</template>

<script>
import SearchBtn from "../main/SearchBtn";
import SafeQuery from "../favorites/SafeQuery";

export default {
    name: "SearchLine",
    data(){
        return{
            w150: 'w150',
            showModal: false,
            favoritesOn: false,
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
    },
    components:{
        SafeQuery,
        SearchBtn
    }

}
</script>

<style scoped>
    h2{
        margin-top: 2.778vw;
        font-size: 1.944vw;
        font-weight: 400;
    }
    
    .search-line{
        position: relative;
    }

    .search-line__container{
        position: relative;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: .833vw;
    }

    .search-line__input{
        width: 61.806vw;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        font-size: 1.389vw;
        height: 3.611vw;
        padding: 0.972vw 1.042vw 0.972vw 1.042vw;
    }

    .search-line__heart{
        width: 1.667vw;
        position: absolute;
        z-index: 2;
        right: 11.458vw;
        cursor: pointer;
    }

    .favorite-added-message{
        background-image: url('../../assets/images/Tooltip.png');
        width: 15.278vw;
        height: 8.403vw;
        background-size: cover;
        background-position: center center;
        position: absolute;
        right: 4.5vw;
        top: 6.8vw;
    }

    .favorite-added-message h4{
        font-size: 1vw;
        color: #939393;
        font-weight: 400;
        margin-top: .8vw;
        margin-left: 1.1vw;
    }

    .to-favorite{
        color: #1390E5;
        font-size: 1.111vw;
        margin-top: 1vw;
        margin-left: 1.1vw;
    }

    @media screen and (max-width: 768px){
        h2{
            font-size: 3.646vw;
            margin-top: 5.208vw;
        }

        .search-line__container{
            margin-top: 1.563vw;
        }

        .search-line__input{
            height: 6.771vw;
            width: 89.583vw;
            font-size: 2.604vw;
            padding: 1.823vw 1.953vw 1.823vw 1.953vw;
        }

        .search-line__heart{
            width: 3.125vw;
            right: 18vw;
        }

        .favorite-added-message{
            width: 28.646vw;
            height: 15.234vw;
            right: 5vw;
            top: 13vw;
        }

        .favorite-added-message h4{
            font-size: 2.083vw;
            margin-top: 2vw;
            margin-left: 1.1vw;
        }

        .to-favorite{
            font-size: 2.083vw;
            margin-top: 1vw;
        }

    }

    @media screen and (max-width: 320px){
        h2{
            font-size: 8.750vw;
            margin-top: 12.5vw;
        }

        .search-line__container{
            margin-top: 3.75vw;
        }

        .search-line__input{
            height: 16.25vw;
            width: 66.563vw;
            font-size: 5vw;
            padding: 4.375vw 4.688vw 4.375vw 4.688vw;
        }

        .search-line__heart{
            width: 7.5vw;
            right: 32vw;
        }

        .favorite-added-message{
            width: 68.750vw;
            height: 38.750vw;
            right: 1vw;
            top: 31vw;
        }

        .favorite-added-message h4{
            font-size: 5vw;
            margin-left: 3vw;
            margin-top: 6vw;
        }

        .to-favorite{
            font-size: 5vw;
            margin-top: 4vw;
            margin-left: 3vw;
        }
    }
</style>