// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',
  // devtools: { enabled: true }
  app:{
    head: {
      title: "Project One Nuxtjs",
      meta:[
        { charset: 'utf-8'},
        { name: 'viewport', content:'width=device-width, initial-scale=1'},
        { hid: 'description', name:'description', content:'Project One Nuxtjs meta desc'},
        { name: 'Formate-ditection', content:'telephone=no'},
      ],
      link:[
        {
          rel:'stylesheet',
          href:'https://font.googleapis.com/css2?family=Roboto&display=swap',

        },
        {
          rel:'icon',
          type: 'image/x-icon',
          href:'/favicon.ico'
        },
        {
          rel:'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
        {
          rel:'stylesheet',
          href:'https://cdn.datatables.net/2.2.1/css/dataTables.dataTables.min.css'
        }
      ],
      script: [
        {
          src:'https://code.jquery.com/jquery-3.7.1.min.js',
          type:'text/javascript'
        },
        {
          src:'https:////cdn.datatables.net/2.2.1/js/dataTables.min.js',
          type:'text/javascript'
        },
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          type:'text/javascript'
        }
      ],
    }
  },
  generate: {
    fallback: true
  },

  compatibilityDate: '2025-01-28'
})