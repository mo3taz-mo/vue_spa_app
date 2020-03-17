<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item pl-3">
            <router-link :to="'/dashboard'">{{$t('Common.Dashboard')}}</router-link>
          </li>
          <li class="nav-item pl-3">
            <router-link :to="'/purchase/new-invoice'">{{$t('Common.NewInvoice')}}</router-link>
          </li>
          <li class="nav-item pl-3">
            <router-link :to="'/purchase/invoice-list'">{{$t('Common.InvoiceList')}}</router-link>
          </li>          
        </ul>
      </div>
    </nav>
</template>

<script src="./side-nav-bar.js"></script>
