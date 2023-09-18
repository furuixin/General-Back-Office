import type { DefineComponent } from 'vue'
export type ComponentMap = {
  name: string
  componentName: DefineComponent<{}, {}, any>
}
