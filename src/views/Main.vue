<template>
    <div class="main">
        <Header></Header>
        <div class="container">
            <div class="main__search-container">
                <h1>Поиск видео</h1>
                <div class="main__search-input-container">
                    <input class="main__search-input" placeholder="Что хотите посмотреть?"
                           @focus="focusLogin = !focusLogin"
                           :class="{ clicked :  focusLogin}"
                           @blur="focusLogin = !focusLogin" >
                    <router-link to="/Searched">
                        <search-btn></search-btn>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/main/Header";
import SearchBtn from "../components/main/SearchBtn";

export default {
    name: "Main",
    data(){
      return{
          focusLogin: false
      }
    },
    components:{
        Header, SearchBtn
    }
}
</script>

<style scoped>
    .main__search-container{
        margin-top: 15.278vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-weight: 400;
        font-size: 2.5vw;
        margin-bottom: 2.778vw;
    }

    .main__search-input-container{
        display: flex;
        align-items: center;
    }

    .main__search-input{
        width: 37.222vw;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        font-size: 1.389vw;
        padding: 0.972vw 1.042vw 0.972vw 1.042vw;
    }

    .main__search-input{
        height: 3.611vw;
    }

    @media screen and (max-width: 768px) {
        .main__search-container{
            margin-top: 28.646vw;
        }

        h1{
            font-size: 4.688vw;
            margin-bottom: 5.208vw;
        }

        .main__search-input{
            height: 6.771vw;
        }

        .main__search-input{
            width: 69.792vw;
            font-size: 2.604vw;
            padding: 1.823vw 1.953vw 1.823vw 1.953vw;
        }

    }

    @media screen and (max-width: 320px) {
        .main__search-container{
            margin-top: 37.5vw;
        }

        h1{
            font-size: 11.25vw;
            margin-bottom: 12.5vw;
        }

        .main__search-input{
            height: 16.25vw;
        }

        .main__search-input{
            width: 66.563vw;
            font-size: 5vw;
            padding: 4.375vw 4.688vw 4.375vw 4.688vw;
        }

    }

</style>