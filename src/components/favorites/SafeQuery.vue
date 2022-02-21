<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container borr-10">
                    <div class="modal-header">
                        <slot name="header">
                            Сохранить запрос
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div class="input-container">
                                <label for="query" class="modal__label">
                                    Запрос
                                </label>
                                <input type="text" class="modal-body__input" placeholder="Чем кормить кота" id="query">
                            </div>
                            <div class="input-container">
                                <label for="name" class="modal__label">
                                    <span class="name__red-star">
                                        *
                                    </span>
                                    Название
                                </label>
                                <input type="text" class="modal-body__input" placeholder="Укажите название" id="name">
                            </div>
                           <custom-select :options="options" :default="'Без сортировки'"></custom-select>
                            <div class="range-container">
                                <div class="range-left">
                                    <label for="amount" class="modal__label">
                                        Максимальное количество
                                    </label>
                                    <input type="range" class="range-input" placeholder="Укажите название" id="amount" v-model="range" max="50" min="1">
                                </div>
                                <div class="range-right">
                                    <input type="number" class="range-number" v-model="range" max="50" min="1">
                                </div>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-button-no borr-10" @click="$emit('closeno')">
                                Не сохранять
                            </button>
                            <button class="modal-default-button borr-10" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import CustomSelect from "./CustomSelect";
export default {
    name: "SafeQuery",
    components: {CustomSelect},
    data(){
      return{
          range: 25,
          options: ['Без сортировки', 'По дате', 'По умолчанию', 'По количеству слов']
      }
    },
    watch:{
        range(){
          if(this.range > 50){
              this.range = 50;
          } else if(this.range <= 0){
              this.range = 1;
          }
      }
    },
    props:{
        showModal: Boolean,
    },
}
</script>

<style scoped>

    .modal-header{
        font-weight: 500;
        font-size: 1.25vw;
        text-align: center;
    }

    .modal-body{
        margin-top: 2.5vw;
        margin-bottom: 2.5vw;
    }

    .modal__label{
        font-size: 1.111vw;
    }
    
    .input-container{
        display: flex;
        flex-direction: column;
    }

    .name__red-star{
        color: #FF0000;
    }

    .range-container{
        margin-top: 1.667vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-left{
        align-self: flex-start;
        display: flex;
        flex-direction: column;
    }

    .modal-body__input{
        height: 3.333vw;
        padding: 0.833vw 1.042vw 0.833vw 1.042vw;
        margin-bottom: 1.667vw;
        font-size: 1.389vw;
    }

    .range-number{
        width: 6.944vw;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.333vw;
        font-size: 1.389vw;
        padding: .833vw 2.014vw .833vw 2.5vw;
    }

    .range-input{
        -webkit-appearance: none;
        height: .417vw;
        margin-top: .833vw;
        width: 21.528vw;
        background-color: #1390E5;
    }

    .range-input::-webkit-slider-thumb{
        -webkit-appearance: none;
        background-color: #fff;
        border-radius: 100%;
        border: .2vw solid #1390E5;
        height: 1.250vw;
        width: 1.250vw;
    }

    .range-input::-moz-range-progress{
        background-color: #1390E5;
    }

    .modal-button-no, .modal-default-button{
        width: 14.583vw;
        height: 3.611vw;
        font-size: 1.389vw;
    }

    .modal-button-no{
        background-color: #fff;
        border: .1vw #1390E5 solid;
        color: #1390E5;
    }


    .modal-mask {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(117, 199, 255, 0.7);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 35.417vw;
        height: 39.792vw;
        margin: 0 auto;
        padding: 2.5vw 2.778vw 2.5vw 2.778vw;
        background-color: #fff;
        border-radius: .694vw;
        box-shadow: 0 .694vw 3.472vw rgba(19, 144, 229, 0.8);
        transition: all 0.3s ease;
    }

    .modal-header h3 {
        color: #42b983;
    }


    .modal-default-button {
        float: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    
    @media screen and (max-width: 768px) {
        .modal-header{
            font-size: 2.344vw;
        }

        .modal-body{
            margin-top: 4.688vw;
            margin-bottom: 4.688vw;
        }

        .modal__label{
            font-size: 2.083vw;
        }

        .range-container{
            margin-top: 3.125vw;
        }

        .modal-body__input{
            height: 6.25vw;
            padding: 1.563vw 1.953vw 1.563vw 1.953vw;
            margin-bottom: 3.125vw;
            font-size: 2.604vw;
        }

        .range-number{
            width: 13.021vw;
            height: 6.250vw;
            font-size: 2.604vw;
            padding: 1.563vw 3.906vw 1.563vw 5vw;
        }

        .range-input{
            height: .781vw;
            margin-top: 2.604vw;
            width: 40.365vw;
        }

        .range-input::-webkit-slider-thumb{
            border: .4vw solid #1390E5;
            height: 2.083vw;
            width: 2.083vw;
        }

        .modal-button-no, .modal-default-button{
            width: 27.344vw;
            height: 6.771vw;
            font-size: 2.604vw;
        }

        .modal-button-no{
            border: .3vw #1390E5 solid;
        }

        .modal-container {
            width: 66.406vw;
            height: 74.609vw;
            padding: 4.688vw 5.208vw 4.688vw 5.208vw;
        }
    }

    @media screen and (max-width: 320px) {
        .modal-header{
            font-size: 5.625vw;
        }

        .modal-body{
            margin-top: 9.375vw;
            margin-bottom: 9.375vw;
        }

        .modal__label{
            font-size: 5vw;
        }

        .range-container{
            margin-top: 7.5vw;
        }

        .modal-body__input{
            height: 15vw;
            padding: 3.75vw 4.688vw 3.75vw 4.688vw;
            margin-bottom: 7.5vw;
            font-size: 6.250vw;
        }

        .range-number{
            width: 31.25vw;
            height: 15vw;
            font-size: 6.250vw;
            padding: 3.75vw 10.625vw 3.75vw 12vw;
        }

        .range-input{
            height: 1.875vw;
            margin-top: 5vw;
            width: 53.125vw;
        }

        .range-input::-webkit-slider-thumb{
            border: .8vw solid #1390E5;
            height: 5.625vw;
            width: 5.625vw;
        }

        .modal-button-no, .modal-default-button{
            width: 43.438vw;
            height: 16.25vw;
            font-size: 5.625vw;
        }

        .modal-button-no{
            border: .8vw #1390E5 solid;
        }

        .modal-container {
            width: 95vw;
            height: 171.875vw;
            padding: 6.875vw 3.125vw 6.875vw 3.125vw ;
        }
    }
</style>