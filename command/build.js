import path from 'path'
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import fsExtra from 'fs-extra'
import fs from 'fs'

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

// 单组件打包
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir: path.resolve(outDir, name),
    }
  })
}

// 每个组件生成package.json
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name}",
    "main": "index.js",
    "module": "index.esm.js",
    "style": "style.css"
  }`
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

// 打包成库
const buildLib = async () => {
  await buildAll()

  // 获取组件名称数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  for(const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}

buildLib()
