import form_config_data from './init_form_config.json'
import init_layout from './init_layout.json'
import sidebar_config_data from './init_sidebar_config.json'
import pricing_gift from './gifts_pricing_plan.json'


const DataCollector = new Map([
    ['/form_config', form_config_data],
    ['/layout_config', init_layout],
    ['/sidebar_config', sidebar_config_data],
    ['/fetchPringGifts/1', pricing_gift['1']],
    ['/fetchPringGifts/2', pricing_gift['2']],
    ['/fetchPringGifts/3', pricing_gift['3']]
])

function asyncGetCall(path) {
    console.log(`API-mock: request in for '${path}'`)
    return new Promise((resolve, reject) => {
        const data = DataCollector.get(path)
        setTimeout(() => {
            if (data) {
                resolve({ status: 200, data })
            } else {
                reject(Error(`API-mock error 404: No resource at '${path}'.`))
            }
        },300)
    })
}

export default {
    asyncGetCall
}