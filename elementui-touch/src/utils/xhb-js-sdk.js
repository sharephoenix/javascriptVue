
const _initJSBridge = Symbol('_initJSBridge')
const _hbJSBridge = Symbol('_hbJSBridge')
// const _nativeBridge = Symbol('_nativeBridge')
// const _request = Symbol('_request')

class XHBSdk {
  constructor () {
    this.version = '1.0.1'
  }

   /**
   * 初始化JSBridge
   * @param {*} callback
   */
  [_initJSBridge] (callback) {
    const userAgent = navigator.userAgent
    let isAndroid = /(android)/gi.test(userAgent)
    let isiOS = /(iphone|ipad)/gi.test(userAgent)

    if (window.WebViewJavascriptBridge) return callback(WebViewJavascriptBridge) /* eslint-disable-line */
    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(callback)

    window.WVJBCallbacks = [callback]
    const WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'

    if (isAndroid) {
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    } else if (isiOS) {
      WVJBIframe.src = 'https://__BRIDGE_LOADED__'
    }

    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }

 /**
   * 基本调用JSBridge方式
   * @param {*} moduleName 模块名
   * @param {*} options 其他选项
   */
  [_hbJSBridge] ({moduleName, options}) {
    options = Object.assign(
      {
        reqId: '',
        module: moduleName,
        event: '',
        params: {}
      },
      options
    )
    alert(moduleName)
    // eslint-disable-next-line 
    return new Promise((resolve, reject) => {
      this[_initJSBridge](bridge => {
        bridge.callHandler(moduleName, options, res => {
          resolve(JSON.parse(res))
        })
      })
    })
  }
  // eslint-disable-next-line
  useJsbridge ({module, event, params}) {
    const modal = {
      moduleName: module,
      options: {module, event, params}
    }
    this[_hbJSBridge] (modal)
  }

  xhbSdk () {
    alert('sdk test 方法被调用了')
  }
}

export default new XHBSdk()