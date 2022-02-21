<template>
    <div class="searched">
        <Header></Header>
        <div class="container">
            <SearchLine></SearchLine>
            <div class="custom-result-line">
                <div class="custom-result-line__left-side">
                    <h3>
                        Видео по запросу
                    </h3>
                    <div class="query">
                        «чем кормить кота»
                    </div>
                    <div class="queries-amount">
                        7230
                    </div>
                </div>
                <div class="custom-result-line__right-side">
                    <svg class="result-view" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         @click="viewSquares = !viewSquares"
                         v-if="viewSquares">
                        <path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="result-view" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         @click="viewSquares = !viewSquares"
                         v-if="!viewSquares">
                        <g opacity="0.3">
                            <path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <svg class="result-view" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         @click="viewSquares = !viewSquares"
                         v-if="!viewSquares">
                        <path d="M10 5H5V10H10V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 5H14V10H19V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 14H14V19H19V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 14H5V19H10V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="result-view" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         @click="viewSquares = !viewSquares"
                         v-if="viewSquares">
                        <g opacity="0.3">
                            <path d="M10 5H5V10H10V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 5H14V10H19V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 14H14V19H19V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 14H5V19H10V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="cards-video" :class="{ lines : viewSquares }">
                <div class="card-video" :class="{ line : viewSquares }">
                    <img src="../assets/images/hover.png" alt="preview" class="preview" :class="{ 'img-lines' : viewSquares }">
                    <div class="">
                        <p class="main-descr-video" :class="{ 'main-descr-video-flex' : viewSquares }">
                            Как кормить кошку натуралкой | Перечень полезных для кош...
                        </p>
                        <p class="secondary-descr-video">
                            Ветеринария и Кормление соб...
                        </p>
                        <p class="secondary-descr-video">
                            786 тыс. просмотров
                        </p>
                    </div>
                </div>
                <div class="card-video" :class="{ line : viewSquares }">
                    <img src="../assets/images/hover.png" alt="preview" class="preview" :class="{ 'img-lines' : viewSquares }">
                    <div class="">
                        <p class="main-descr-video" :class="{ 'main-descr-video-flex' : viewSquares }">
                            Как кормить кошку натуралкой | Перечень полезных для кош...
                        </p>
                        <p class="secondary-descr-video">
                            Ветеринария и Кормление соб...
                        </p>
                        <p class="secondary-descr-video">
                            786 тыс. просмотров
                        </p>
                    </div>
                </div>
                <div class="card-video" :class="{ line : viewSquares }">
                    <img src="../assets/images/hover.png" alt="preview" class="preview" :class="{ 'img-lines' : viewSquares }">
                    <div class="">
                        <p class="main-descr-video" :class="{ 'main-descr-video-flex' : viewSquares }">
                            Как кормить кошку натуралкой | Перечень полезных для кош...
                        </p>
                        <p class="secondary-descr-video">
                            Ветеринария и Кормление соб...
                        </p>
                        <p class="secondary-descr-video">
                            786 тыс. просмотров
                        </p>
                    </div>
                </div>
                <div class="card-video" :class="{ line : viewSquares }">
                    <img src="../assets/images/hover.png" alt="preview" class="preview" :class="{ 'img-lines' : viewSquares }">
                    <div class="">
                        <p class="main-descr-video" :class="{ 'main-descr-video-flex' : viewSquares }">
                            Как кормить кошку натуралкой | Перечень полезных для кош...
                        </p>
                        <p class="secondary-descr-video">
                            Ветеринария и Кормление соб...
                        </p>
                        <p class="secondary-descr-video">
                            786 тыс. просмотров
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/main/Header";
import SearchLine from "../components/searched/SearchLine";

export default {
    name: "Searched",
    data(){
      return{
          viewSquares: false,
      }
    },
    components: {
        Header, SearchLine
    }

}
</script>

