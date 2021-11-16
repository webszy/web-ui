const isColor = str=> str.startsWith('#')||str.startsWith('rgb')||str.startsWith('hsl')
export const makeBoolean = v => {
    switch(typeof(v)){
        case 'string':
            if(v==='' || v === 'true' || isColor(v) ){
                return true
            } else if(!isNaN(Number(v))){
             return Number(v) > 0
            } else {
                return false
            }
        case 'number':
            return v > 0
        case 'object':
            return !!v
        case 'function':
            return true
        case 'undefined':
            return false
        default:
            return false
    }
}
