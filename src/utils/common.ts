import Vue from 'vue'
import { message } from 'ant-design-vue'
let lessNodesAppended = false

/**
 * @description event bus
 */
const bus = new Vue()

/**
 * @param {String} primaryColor
 * @description 更新主题
 */
const updateTheme = (primaryColor = '#2F54E8') => {
    const hideMessage:any = message.loading('正在编译主题！', 0)
  function buildIt() {
    if (!((window as any).less)) {
      return
    }
    setTimeout(() => {
      (window as any).less
        .modifyVars({
          '@primary-color': primaryColor
        })
        .then(() => {
            hideMessage()
        })
        .catch(() => {
          message.error('Failed to update theme')
          hideMessage()
        })
    }, 200)
  }
  if (!lessNodesAppended) {
    // insert less.js and color.less
    const lessStyleNode = document.createElement('link')
    const lessConfigNode = document.createElement('script')
    const lessScriptNode = document.createElement('script')
    lessStyleNode.setAttribute('rel', 'stylesheet/less')
    lessStyleNode.setAttribute('href', '/vue-admin-preview/color.less')
    lessConfigNode.innerHTML = `
    window.less = {
      async: true,
      env: 'production',
      javascriptEnabled: true
    };
  `
    lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'
    lessScriptNode.async = true
    lessScriptNode.onload = () => {
      buildIt()
      lessScriptNode.onload = null
    }
    document.body.appendChild(lessStyleNode)
    document.body.appendChild(lessConfigNode)
    document.body.appendChild(lessScriptNode)
    lessNodesAppended = true
  } else {
    buildIt()
  }
}

class AliplayerOnline {
  id:string
  scriptSrc:string = 'https://g.alicdn.com/de/prismplayer/2.8.8/aliplayer-min.js'
  linkHref:string= 'https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css'
  componentSrc:string = '/aliyun_player_component.js'
  constructor(id:string) {
    this.id = id
    this.init()
  }
  init() {
    console.log('触发')
    this.initScript()
    this.initLink()
    this.initComponent()
  }
  initScript() {
    const aliplayerScript = document.getElementById(this.id + 'script')
    if (aliplayerScript) return
    const aliplayerNewcript = document.createElement('script')
    aliplayerNewcript.type = 'text/javascript'
    aliplayerNewcript.src = this.scriptSrc
    aliplayerNewcript.async = true
    aliplayerNewcript.id = this.id + 'script'
    document.body.appendChild(aliplayerNewcript)
  }
  initComponent() {
    const aliplayerComponent = document.getElementById(this.id + 'component')
    if (aliplayerComponent) return
    const aliplayerNewComponent = document.createElement('script')
    aliplayerNewComponent.type = 'text/javascript'
    aliplayerNewComponent.src = this.componentSrc
    aliplayerNewComponent.async = true
    aliplayerNewComponent.id = this.id + 'component'
    document.body.appendChild(aliplayerNewComponent)
  }
  initLink() {
    const aliplayerLink = document.getElementById(this.id + 'link')
    console.log(aliplayerLink)
    if (aliplayerLink) return
    const aliplayerNewLink = document.createElement('link')
    aliplayerNewLink.href = 'https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css'
    aliplayerNewLink.rel = 'stylesheet'
    aliplayerNewLink.type = 'text/css'
    aliplayerNewLink.id = this.id + 'link'
    document.getElementsByTagName('head')[0].appendChild(aliplayerNewLink)
  }
  remove() {
    const aliplayerScript = document.getElementById(this.id + 'script')
    const aliplayerComponent = document.getElementById(this.id + 'component')
    const aliplayerLink = document.getElementById(this.id + 'link')
    aliplayerScript && document.body.removeChild(aliplayerScript as HTMLElement)
    aliplayerComponent && document.body.removeChild(aliplayerComponent as HTMLElement)
    aliplayerLink && document.getElementsByTagName('head')[0].removeChild(aliplayerLink as HTMLElement)
  }
}
export {
    bus,
    updateTheme,
    AliplayerOnline
}
