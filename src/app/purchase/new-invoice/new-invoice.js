import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.js'
import { EventBus } from '@/services/event-bus.js';


localStorage.getItem('appLang') == 'en'
    || localStorage.getItem('appLang') == null
    || localStorage.getItem('appLang') == undefined ? import('../theme/invoice.scss') : import('../theme/invoice-rtl.scss');




export default {
    name: "app-new-invoice",
    data() {
        return {
            formData: {
                prefix: 'Sales-000',
                invoiceNo: '',
                invoiceDate: '',
                dueDate: '',
                selected: '',
                customerName: '',
                customerAddress: '',
                customerCountry: '',
                notes: '',
                productName: '',
                qunatity: '',
                uom: '',
                price: '',
                amount: ''
            },
            customerNames: [
                'Ahmed Ali',
                'Hossam Mohamed',
                'Cash',
                'Wael Ibrahim'
            ],
            countries: ['Egypt', 'UAE', 'KSA', 'USA'],
            products: ['product 1', 'product 2', 'product 3', 'product 4'],
            paymentOptions: [
                { value: 'a', text: 'Net 14 Days' },
                { value: 'b', text: 'Net 30 Days' }
            ],
            uomOptions: [
                { value: 'a', text: 'Box' },
                { value: 'b', text: 'KG' }
            ],
            taxOptions: [
                { value: 'a', text: '14%' },
                { value: 'b', text: '16%' }
            ]
        }
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                EventBus.$emit('new-data', this.formData);
                this.$router.push("/purchase/invoice-list");
                location.reload();
            }
            else {
                return
            }
        },
        updateQuantity() {
            this.formData.amount = this.formData.qunatity * this.formData.price;
        },
        updatePrice() {
            this.formData.amount = this.formData.qunatity * this.formData.price;
        }
    },
    computed: {


    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
    directives: {
    },
};