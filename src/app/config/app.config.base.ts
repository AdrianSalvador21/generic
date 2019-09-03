export const AppConfigBase = {
  domainApplication: '2INNOVATEIT',
  applicationID: 'GENERIC_CONSOLE',
  sessionIDStorageKey: 'sessionID',
  defaultLanguage: 'es',
  reducers: {
    contextInfo: 'contextInfo',
    administration: 'administration'
  },
  routes: {
    error404: {
      key: '404',
      url: '/404'
    },
    security: {
      key: 'security',
      url: '/security',
      profile: {
        key: 'profile',
        url: '/security/profile',
        edit: {
          key: 'edit',
          url: '/security/profile/edit'
        },
        password: {
          key: 'password',
          url: '/security/profile/password'
        },
        secretQuestion: {
          key: 'secretQuestion',
          url: '/security/profile/secretQuestion'
        }
      },
      login: {
        key: 'login',
        url: '/security/login',
        user: {
          key: 'user',
          url: '/security/login/user'
        },
        password: {
          key: 'password',
          url: '/security/login/password'
        },
        changePassword: {
          key: 'changePassword',
          url: '/security/login/changePassword'
        },
        secretQuestions: {
          key: 'secretQuestions',
          url: '/security/login/secretQuestions'
        }
      }
    },
    administration: {
      key: 'administration',
      url: '/administration',
      users: {
        key: 'users',
        url: '/administration/users',
        search: {
          key: 'search',
          url: '/administration/users/search'
        },
        details: {
          key: 'details',
          url: '/administration/users/details'
        },
        high: {
          key: 'high',
          url: '/administration/users/high'
        },
      },
    },
    dynamicFormGenerator: {
      key: 'dynamic-form-generator',
      url: '/dynamic-form-generator'
    },
    demo: {
      key: 'demo',
      url: '/demo',
      home: {
        key: 'home',
        url: '/demo/home'
      },
      loanClientForm: {
        key: 'loanClientForm',
        url: '/demo/loanClientForm',
      },
      demoTwo: {
        key: 'demoTwo',
        url: '/demo/demoTwo'
      },
      demoThree: {
        key: 'demoThree',
        url: '/demo/demoThree'
      },
      demoFour: {
        key: 'demoFour',
        url: '/demo/demoFour'
      },
      demoFive: {
        key: 'demoFive',
        url: '/demo/demoFive'
      },
      demoSix: {
        key: 'demoSix',
        url: '/demo/demoSix'
      }
    }
  },
  endpoints: {
    dynamicServiceBroker: '/DynamicServiceBroker/webapi/',
    sessionManager: '/SecurityManager/AuthenticationManager/webapi/'
  }
};
