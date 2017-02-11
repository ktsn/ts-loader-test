export default 'Test'

declare const module: any
if (module.hot) {
  module.hot.accept()
}
