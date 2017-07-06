import Item from '../Item'

export default class ErjiItem extends Item {
    getItemData() {
        if (!this.$el) {
            return
        }

        var $link = this.$el.find('a[href^="forum.php?mod=viewthread"]');

        return {
            title: $link.text(),
            description: $link.text(),
            url: 'http://www.erji.net/' + $link.attr('href'),
        }
    }
}
