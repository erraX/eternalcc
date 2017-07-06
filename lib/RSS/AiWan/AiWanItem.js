import Item from '../Item'

export default class AiWanItem extends Item {
    getItemData() {
        if (!this.$el) {
            return
        }

        return {
            title: this.$el.text(),
            description: this.$el.text(),
            url: this.$el.attr('href'),
        }
    }
}
