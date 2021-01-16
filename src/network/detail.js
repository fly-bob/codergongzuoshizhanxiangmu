import { request } from './request.js'
export function getDetailPageData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function recommendationBarData() {
    return request({
        url: '/recommend'
    })
}
export class DetailPageInfo {
    constructor(res) {
        this.oldPrice = res.result.itemInfo.oldPrice
        this.nowPrice = res.result.itemInfo.price
        this.swiperPicture = res.result.itemInfo.topImages
        this.description = res.result.detailInfo.desc
        this.title = res.result.itemInfo.title
        this.salesQuantity = res.result.columns[0]
        this.collection = res.result.columns[1]
        this.service = res.result.shopInfo.services
        this.logo = res.result.shopInfo.shopLogo
        this.merchantName = res.result.shopInfo.name
        this.totalSalesVolume = res.result.shopInfo.cSells
        this.totalStock = res.result.shopInfo.cGoods
        this.merchandiseScore = res.result.shopInfo.score
    }
}

export class GoodsSize {
    constructor(res) {
        this.info = res.result.itemParams.info.set
        this.rules = res.result.itemParams.rule.tables[0]
    }
}