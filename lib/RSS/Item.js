export default class Item {
    constructor(rss, $el) {
        this.rss = rss
        this.$el = $el
    }

    add() {
        if (!this.rss || !this.rss.item) {
            return
        }

        const itemData = this.getItemData()
        this.rss.item(itemData)
    }

    getItemData() {
        throw new Error('`getItemData` must be override')
    }
}