<style scoped>
    .custom-result-line{
        display: flex;
        margin-top: 2.778vw;
        justify-content: space-between;
    }

    .custom-result-line__left-side{
        display: flex;
        align-items: center;
    }

    h3, .query, .queries-amount{
        font-size: 1.111vw;
    }

    h3{
        margin-right: .3vw;
        font-weight: 400;
    }

    .query{
        margin-right: 1.042vw;
        font-weight: 500;
    }

    .queries-amount{
        color: rgba(23, 23, 25, 0.3);
    }

    .result-view{
        width: 1.667vw;
        margin-left: 1.042vw;
        cursor: pointer;
    }

    .cards-video{
        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin-top: 1.389vw;
    }

    
    .lines{
        display: block;
    }

    .line{
        display: flex;
        height: 6.111vw !important;
    }

    .main-descr-video-flex{
        width: 35.417vw !important;
    }

    .img-lines{
        margin-right: 1.389vw;
        width: 10.903vw !important;
        height: 6.111vw !important;
    }



    .card-video{
        width: 17.014vw;
        height: 15.694vw;
        margin-bottom: 1.389vw;
    }

    .preview{
        width: 17.014vw;
        height: 9.583vw;
    }

    .main-descr-video{
        width: 100%;
        height: 2.222vw;
        font-size: .972vw;
        font-weight: 500;
        line-height: 1.111vw;
        margin-top: .556vw;
        margin-bottom: .556vw;
    }

    .secondary-descr-video{
        color:  rgba(23, 23, 25, 0.3);
        font-size: .972vw;
    }

    @media screen and (max-width: 768px){
        .custom-result-line{
            margin-top: 5.208vw;
        }

        h3, .query, .queries-amount{
            font-size: 2.083vw;
        }

        .query{
            margin-right: 1.953vw;
        }

        .result-view{
            width: 3.125vw;
            margin-left: 1.953vw;
        }

        .cards-video{
            margin-top: 5.208vw;
        }

        .line{
            height: 11.458vw !important;
        }

        .img-lines{
            margin-right: 2.604vw;
            width: 20.443vw !important;
            height: 11.458vw !important;
        }

        .main-descr-video-flex{
            width: 66.406vw !important;
        }


        .card-video{
            width: 28.125vw;
            height: 29.427vw;
            margin-bottom: 2.604vw;
        }

        .preview{
            width: 28.125vw;
            height: 17.969vw;
        }

        .main-descr-video{
            width: 100%;
            height: 4.036vw;
            font-size: 1.823vw;
            line-height: 2.083vw;
            margin-top: 1.042vw;
            margin-bottom: 1.042vw;
        }

        .secondary-descr-video{
            font-size: 1.823vw
        }
    }

    @media screen and (max-width: 320px){
        .custom-result-line{
            margin-top: 12.5vw;
        }

        h3, .query, .queries-amount{
            font-size: 3.75vw;
        }

        .query{
            margin-right: 1.953vw;
        }

        .custom-result-line__left-side{
            width: 70vw;
            flex-wrap: wrap;
        }

        .result-view{
            width: 7.5vw;
            margin-left: 4.688vw;
        }

        .cards-video{
            margin-top: 12.5vw
        }

        .line{
            height: 22.5vw !important;
        }

        .img-lines{
            margin-right: 4.688vw;
            width: 37.5vw !important;
            height: 22.5vw !important;
        }

        .main-descr-video-flex{
            width: 52.813vw !important;
        }



        .card-video{
            width: 100%;
            height: 71.25vw;
            margin-bottom: 2.5vw;
        }

        .preview{
            width: 100%;
            height: 43.125vw;
        }

        .main-descr-video{
            width: 100%;
            height: 10vw;
            font-size: 4.375vw;
            line-height: 5vw;
            margin-top: 2.5vw;
            margin-bottom: 2.5vw;
        }

        .secondary-descr-video{
            font-size: 4.375vw;
        }
    }

</style>