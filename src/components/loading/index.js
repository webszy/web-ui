// https://www.ruanyifeng.com/blog/2019/08/web_components.html
// https://github.com/XboxYan/xy-ui/blob/master/components/xy-loading.js
// https://developers.google.com/web/fundamentals/web-components/customelements
// TODO: 封装常用loading+心形loading
// TODO: show=true时显示，等于false时隐藏
// TODO: 选择渐进增强式开发，第一步完成基础loading,
import config,{sizeMap} from './config'
import style from './style.css'
import {makeBoolean} from "../../utils"
const genDiv = className =>{
    const div = document.createElement('div')
    if(className){div.className=className}
    return div
}
class WbLoading extends HTMLElement {
    constructor() {
        super();
        // 1、读取参数
        const name = this.getAttribute('name')
        const size = this.getAttribute('size') || 'medium'
        const fullScreen = makeBoolean(this.getAttribute('fullScreen'))
        const show = makeBoolean(this.getAttribute('show'))
        const loadingBg = makeBoolean(this.getAttribute('loadingBg'))
        const loadingColor = makeBoolean(this.getAttribute('loadingColor'))
        console.log({
            name, size ,fullScreen,show,loadingBg
        })
        // 2、新建shadow dom
        const shadowRoot =this.attachShadow( { mode: 'closed' } )
        let template = document.createDocumentFragment()
        // 加载css
        const css = document.createElement('style')
        css.innerHTML = style
        template.appendChild(css)
        const { divCount } = this.getConfig(name)
        const screenDiv = genDiv('full-screen')
        const layerDiv = genDiv('wb-layer')
        const loadingDiv = genDiv('wb-loading')
        for(let i =0;i<divCount;i++){
            loadingDiv.appendChild(genDiv())
        }
        layerDiv.appendChild(loadingDiv)
        const text = this.getAttribute('text')
        if(text&&text!==''){
            const p = document.createElement('p')
            p.innerHTML=text
            layerDiv.appendChild(p)
        }
        template.appendChild(screenDiv)
        template.appendChild(layerDiv)
        shadowRoot.appendChild(template)
        this.style.display = show ? 'flex' : 'none'
        const loadingSize = sizeMap[size]
        if(size!=='medium'){
            this.style.setProperty('--wb-loading-size',loadingSize)
        }
        if(!fullScreen){
            this.style.setProperty('--wb-full-screen-width','0')
            this.style.setProperty('--wb-full-screen-height','0')
        } else {
            const fullScreenBg = this.getAttribute('fullScreenBg')
            if(fullScreenBg&&fullScreenBg!=='')  {
                this.style.setProperty('--wb-full-screen-bg',fullScreenBg)
            }
        }
        if(loadingBg&&this.getAttribute('loadingBg')!==''){
            this.style.setProperty('--wb-layer-bg',this.getAttribute('loadingBg'))
        }
        if(loadingColor&&this.getAttribute('loadingColor')!==''){
            this.style.setProperty('--wb-loading-color',this.getAttribute('loadingColor'))
        }
    }
    // 元素创建
    connectedCallback(){
        const globalName = this.getAttribute('global')
        if(!globalName||globalName===''||window.hasOwnProperty('globalName')){
            window.wbLoadingInstance = this
        } else {
            window[globalName] = this
        }
    }
    // 元素卸载
    disconnectedCallback(){}
    // props改变
    attributeChangedCallback(name, oldValue, newValue){
        console.log('attributeChangedCallback',name, oldValue, newValue)
        const latestVal = makeBoolean(newValue)
        if(name === 'show'){
            this.style.display = latestVal ? 'flex' : 'none'
        }
        if(name === 'size'){
            this.style.setProperty('--wb-loading-size',sizeMap[newValue])
        }
        if(name === 'fullScreen'){
            if(!latestVal){
                this.style.setProperty('--wb-full-screen-width','0')
                this.style.setProperty('--wb-full-screen-height','0')
            } else {
                this.style.setProperty('--wb-full-screen-width','100vw')
                this.style.setProperty('--wb-full-screen-height','100vh')
                const fullScreenBg = this.getAttribute('fullScreenBg')
                if(fullScreenBg&&fullScreenBg!=='')  {
                    this.style.setProperty('--wb-full-screen-bg',fullScreenBg)
                }
            }
        }
        if(name ==='loadingBg'&&latestVal&&this.getAttribute('loadingBg')!==''){
            this.style.setProperty('--wb-layer-bg',this.getAttribute('loadingBg'))
        }
        if(name ==='loadingColor'&&latestVal&&this.getAttribute('loadingColor')!==''){
            this.style.setProperty('--wb-layer-bg',this.getAttribute('loadingColor'))
        }
    }
    static get observedAttributes() { return ['show','size','fullScreen','loadingColor']; }
    get show(){
        return this.getAttribute('show') === 'true'
    }
    set show(value){
        if(value|| value === 'true'){
            this.style.display = 'block'
        } else {
            this.style.display = 'none'
        }
        this.setAttribute('show',value)
    }
    // 元素被转移了，dom树的改变
    adoptedCallback(){}
    getConfig(name){
        const info = config.find(e=>e.name === name)
        return info || config[0]
    }
}

export default {
    name:'wb-loading',
    component:WbLoading
}
