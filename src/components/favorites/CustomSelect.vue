<template>
    <div class="sort-by">
        <div class="sort-by__haeding">
            Сортировать по
        </div>
        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
            <div class="selected borr-10" :class="{ open, 'borr-10': open }" @click="open = !open">
                {{ selected }}
            </div>
            <div class="items" :class="{ selectHide: !open }">
                <div
                    v-for="(option, i) of options"
                    :key="i"
                    @click="
              selected = option;
              open = false;
              $emit('input', option);
            "
                >
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>

<style scoped>
    .custom-select {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        height: 3.333vw;
        line-height: 2.8vw;
    }

    .custom-select .selected {
        background-color: #fff;
        border: .1vw solid rgba(23, 23, 25, 0.3);;
        color: #000;
        font-size: 1.389vw;
        padding-left: 1vw;
        cursor: pointer;
        user-select: none;
    }

    .custom-select .selected.open {
        border: .1vw solid rgba(23, 23, 25, 0.3);
    }

    .custom-select .selected:after {
        position: absolute;
        content: "";
        top: 1.2vw;
        border: .694vw solid transparent;
        border-top: .694vw solid #D1D1D1;
        right: 2vw;
        width: 1vw;
        height: 1vw;
    }

    .sort-by__haeding{
        font-size: 1.111vw;
    }

    .custom-select .items {
        color: #fff;
        border-radius: 0 0 .3vw .3vw;
        overflow: hidden;
        border-right: .1vw solid rgba(23, 23, 25, 0.3);
        border-left: .1vw solid rgba(23, 23, 25, 0.3);
        border-bottom: .1vw solid rgba(23, 23, 25, 0.3);
        position: absolute;
        background-color: #fff;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .custom-select .items div {
        color: #000;
        font-size: 1.389vw;
        padding-left: 1vw;
        cursor: pointer;
        user-select: none;
    }

    .custom-select .items div:hover {
        background-color: #1390E5;
        color: #fff;
    }

    .selectHide {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .custom-select {
            height: 6.250vw;
            line-height: 5.7vw;
        }

        .custom-select .selected {
            background-color: #fff;
            border: .2vw solid rgba(23, 23, 25, 0.3);;
            font-size: 2.604vw;
            padding-left: 1.953vw;
        }

        .custom-select .selected.open {
            border: .2vw solid rgba(23, 23, 25, 0.3);
        }

        .custom-select .selected:after {
            top: 2.9vw;
            border: 1.2vw solid transparent;
            border-top: 1.3vw solid #D1D1D1;
            right: 1.953vw;
        }

        .sort-by__haeding{
            font-size: 2.083vw;
        }

        .custom-select .items div {
            font-size: 2.604vw;
            padding-left: 1.953vw;
        }
    }

    @media screen and (max-width: 320px) {
        .custom-select {
            height: 15vw;
            line-height: 14vw;
        }

        .custom-select .selected {
            background-color: #fff;
            border: .2vw solid rgba(23, 23, 25, 0.3);;
            font-size: 6.250vw;
            padding-left: 4.688vw;
        }

        .custom-select .selected.open {
            border: .2vw solid rgba(23, 23, 25, 0.3);
        }

        .custom-select .selected:after {
            top: 6.7vw;
            border: 2.5vw solid transparent;
            border-top: 3.2vw solid #D1D1D1;
            right: 4.688vw;
        }

        .sort-by__haeding{
            font-size: 5.625vw;
        }

        .custom-select .items div {
            font-size: 6.250vw;
            padding-left: 4.688vw;
        }
    }
</style>