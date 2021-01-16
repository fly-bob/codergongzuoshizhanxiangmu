import Toast from './Toast.vue'
let a = {}
a.install = (Vue) => {
    console.log('```````````````````````````````');
    const ToastConstructor = Vue.extend(Toast)
    const b = new ToastConstructor()
    b.$mount(document.createElement('div'))
    document.body.appendChild(b.$el)
    Vue.prototype.$toast = b
}
export default a