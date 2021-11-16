import components from '@/components'
export default class WebUI{
    constructor(name){
        this._init(name || '')
    }
    _init(name){
        if(name === ''){
            components.forEach(e => {
                this._loadOneComponent(e)
            })
        } else {
            const data = components.find(e=>e.name === name)
            if(data){
                this._loadOneComponent(data)
            } else {
                console.warn(`web-ui does have this component,please tell us!`)
            }
        }
    }
    _loadOneComponent(Comp){
        if(!customElements.get(Comp.name)){
            customElements.define(Comp.name, Comp.component);
        } else {
            console.warn(`web-ui has loaded ${Comp.name}`)
        }
    }
}
if(process.env.NODE_ENV === 'development'){
    new WebUI()
}
