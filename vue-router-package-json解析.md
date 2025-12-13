# vue-router package.json 详细解析

下面是对 vue-router 的 package.json 文件中每一行配置的详细解释：

```json
{
  // 包名称，用于 npm 安装和引入
  "name": "vue-router",

  // 包版本号，遵循语义化版本规范 (Semantic Versioning)
  "version": "4.6.3",

  // 主入口文件，当使用 require() 时的默认入口点
  "main": "index.js",

  // 用于 unpkg CDN 的打包文件路径，允许通过 unpkg.com/vue-router 直接加载
  "unpkg": "dist/vue-router.global.js",

  // 用于 jsdelivr CDN 的打包文件路径
  "jsdelivr": "dist/vue-router.global.js",

  // ESM 模块入口点，当使用 import/export 语法时的默认入口
  "module": "dist/vue-router.mjs",

  // TypeScript 类型声明文件路径
  "types": "dist/vue-router.d.mts",

  // 条件导出配置，为不同环境和导入方式提供不同的入口点
  "exports": {
    ".": {
      "types": "./dist/vue-router.d.mts",
      "node": {
        "import": {
          "production": "./vue-router.node.mjs",
          "development": "./vue-router.node.mjs",
          "default": "./vue-router.node.mjs"
        },
        "require": {
          "production": "./dist/vue-router.prod.cjs",
          "development": "./dist/vue-router.cjs",
          "default": "./index.js"
        }
      },
      "import": "./dist/vue-router.mjs",
      "require": "./index.js"
    },
    "./dist/*": "./dist/*",
    "./vetur/*": "./vetur/*",
    "./package.json": "./package.json",
    "./experimental": "./dist/experimental/index.mjs",
    "./auto-resolver": {
      "types": "./vue-router-auto-resolver.d.mts"
    },
    "./auto-routes": {
      "types": "./vue-router-auto-routes.d.ts",
      "node": {
        "import": {
          "production": "./vue-router.node.mjs",
          "development": "./vue-router.node.mjs",
          "default": "./vue-router.node.mjs"
        },
        "require": {
          "production": "./dist/vue-router.prod.cjs",
          "development": "./dist/vue-router.cjs",
          "default": "./index.js"
        }
      },
      "import": "./dist/vue-router.mjs",
      "require": "./index.js"
    },
    "./auto": {
      "types": "./vue-router-auto.d.ts",
      "node": {
        "import": {
          "production": "./vue-router.node.mjs",
          "development": "./vue-router.node.mjs",
          "default": "./vue-router.node.mjs"
        },
        "require": {
          "production": "./dist/vue-router.prod.cjs",
          "development": "./dist/vue-router.cjs",
          "default": "./index.js"
        }
      },
      "import": "./dist/vue-router.mjs",
      "require": "./index.js"
    }
  },

  // 是否有副作用（side effects）
  // false 表示模块可以被 tree-shaking 优化
  "sideEffects": false,

  // 包的作者信息
  "author": {
    "name": "Eduardo San Martin Morote",
    "email": "posva13@gmail.com"
  },

  // 项目赞助链接
  "funding": "https://github.com/sponsors/posva",

  // 许可证类型
  "license": "MIT",

  // 代码仓库信息
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/router.git"
  },

  // 问题反馈链接
  "bugs": {
    "url": "https://github.com/vuejs/router/issues"
  },

  // 项目主页
  "homepage": "https://router.vuejs.org",

  // 发布到 npm 时包含的文件列表
  "files": [
    "vue-router-auto-resolver.d.mts",
    "index.js",
    "vue-router.node.mjs",
    "vue-router-auto.d.ts",
    "vue-router-auto-routes.d.ts",
    "dist/**/*.{js,cjs,mjs}",
    "dist/**/*.d.{ts,mts}",
    "vetur/tags.json",
    "vetur/attributes.json",
    "README.md"
  ],

  // 对等依赖，使用此包时需要用户自行安装的依赖
  "peerDependencies": {
    "vue": "^3.5.0"
  },

  // Vetur 插件配置，用于 Vue 项目中的语法高亮和提示
  "vetur": {
    "tags": "vetur/tags.json",
    "attributes": "vetur/attributes.json"
  },

  // 运行时依赖
  "dependencies": {
    "@vue/devtools-api": "^6.6.4"
  },

  // 开发依赖，仅用于开发和构建过程
  "devDependencies": {
    // 构建工具相关
    "@rollup/plugin-commonjs": "^28.0.7", // Rollup 插件，将 CommonJS 模块转换为 ES 模块
    "@rollup/plugin-node-resolve": "^16.0.3", // Rollup 插件，解析 node_modules 中的模块
    "@rollup/plugin-replace": "^6.0.2", // Rollup 插件，在构建时替换代码中的字符串
    "@rollup/plugin-terser": "^0.4.4", // Rollup 插件，用于代码压缩
    "rollup": "^4.52.4", // JavaScript 模块打包器
    "rollup-plugin-typescript2": "^0.36.0", // Rollup TypeScript 插件
    "tsdown": "^0.15.7", // TypeScript 构建工具
    "tsup": "^8.5.0", // 基于 esbuild 的快速构建工具
    "vite": "^7.1.10", // 新一代前端构建工具

    // TypeScript 相关
    "@types/jsdom": "^21.1.7", // JSDOM 的 TypeScript 类型定义
    "@types/nightwatch": "^2.3.32", // Nightwatch 的 TypeScript 类型定义
    "@typescript/native-preview": "7.0.0-dev.20251013.1", // TypeScript 原生预览版本

    // Vue 相关
    "@vitejs/plugin-vue": "^6.0.1", // Vite Vue 插件
    "@vue/compiler-sfc": "~3.5.22", // Vue 单文件组件编译器
    "@vue/server-renderer": "~3.5.22", // Vue 服务器端渲染器
    "@vue/test-utils": "^2.4.6", // Vue 测试工具
    "vue": "~3.6.0-alpha.2", // Vue 核心库

    // 测试相关
    "@vue/test-utils": "^2.4.6", // Vue 测试工具
    "browserstack-local": "^1.5.8", // BrowserStack 本地测试工具
    "chromedriver": "^138.0.5", // Chrome WebDriver 用于 E2E 测试
    "connect-history-api-fallback": "^1.6.0", // 用于 SPA 应用的历史模式回退中间件
    "dotenv": "^17.2.3", // 环境变量加载
    "faked-promise": "^2.2.2", // 用于测试的假 Promise 实现
    "geckodriver": "^6.0.2", // Firefox WebDriver 用于 E2E 测试
    "happy-dom": "^20.0.0", // 快速的 DOM 实现，用于测试
    "nightwatch": "^3.12.2", // E2E 测试框架
    "nightwatch-helpers": "^1.2.0", // Nightwatch 辅助函数

    // 工具类
    "rimraf": "^6.0.1" // 跨平台删除文件和目录工具
  },

  // npm 脚本命令，用于开发、构建和测试流程
  "scripts": {
    "dev": "vitest --ui", // 启动 Vitest UI 开发模式
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 1", // 生成更新日志
    "build": "tsdown", // 构建项目
    "build:old": "rimraf dist && rollup -c rollup.config.mjs", // 旧的构建方式
    "build:playground": "vue-tsc --noEmit && vite build --config playground/vite.config.ts", // 构建 playground
    "build:e2e": "vue-tsc --noEmit && vite build --config e2e/vite.config.mjs", // 构建 E2E 测试环境
    "build:size": "pnpm run build && rollup -c size-checks/rollup.config.mjs", // 构建并检查打包大小
    "dev:e2e": "vite --config e2e/vite.config.mjs", // 启动 E2E 测试开发服务器
    "test:types": "tsc --build tsconfig.json", // 类型检查测试
    "test:unit": "vitest --coverage run", // 运行单元测试并生成覆盖率报告
    "test": "pnpm run build && pnpm run test:types && pnpm run test:unit && pnpm run test:e2e", // 运行所有测试
    "test:e2e": "pnpm run test:e2e:headless", // 运行 E2E 测试（无头模式）
    "test:e2e:headless": "node e2e/runner.mjs --env chrome-headless", // 在无头 Chrome 中运行 E2E 测试
    "test:e2e:native": "node e2e/runner.mjs --env chrome", // 在真实 Chrome 浏览器中运行 E2E 测试
    "test:e2e:ci": "node e2e/runner.mjs --env chrome-headless --retries 2", // CI 环境中运行 E2E 测试（失败重试2次）
    "test:e2e:bs": "node e2e/runner.mjs --local -e android5 --tag browserstack", // 在 BrowserStack 上测试 Android
    "test:e2e:bs-test": "node e2e/runner.mjs --local --env browserstack.local_chrome --tag browserstack" // 在 BrowserStack 上测试 Chrome
  }
}
```
