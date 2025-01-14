// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@sidebase/nuxt-auth'],

  runtimeConfig: {
    private: {
      NUXT_SECRET: process.env.NUXT_SECRET,
      AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
      AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
      AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
      AZURE_AD_SCOPES: process.env.AZURE_AD_SCOPES
    },
    public: {}
  },

  auth: {
    originEnvKey: process.env.ORIGIN,
    provider: {
      type: 'authjs',
      defaultProvider: 'azure-ad',
      addDefaultCallbackUrl: true
    }
  }
})
