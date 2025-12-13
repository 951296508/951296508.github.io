/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 支持动态导入 .vue 文件
declare module '*.vue' {
  const VueComponent: any
  export default VueComponent
}

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: string;
  // 其他环境变量声明...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
