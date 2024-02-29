# Test Double Template

<details open="open">
<summary>目次</summary>



- [Vitestのセットアップ](#Vitestのセットアップ)
- [testDouble概要](#testDouble概要)


- [参考](#参考)

</details>

# Vitestのセットアップ

<details>
<summary> 1. 必要ライブラリーのインストール</summary>
下記を追加

```package.json
 "devDependencies": {
    "@testing-library/dom": "^9.3.3",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "@types/jsdom": "^21.1.3",
    "jsdom": "^24.0.0",
    "vitest": "^0.34.4"
  }
```
</details>

<details>
<summary> 2. test-setup.jsの設定</summary>

```js
import {expect} from 'vitest'
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers)
```
</details>

<details>
<summary> 3. vite.config.tsの設定</summary>
下記を追加

```ts
import {InlineConfig} from "vitest";
const testConfig: InlineConfig = {
  environment: 'jsdom',
  setupFiles: ['./test-setup.js'],
  globals: true,
  include: ['./src/**/*.test.{tsx,ts}'],
}
export default defineConfig({
  test: testConfig,
})
```
</details>

# testDouble概要

# 参考
- [getByRoleで取れるタグ](https://qiita.com/tondemonai7/items/3f7ed9bd6af1e0c3dfb7)
