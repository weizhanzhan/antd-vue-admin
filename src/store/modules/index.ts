const files = require.context('.', false, /\.ts$/)
const modules:any = {}
let exportModule = {}

files.keys().forEach(key => {
  if (key === './index.ts') return
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

exportModule = Object.assign({}, modules)

export default exportModule
