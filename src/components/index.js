import ValidSlide from './ValidSlide/index.js'
import VueCrop from './VueCrop/index.js'

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.component(ValidSlide.name, ValidSlide)
  Vue.component(VueCrop.name, VueCrop)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  ValidSlide,
  VueCrop
}
