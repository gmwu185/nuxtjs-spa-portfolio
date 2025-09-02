<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Header -->
    <Header></Header>

    <!-- Menu -->
    <Menu></Menu>

    <!-- Main -->
    <div id="main">
      <div class="inner">
        <h1 class="text-center">CSS Flex 最基礎發展自製格線系統</h1>
        <span class="image main">
          <img src="~/assets/images/六角學院使用自製flexGrid--主視覺區塊.png" />
        </span>
        <p class="text-center mb-5">
          <span class="d-block my-3"
            >針對 css3 flex 處理十種不同的網頁排版，正好十題
            (我要打十個！葉問第一集中的台詞)。</span
          >
          <span class="d-block text-center">
            <a
              href="https://gmwu185.github.io/layoutTraining-flex-layout-tenType/"
              target="_new"
              class="button primary small"
              >demo-page</a
            >
            <a
              href="https://github.com/gmwu185/layoutTraining-flex-layout-tenType"
              target="_new"
              class="button primary small"
              >GitHub-link</a
            >
          </span>
        </p>
        <hr />
        <h2 class="text-center">主視覺列表頁設計說明</h2>
        <p>
          十個 flex 排版方式，因為一個人打十份排版，所以直接以我要打十個 !! Flex
          十大高手做為主視覺區塊的主題設計，正好是葉問電影系列的《葉問
          4：完結篇》做為最後的一部，取用電影系列中較有涵意的台詞結合，做一些經典片段回顧。
        </p>
        <h2 class="text-center">技術內容</h2>
        <p>
          列表頁製作專屬主題，將十題十頁視為一整個專案。以共用樣式為基底，為了好區分專頁樣式命名加入
          <code>.typeXX</code> 來視別專頁。<br />
          工具類樣式、元件化樣式 (<code>.typeXX-c</code> 移除
          <code>.typeXX</code> 可視為全域使用)。樣式元件化架構樣式可讓元素的
          class
          架構與更乾淨，子孫層可以透過元件化少用到工具類樣式，調整架構更針對性，當然也可以視為架構上工具類的集合包，使用
          CSS 命名設計模式。<br />
          CSS 簡易能達到效果為主，錨點的使用與 hover 觀念<br />
          不使用 Sass/Scss，刻意練習 CSS 與命名與以 flex
          排版與應用為主。內頁以了解 flex 彈性特性為主，<code
            >.typeXX-range</code
          >
          為設計稿尺寸，盡可能相近畫面。<code>.typexx-range</code>
          與相近元素的樣式名稱移除後，可以看到 flex 的廷展性。
        </p>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>
