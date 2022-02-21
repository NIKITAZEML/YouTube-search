<template>
    <header>
        <div class="container">
            <div class="header__left-side">
                <svg class="header__logo" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M59.1487 43.5668L24.683 60.956V79.3991L59.1487 62.0099V43.5668Z" fill="#1390E5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M24.6831 26.1787L59.1488 43.5679V62.0111L24.6831 44.6218V26.1787Z" fill="#1180CB"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M59.1487 8.79065L24.683 26.1799V44.623L59.1487 27.2338V8.79065Z" fill="#35A2EC"/>
                </svg>
                <router-link to="/Search">
                    <button class="header__link">
                        Поиск
                    </button>
                </router-link>
                <button class="header__favorites clicked-btn__header">
                    Избранное
                </button>
            </div>
            <router-link to="/">
                <button class="exit-btn">
                    Выйти
                </button>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    header{
        background-color: #fff;
        border-bottom: .1vw solid #f1f1f1;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__logo {
        width: 3.333vw;
    }

    .header__left-side{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 19vw;
    }

    .header__link, .exit-btn{
        width: 4.167vw;
    }

    .header__link, .exit-btn, .header__favorites{
        background-color: #fff;
        border: none;
        color: rgba(39, 39, 39, 0.3);
        font-size: 1.25vw;
        height: 5.556vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1vw;
    }

    .header__favorites{
        width: 6.458vw;
    }
    
    .clicked-btn__header{
        color: #1390E5;
        border-bottom: solid .2vw #1390E5;
    }

    .exit-btn{
        color: #1390E5;
    }

    @media screen and (max-width: 768px) {
        .header__logo {
            width: 6.25vw;
        }


        .header__left-side{
            width: 39.193vw;
        }

        .header__link, .exit-btn, .header__favorites{
            font-size: 2.344vw;
            height: 10.417vw;
        }

        .header__favorites{
            width: 12.109vw;
        }

        .header__link, .exit-btn{
            width: 7.813vw;
        }

        .clicked-btn__header{
            border-bottom: solid .4vw #1390E5;
        }
    }

    @media screen and (max-width: 320px) {
        .header__logo {
            width: 15vw;
        }

        .header__left-side{
            width: 65.313vw;
        }

        .header__link, .exit-btn, .header__favorites{
            font-size: 4.375vw;
            height: 20.625vw;
        }

        .header__favorites{
            width: 29.063vw;
        }

        .header__link, .exit-btn{
            width: 18.75vw;
        }

        .clicked-btn__header{
            border-bottom: solid 1vw #1390E5;
        }
    }
</style>