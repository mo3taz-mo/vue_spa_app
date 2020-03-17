localStorage.getItem('appLang') == 'en'
  || localStorage.getItem('appLang') == null
  || localStorage.getItem('appLang') == undefined ? import('./theme/sidebar.scss') : import('./theme/sidebar-rtl.scss')

export default {
  name: 'side-nav-bar'
}