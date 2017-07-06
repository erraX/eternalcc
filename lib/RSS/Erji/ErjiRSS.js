import RSS from '../RSS'

export default class AiWanRSS extends RSS {
    getItemsEl() {
        return this.$('tbody[id^="normalthread"]')
    }
}
