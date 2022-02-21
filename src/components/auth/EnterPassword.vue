<template>
    <div class="enter-password">
        <label class="label-enter-password" for="input-password">Пароль</label>
        <input :type="inputType" class="input-password" id="input-password"
               @focus="focusPassword = !focusPassword"
               :class="{ clicked :  focusPassword}"
               @blur="focusPassword = !focusPassword" >
        <svg class="enter-password__eye-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             v-if="openedPassword"
             @click="openedPassword = !openedPassword; inputType = 'password'"
             >
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg class="enter-password__eye-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             v-else
             @click="openedPassword = !openedPassword; inputType = 'text'">
            <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1L23 23" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: "EnterPassword",
    data () {
        return{
            focusPassword: false,
            openedPassword: false,
            inputType: 'password',
        }
    }
}
</script>

<style scoped>
.enter-password{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.778vw;
}

.label-enter-password{
    color: rgba(23, 23, 25, .3);
    font-size: 1.111vw;
}

.input-password{
    width: 23.194vw;
    height: 3.333vw;
    font-size: 1.389vw;
    padding: .833vw 1.042vw .833vw 1.042vw;
}

.enter-password__eye-icon{
    width: 1.667vw;
    cursor: pointer;
    position: absolute;
    right: 1.111vw;
    top: 2.431vw;
}


@media screen and (max-width: 768px) {
    .enter-password{
        margin-bottom: 2.604vw;
    }

    .label-enter-password{
        font-size: 2.083vw;
    }

    .input-password{
        width: 43.490vw;
        height: 6.250vw;
        font-size: 2.604vw;
        padding: 1.563vw 1.953vw 1.563vw 1.953vw;
    }

    .enter-password__eye-icon{
        width: 3.125vw;
        right: 1.953vw;
        top: 4.427vw;
    }
}

@media screen and (max-width: 320px) {
    .enter-password {
        margin-bottom: 10vw;
    }

    .label-enter-password {
        font-size: 5vw;
    }

    .input-password {
        width: 88.75vw;
        height: 15vw;
        font-size: 5vw;
        padding: 3.750vw 4.688vw 3.750vw 4.688vw ;
    }

    .enter-password__eye-icon{
        width: 7.5vw;
        right: 4.688vw;
        top: 10.625vw;
    }
}
</style>