import AppPurchase from './purchase.vue';
import NewInvoice from './new-invoice/new-invoice.vue';
import InvoiceList from './invoice-list/invoice-list.vue';

const purchaseRoutes = [
  {
    path: '/purchase',
    component: AppPurchase,
    meta: { title: 'Purchase' },
    children: [
      {
        path: 'new-invoice',
        name: 'new-invoice',
        meta: { title: 'New Invoice' },
        component: NewInvoice
      },
      {
        path: 'invoice-list',
        name: 'invoice-list',
        meta: { title: 'Invoice List' },
        component: InvoiceList
      }
    ]
  },
];

export default purchaseRoutes;
