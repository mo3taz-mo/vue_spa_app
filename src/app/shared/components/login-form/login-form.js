import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.js'

localStorage.getItem('appLang') == 'en'
    || localStorage.getItem('appLang') == null
    || localStorage.getItem('appLang') == undefined ? import('./theme/login-form.scss') : import('./theme/login-form-rtl.scss')


export default {
    name: 'login-form',
    data() {
        return {
            formData: {
                userName: '',
                password: ''
            }
        }
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.$router.push('/dashboard');
            }
            else {
                return
            }
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
    directives: {
    }
};
