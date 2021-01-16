import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
    data() {
        return {
            backtopshow: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        returnTop() {
            this.$refs.scroll.returnToTop()
        }
    }
}