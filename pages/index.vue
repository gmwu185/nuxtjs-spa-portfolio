<template>
  <div id="wrapper">
    <!-- Header -->
    <Header></Header>

    <!-- Menu -->
    <Menu></Menu>

    <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <!-- <h1 class='mb-1'>Hello, World</h1>
          <blockquote class='mb-3'>
            <p class="mb-1">維基百科：<a href="https://zh.wikipedia.org/wiki/Hello_World" target="_new">Hello World</a> 這麼說。</p>
            傳統來說，當一位程式設計師接觸一門新的程式語言的時候，「Hello, World」就會成為首個接觸的內容。與此同時，相同的字串亦會用作檢測開發環境是否安裝妥當以及相關的操作人員是否理解相關的環境。
          </blockquote> -->
          <p
            class="u-maxw--650-px mt-4 mb-15 mx-auto text-center u-lineHeight--200"
          >
            <span class="d-inline-block">在前端的世界尤如大海一望無際，</span
            ><span class="d-inline-block">在這裡每一個程式片段、每個畫面、</span
            ><span class="d-inline-block"
              >每個功能都是透過學習所了解與掌握的，</span
            ><span class="d-inline-block"
              >和一般人一樣也是由一句 Hello World 慢慢的建構，</span
            ><span class="d-inline-block"
              >再這裡可以見到成長的腳步，沒有最好只有更好。</span
            >
          </p>
        </header>
        <section class="tiles">
          <article class="style1">
            <span class="image">
              <img
                src="~/assets/images/Flex修煉時光屋-首頁列表--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="portfolios/layoutTraining-flex-layout-tenType">
              <h2>
                <span class="d-inline-block">我要打十個！</span>
                <span class="d-inline-block"
                  ><span class="d-inline-block">Flex</span>
                  <span class="d-inline-block">修煉時光屋</span></span
                >
              </h2>
              <div class="content">
                <p>
                  <span class="d-inline-block"
                    >flex 處理十種不同的網頁排版，</span
                  >
                  <span class="d-inline-block"
                    >正好十題 (葉問，我要打十個！)。</span
                  >
                </p>
              </div>
            </nuxt-link>
          </article>
          <article class="style4">
            <span class="image">
              <img
                src="~/assets/images/六角學院使用自製flexGrid--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="portfolios/layoutTraining-hexschool-flex">
              <h2>
                <span class="d-inline-block">六角學院教學網</span
                ><span class="d-inline-block">自適應網頁</span>
              </h2>
              <div class="content">
                <p>
                  <span class="d-inline-block">自製格線系統 (flexGrid)</span>
                  <span class="d-inline-block">與工具類、</span
                  ><span class="d-inline-block">手刻 CSS 構成自適應網頁。</span>
                </p>
              </div>
            </nuxt-link>
          </article>
          <article class="style5">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020春季網頁切版直播班第一週-個人履歷--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>個人履歷</h2>
              <div class="content">
                <p>1 px 也不差的版型控制術</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style6">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020春季網頁切版直播班第二週-個人網站--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>個人網站</h2>
              <div class="content">
                <p>Flexbox 網頁排版術</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style1">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020春季網頁切版直播班第三週-RWD網站-眼鏡品牌形象網站--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="portfolios/layout-training-week-03-04-glasses-store">
              <h2>
                <span class="d-inline-block">眼鏡品牌形象</span
                ><span class="d-inline-block"> RWD 網站</span>
              </h2>
              <div class="content">
                <p>
                  <span class="d-inline-block">伸縮自如的 RWD 排版術</span
                  ><span class="d-inline-block">與多頁式網頁設計</span>
                </p>
              </div>
            </nuxt-link>
          </article>
          <article class="style2">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020春季網頁切版直播班第五週-後台表單設計__Assignment--全頁.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>後台表單設計</h2>
              <div class="content">
                <p>
                  css reset & CSS Base & form & bootstrap 4 Utilities /
                  component
                </p>
              </div>
            </nuxt-link>
          </article>
          <article class="style3">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020春季網頁切版直播班第六週-電商版型+第七週-視差滾動--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>視差滾動</h2>
              <div class="content">
                <p>網頁規範設計流程設計電商版型 + 視差滾動效果</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style4">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020夏季班JavaScript實戰直播班第一週-關注點分離-Todo List--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>關注點分離-Todo List</h2>
              <div class="content">
                <p>
                  MVVM 的觀注點分離，透過資料抽離概念操作資料後做畫面呈現，結合
                  CRUD 的操作方法設計 localStorage 使用。
                </p>
              </div>
            </nuxt-link>
          </article>
          <article class="style3">
            <span class="image">
              <img
                src="~/assets/images/VueJS Component AQI AJAX--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>
                <span class="d-inline-block">台灣縣市</span
                ><span class="d-inline-block">空氣品質</span>
              </h2>
              <div class="content">
                <p>使用 VueJS Component 透過 AJAX 介接台灣縣市空氣品質。</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style2">
            <span class="image">
              <img
                src="~/assets/images/口罩地圖(OpenStreetMap&Leaflet)--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>口罩地圖</h2>
              <div class="content">
                <p>使用 OpenStreetMap.js & Leaflet.js 開發開源地圖應用。</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style5">
            <span class="image">
              <img
                src="~/assets/images/六角學院．2020夏季班JavaScript實戰直播班第二週-課程API串接-axiosAJAX--主形象區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>axios AJAX 串接 API</h2>
              <div class="content">
                <p>使用 axios 透過 AJAX 介接 API 於前台畫面</p>
              </div>
            </nuxt-link>
          </article>
          <article class="style6">
            <span class="image">
              <img
                src="~/assets/images/高雄旅遊資訊網_kaohsiungTravel--主視覺區塊.png"
                alt=""
              />
            </span>
            <nuxt-link to="generic">
              <h2>高雄旅遊資訊網 (kaohsiungTravel)</h2>
              <div class="content">
                <p>原生 JavaScript 介接公部門 OpenData</p>
              </div>
            </nuxt-link>
          </article>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Menu,
    Footer
  }
};
</script>

<style></style>
