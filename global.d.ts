// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CcButton: typeof import("./lib/button/src/index.vue")
  }

  interface ComponentCustomProperties {
  }
}

export {}
