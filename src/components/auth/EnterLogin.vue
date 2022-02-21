<template>
    <div class="enter-login">
        <label class="label-enter-login" for="input-login">Логин</label>
        <input type="text" class="input-login" id="input-login"
               @focus="focusLogin = !focusLogin"
               :class="{ clicked :  focusLogin}"
                @blur="focusLogin = !focusLogin" >
    </div>
</template>

<script>
export default {
    name: "InputLogin",
    data () {
        return{
            focusLogin: false,
        }
    }
}
</script>

<style scoped>
    .enter-login{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.389vw;
    }

    .label-enter-login{
        color: rgba(23, 23, 25, .3);
        font-size: 1.111vw;
    }

    .input-login{
        width: 23.194vw;
        height: 3.333vw;
        font-size: 1.389vw;
        padding: .833vw 1.042vw .833vw 1.042vw;
    }

    @media screen and (max-width: 768px) {
        .enter-login{
            margin-bottom: 2.604vw;
        }

        .label-enter-login{
            font-size: 2.083vw;
        }

        .input-login{
            width: 43.490vw;
            height: 6.250vw;
            border-radius: 1.302vw;
            font-size: 2.604vw;
            padding: 1.563vw 1.953vw 1.563vw 1.953vw;
        }
    }

    @media screen and (max-width: 320px) {
        .enter-login {
            margin-bottom: 10vw;
        }

        .label-enter-login {
            font-size: 5vw;
        }

        .input-login {
            width: 88.75vw;
            height: 15vw;
            border-radius: 3.125vw;
            font-size: 5vw;
            padding: 3.750vw 4.688vw 3.750vw 4.688vw ;
        }
    }
</style>