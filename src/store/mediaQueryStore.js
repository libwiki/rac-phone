import {defineStore} from "pinia";

export const useMediaQueryStore = defineStore('mediaQuery', {
    state() {
        return {
            width: true,
            height: true,
            isPc: true,
        }
    },
    actions: {
        updateMediaQuery(width, height) {
            this.width = width
            this.height = height
            this.isPc = width > 750;
        }
    }
})