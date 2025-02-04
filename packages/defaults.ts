import type { App } from 'vue'
import * as components from './components'

const install = (app: App) => {
    Object.values(components as Record<string, any>).forEach(value => {
        value.install && value.install(app)
    })
}

export { install }
