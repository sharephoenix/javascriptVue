
const CustomSdk = Symbol(CustomSdk)
const XHBShare = Symbol(XHBShare)

class Sdk {
    constructor () {

    }

    [CustomSdk] ({module, event, params}) {
        console.log('CustomSdk' + JSON.stringify({module, event, params}))
    }

    [XHBShare] ({module, event, params}) {
        console.log('XHBShare' + JSON.stringify({module, event, params}))
    }

    test ({module, event, params}) {
        this[module]({module, event, params})
        console.log(JSON.stringify({module, event, params}))
    }

}

export default new Sdk()
