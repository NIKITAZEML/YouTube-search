<template>
    <div class="window-auth">
        <svg class="window-auth__logo" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1487 43.5668L24.683 60.956V79.3991L59.1487 62.0099V43.5668Z" fill="#1390E5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6831 26.1787L59.1488 43.5679V62.0111L24.6831 44.6218V26.1787Z" fill="#1180CB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1487 8.79065L24.683 26.1799V44.623L59.1487 27.2338V8.79065Z" fill="#35A2EC"/>
        </svg>
        <div class="auth__entrance-heading">
            Вход
        </div>
        <enter-login></enter-login>
        <enter-password></enter-password>
        <button class="entry-btn">
            Войти
        </button>
    </div>
</template>

<script>
import EnterLogin from './EnterLogin';
import EnterPassword from './EnterPassword';

export default {
    name: "AuthWindow",
    components:{
        EnterLogin, EnterPassword
    }
}
</script>

<style scoped>
    .window-auth{
        width: 35.417vw;
        height: 36.111vw;
        border-radius: 0.694vw;
        border: .1vw rgba(39, 39, 39, .1) solid;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;

        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }

    .window-auth__logo{
        width: 6.111vw;
        margin-top: 2.778vw;
        margin-bottom: 2.222vw;
    }

    .auth__entrance-heading{
        margin-bottom: 1.389vw;
        font-weight: 500;
        font-size: 1.25vw;
    }
    
    .entry-btn{
        color: #fff;
        font-size: 1.389vw;
        border-radius: .347vw;
        width: 12.222vw;
        height: 3.611vw;
        background-color: #1390E5;
        border: 0;
    }

    @media screen and (max-width: 768px) {
        .window-auth{
            width: 66.406vw;
            height: 67.708vw;
            border-radius: 1.302vw;
        }

        .window-auth__logo{
            width: 11.458vw;
            margin-top: 5.208vw;
            margin-bottom: 4.167vw;
        }

        .auth__entrance-heading{
            margin-bottom: 2.604vw;
            font-size: 2.344vw;
        }

        .entry-btn{
            font-size: 2.604vw;
            border-radius: .651vw;
            width: 22.917vw;
            height: 6.771vw;
        }
    }

    @media screen and (max-width: 320px) {
        .window-auth{
            margin-top: 7.5vw;
            width: 95vw;
            height: 162.5vw;
            border-radius: 3.125vw;
            position: static;
            top: 0;
            left: 0;
            margin-right: 2.5%;
            transform: none;
        }

        .window-auth__logo{
            width: 27.5vw;
            margin-top: 12.5vw;
            margin-bottom: 10vw;
        }

        .auth__entrance-heading{
            margin-bottom: 6.25vw;
            font-size: 5.625vw;
        }

        .entry-btn{
            font-size: 6.25vw;
            border-radius: 1.563vw;
            width: 55vw;
            height: 16.25vw;
        }
    }
</style>

