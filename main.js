function encode(value){
    let type = typeof value;
    if(value === null){
        return "null";
    } else if(type === "undefined"){
        return "undefined";
    } else if(type === "string"){
        return '"' + value + '"';
    } else if(type === "number" || type === "boolean" || type === "function"){
        return value.toString();
    } else if(type === "object"){
        if(value instanceof Date || value instanceof Buffer){
            return '"' + value.toString() + '"';
        } else if(Array.isArray(value)){
            let arrStr = '[';
            for(let i = 0; i < value.length; i++){
                arrStr += (i ? ', ' : '') + encode(value[i]);
            }
            return arrStr + ']';
        } else {
            let objArr = [];
            for (let k in value) {
                objArr.push(`${encode(k)}:${encode(value[k])}`)
            }
            return "{" + objArr.join(', ') + "}";
        }
    }
}

function decode(str){
    return eval('(' + str + ')');
}


exports.encode = encode;
exports.decode = decode;