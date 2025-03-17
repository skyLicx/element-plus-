import path from 'path'
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 入口文件夹
const entryDir = path.resolve(__dirname, '../packages')
// 输出文件夹
const outDir = path.resolve(__dirname, '../lib')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()],
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    }
  }
}

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'mooc-element-components',
        fileName: 'mooc-element-components',
        formats: ['es', 'umd'],
      },
      outDir,
    }
  })
}

// 打包成库
const buildLib = async () => {
  await buildAll()
}

buildLib()
