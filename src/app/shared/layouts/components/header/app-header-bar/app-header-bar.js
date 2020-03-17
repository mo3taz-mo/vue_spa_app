import i18n from '@/i18n'

localStorage.getItem('appLang') == 'en'
  || localStorage.getItem('appLang') == null
  || localStorage.getItem('appLang') == undefined ? import('./theme/header.scss') : import('./theme/header-rtl.scss')

export default {
  name: "app-header-bar",
  data() {
    return {
      languages: [
        {
          language: 'en',
          title: this.$i18n.t('Common.En')
        },
        {
          language: 'ar',
          title: this.$i18n.t('Common.Ar')
        }
      ],
      appLang: '',
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem('appLang', locale);
      location.reload();
    }
  },
  mounted() {
    if (
      localStorage.getItem('appLang') == 'en'
      || localStorage.getItem('appLang') == null
      || localStorage.getItem('appLang') == undefined
    ) {
      this.appLang = this.$i18n.t('Common.En');
      document.querySelector('html').setAttribute('lang', 'en');
      document.querySelector('html').setAttribute('dir', 'ltr');
      document.querySelector('body').classList.remove('rtl');
    } else {
      this.appLang = this.$i18n.t('Common.Ar');
      document.querySelector('html').setAttribute('lang', 'ar');
      document.querySelector('html').setAttribute('dir', 'rtl');
      document.querySelector('body').classList.add('rtl');
    }
  }
};