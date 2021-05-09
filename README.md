# fake-ggr

## 說明
本專案供練習使用

## 如何運行專案?
1.  透過 `git clone` 將專案抓到本地

2.  **確定你在 git master 線上**，若不是請 checkout 過去。

3.  在專案根目錄運行 `npm install` 安裝模組

4.  安裝完 2 之後，`npm run serve` 運行專案


## 製作過程遭遇的問題

### **問題 1 : 安裝 vue-svg-loader**
自己先前都是使用 vue-svg-loader 處理 svg 檔案，但是使用 vue-cli 4 + vue 3 的時候，會打包失敗。

首先上 github 看有沒有相關 [issue](https://github.com/visualfanatic/vue-svg-loader/issues/136)
接著照著專案 readme 指示，升級 `vue-style-loader`，並修改 `vue.config.js` 的 svg 設定。

仍然沒有解決。

接著嘗試升級 vue-loader 到 v16 以上，才解決這個問題。(算是誤打誤撞)

------------------------------

### **問題 2 : vue 3 沒有輪播套件**
這次的 gogoro 網站使用 `vue-slicker`，我則是原本都用 `vue-awesome-swiper`。這兩個都沒有 vue3 版本。

基於個人怨念，中間花了1天半左右嘗試自己刻，最後還是覺得自己寫不是妥善的辦法 orz。

所以思路轉向下面兩個做法

1. 拿 `vue-slicker` 改成 vue3 版本
2. 用 vue 元件包 swiper

方案一有現成的可以改，而且他只有一個元件，改起來很簡單。如果只是要複刻這個網站，用方案一應該很快。

但 slicker 自己的 repo 好像上次更新是兩三年前了，如果把專案想成會往後發展，那使用有在跑的 swiper 比較好，而且可以少裝 jQuery。

於是就轉向方案2了。就在我打開 swiper 的官方網站，這才發現 swiper 有推出 vue3 對應的元件可以用，於是就這麼套用了。

--------------------------------

### **問題 3 : 元件切分的標準? (未解決)**
以 `src/components/pages/index.vue` 為例。
裡面切了以下幾個元件:
- **`BannerEeyo.vue`**
- **`BannerStation.vue`**
- **`CampaignCard.vue`**
- **`PhotoCard.vue`**
- `BannerQuotes.vue`
- `Impact.vue`

`BannerQuotes.vue` 及 `Impact.vue` 都包裝了一組獨立的 javascript 功能，我認為獨立出來可以避免跟其他邏輯混在一起。*(個人理解：而且他們都會頻繁更新資料狀態，如果放在 index.vue 層，會導致其他動態資料的部分一起被重新渲染)*

**`BannerEeyo.vue`**、**`BannerStation.vue`**、**`CampaignCard.vue`**、**`PhotoCard.vue`** 這四個我就切得很猶豫。

他們沒有被重用，沒有動態資料，沒有獨立的 js 功能。只是包了一組模板 + css，讓 `index.vue` 變得不要那麼長而已。
值得多用一個元件嗎？ (犧牲初始化時間換取可讀性)

