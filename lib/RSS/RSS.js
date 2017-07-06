import _ from 'lodash'
import RssFeed from 'rss'
import Item from './Item'

const defaultOptions = {

    /**
     * feed options
     *
     * @type {Object}
     */
    feedOptions: {},

    /**
     * ItemType
     * @type {Item}
     */
     ItemType: Item,
}

export default class RSS {
    constructor($html, options) {
        this.$html = $html
        this.reset(options)
        this.initRSS()
        this.setItemType(this.options.ItemType)
        this.addItems()
    }

    $(selector) {
        return this.$html(selector)
    }

    reset(options) {
        options.feedOptions = _.extend({}, defaultOptions.feedOptions, options.feedOptions)
        _.defaults(options, defaultOptions)
        this.options = options
    }

    initRSS() {
        this.rss = new RssFeed(this.options.feedOptions)
    }

    setItemType(ItemType) {
        this.ItemType = ItemType
    }

    createItem(rss, $item) {
        if (!this.ItemType) {
            throw new Error('Should assign `ItemType`')
        }

        return new this.ItemType(rss, $item)
    }

    getItemsEl() {
        throw new Error('`getItemsEl` must be override')
    }

    addItems() {
        const $items = this.getItemsEl()

        $items.each((idx, item) => {
            const Item = this.createItem(this.rss, this.$html(item))
            Item.add()
        })
    }

    xml(indent) {
        return this.rss.xml({ indent })
    }
}
