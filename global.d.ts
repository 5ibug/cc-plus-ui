// GlobalComponents for Volar
export { CcButton } from './lib/button';
export { CcTable } from './lib/table';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CcButton: CcButton
    CcTable: CcTable
  }

  interface ComponentCustomProperties {
  }
}

export {}
