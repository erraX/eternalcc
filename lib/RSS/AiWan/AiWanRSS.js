import RSS from '../RSS'

export default class AiWanRSS extends RSS {
    getItemsEl() {
        return this.$('.g-left .tab-target > li > a')
    }
}
