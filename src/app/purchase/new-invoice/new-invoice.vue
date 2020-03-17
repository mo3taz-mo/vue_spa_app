<template>
        <div class="">
        <div class="row">
            <div class="col-md-12">
                    <ValidationObserver ref="observer" v-slot="{ }" @submit.prevent="submit()">
                        <h2>{{$t('Common.NewInvoice')}}</h2>
                        <hr>
                        <div class="row">
                            <div class="col">
                                <ValidationProvider class="form-group" rules="required"
                                                    v-slot="{ errors }" 
                                    name="invoiceNo">
                                    <label for="invoiceNo">
                                    {{$t('Common.invoiceNo')}}
                                    </label>
                                    <input id="invoiceNo"
                                    type="text"
                                    v-model.lazy="formData.invoiceNo"
                                    :placeholder="$t('Common.invoiceNo')"
                                    :class="{'border-danger': (errors[0]), 'form-control mb-2': true}"
                                    :maxlength="250"
                                     />
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    rules="required"
                                                    v-slot="{ errors }" name="invoiceDate">
                                        <label for="invoiceDate">
                                        {{$t('Common.invoiceDate')}}
                                        </label>
                                    <b-form-datepicker id="invoiceDate" v-model="formData.invoiceDate"
                                                    :placeholder="$t('Common.invoiceDate')"
                                                    :class="{'border-danger': (errors[0]), 'form-control mb-2': true}"></b-form-datepicker>
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>                                
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    name="dueDate">
                                        <label for="dueDate">
                                        {{$t('Common.dueDate')}}
                                        </label>
                                    <b-form-datepicker id="dueDate" v-model="formData.dueDate"
                                                    :placeholder="$t('Common.dueDate')"
                                                    class="form-control"></b-form-datepicker>
                                </ValidationProvider>                                  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <ValidationProvider class="form-group"
                                    rules="required"
                                    v-slot="{ errors }" name="paymentTerms">
                                    <label for="paymentTerms">
                                    {{$t('Common.paymentTerms')}}
                                    </label>
                                    <b-form-select  v-model.lazy="formData.selected"
                                    id="paymentTerms" 
                                    :placeholder="$t('Common.paymentTerms')"
                                    :class="{'border-danger': (errors[0]), 'form-control mb-2': true}"
                                                    :options="paymentOptions"></b-form-select>
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    rules="required"
                                                    v-slot="{ errors }" name="customerName">
                                    <label for="customerName">
                                    {{$t('Common.customerName')}}
                                    </label>                                                    
                                    <b-form-input list="customerName"
                                                v-model.lazy="formData.customerName"
                                                :placeholder="$t('Common.customerName')"
                                                :class="{'border-danger': (errors[0]), 'form-control': true}"></b-form-input>
                                    <datalist id="customerName">
                                        <option>Select Customer</option>
                                        <option :key="customerName" v-for="customerName in customerNames">{{ customerName }}</option>
                                    </datalist>
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group mb10"
                                                    name="customerAddress">
                                    <label for="customerAddress">
                                        {{$t('Common.customerAddress')}}
                                    </label>
                                    <input id="customerAddress"
                                        type="text"
                                        v-model.lazy="formData.customerAddress"
                                        :placeholder="$t('Common.customerAddress')"
                                        class="form-control"
                                        :maxlength="500">
                                </ValidationProvider>
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    rules="required"
                                                    v-slot="{ errors }" name="customerCountry">
                                    <label for="customerCountry">
                                    {{$t('Common.customerCountry')}}
                                    </label>                                                    
                                    <b-form-input list="customerCountry"
                                                v-model.lazy="formData.customerCountry"
                                                :placeholder="$t('Common.customerCountry')"
                                                :class="{'border-danger': (errors[0]), 'form-control': true}"></b-form-input>
                                    <datalist id="customerCountry">
                                        <option>Select Country</option>
                                        <option :key="country" v-for="country in countries">{{ country }}</option>
                                    </datalist>
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <label for="Notes">{{$t('Common.Notes')}}</label>
                                <b-textarea v-model.lazy="formData.notes"
                                id="Notes" 
                                    :placeholder="$t('Common.Notes')" class="form-control"></b-textarea>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-8">
                                <ValidationProvider class="form-group"
                                                    rules="required"
                                                    v-slot="{ errors }" name="productName">
                                    <label for="productName">
                                    {{$t('Common.productName')}}
                                    </label>                                                    
                                    <b-form-input list="productName"
                                                v-model.lazy="formData.productName"
                                                :placeholder="$t('Common.productName')"
                                                :class="{'border-danger': (errors[0]), 'form-control': true}"></b-form-input>
                                    <datalist id="productName">
                                        <option>Select Product</option>
                                        <option :key="product" v-for="product in products">{{ product }}</option>
                                    </datalist>
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ValidationProvider class="form-group"
                                    rules="required"
                                    v-slot="{ errors }" name="qunatity">
                                    <label for="qunatity">
                                    {{$t('Common.qunatity')}}
                                    </label>
                                    <input id="qunatity"
                                    type="number"
                                    v-model="formData.qunatity"
                                    :placeholder="$t('Common.qunatity')"
                                    :class="{'border-danger': (errors[0]), 'form-control': true}"
                                    :maxlength="250"
                                    @change="updateQuantity" />
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    name="uom">
                                    <label for="uom">
                                    {{$t('Common.uom')}}
                                    </label>
                                    <b-form-select  v-model.lazy="formData.uom"
                                    id="uom" 
                                    :placeholder="$t('Common.uom')"
                                    class="form-control"
                                    :options="uomOptions"></b-form-select>
                                </ValidationProvider>                                
                            </div>
                           <div class="col">
                                <ValidationProvider class="form-group"
                                    rules="required"
                                    v-slot="{ errors }" name="price">
                                    <label for="price">
                                    {{$t('Common.price')}}
                                    </label>
                                    <input id="price"
                                    type="number"
                                    v-model="formData.price"
                                    :placeholder="$t('Common.price')"
                                    :class="{'border-danger': (errors[0]), 'form-control': true}"
                                    :maxlength="250"
                                    @change="updatePrice" />
                                    <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                                    name="tax">
                                    <label for="tax">
                                    {{$t('Common.tax')}}
                                    </label>
                                    <b-form-select  v-model.lazy="formData.tax"
                                    id="tax" 
                                    :placeholder="$t('Common.tax')"
                                    class="form-control"
                                    :options="taxOptions"></b-form-select>
                                </ValidationProvider>                                
                            </div>
                            <div class="col">
                                <ValidationProvider class="form-group"
                                    name="amount">
                                    <label for="amount">
                                    {{$t('Common.amount')}}
                                    </label>
                                    <input id="amount"
                                    type="number"
                                    v-model.lazy="formData.amount"
                                    :placeholder="$t('Common.amount')"
                                    class="form-control"
                                    :maxlength="250"
                                    disabled />
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 mt-5">
                                <button class="btn btn-primary"
                                        type="submit" @click="submit" @shortkey="submit"
                                        v-shortkey="['alt', 's']">
                                    {{ $t('Common.Save') }}
                                </button>
                            </div>
                        </div>
                    </ValidationObserver>
            </div>

        </div>
    </div>
</template>
<script src="./new-invoice.js"></script>