<template>
    <div class="login-content">
        <div class="row">
            <div class="col-md-12 login-bg">
                <div class="login-form col-2 offset-md-5 mt-5">
                    <h4 class="login-h2">{{ $t('Common.Welcome') }}</h4>
                    <p class="login-p">{{ $t('Common.Login') }}</p>
                    <ValidationObserver ref="observer" v-slot="{ }" @submit.prevent="submit()">
                        <div class="col col-md-12 mb-4">
                            <ValidationProvider class="form-group"
                                                rules="required"
                                                v-slot="{ errors }" name="userName">
                                <label for="userName">
                                    {{$t('Common.UserName')}}
                                </label>
                                <input id="userName"
                                       type="text"
                                       v-model.lazy="formData.userName"
                                       :placeholder="$t('Common.UserName')"
                                       :class="{'border-danger': (errors[0]), 'form-control': true}"
                                       :maxlength="250" />
                                <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col col-md-12 mb-4">
                            <ValidationProvider class="form-group mb10"
                                                rules="required"
                                                v-slot="{ errors }" name="password">
                                <label for="password">
                                    {{$t('Common.Password')}}
                                </label>
                                <input id="password"
                                       type="password"
                                       v-model.lazy="formData.password"
                                       :placeholder="$t('Common.Password')"
                                       :class="{'border-danger': (errors[0]), 'form-control': true}"
                                       :maxlength="250">
                                <span v-if="errors[0]" class="err">{{ $t('Common.Required') }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="col-md-12 mt-5">
                            <button class="btn btn-primary btn-block"
                                    type="submit" @click="submit" @shortkey="submit"
                                    v-shortkey="['alt', 's']">
                                {{ $t('Common.Login') }}
                            </button>
                        </div>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./login-form.js"></script>
