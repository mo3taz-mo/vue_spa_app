import { EventBus } from '@/services/event-bus.js';
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.js'


localStorage.getItem('appLang') == 'en'
    || localStorage.getItem('appLang') == null
    || localStorage.getItem('appLang') == undefined ? import('../theme/invoice.scss') : import('../theme/invoice-rtl.scss');



let newItem;
if (localStorage.getItem('newSavedData') === null || localStorage.getItem('newSavedData') === undefined) {
    newItem = '';
} else {
    newItem = JSON.parse(localStorage.getItem('newSavedData'));
}

export default {
    name: "app-invoice-list",
    data() {
        return {
            formData: [
                {
                    prefix: 'Sales-000',
                    invoiceNo: 'Sales-0001',
                    invoiceDate: '01/05/2019',
                    dueDate: '01/05/2019',
                    selected: '',
                    customerName: '',
                    customerAddress: '',
                    customerCountry: '',
                    notes: '',
                    productName: '',
                    qunatity: 0,
                    uom: '',
                    price: 0,
                    amount: 0
                },
                ...newItem
            ]
        }
    },
    methods: {
    },
    mounted() {
        EventBus.$on('new-data', (receivedData) => {
            if (receivedData) {
                this.formData.push(receivedData);
                localStorage.setItem('newSavedData', JSON.stringify(this.formData));
                console.log(this.formData);
            } else {
                return
            }
        });

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