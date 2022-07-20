<script setup>
import {reactive, watch, watchEffect} from "vue";
import {isEmpty, px2rem} from "./utils/helpers";
import {ArrowDown, Fold, WalletFilled, Promotion} from "@element-plus/icons-vue"
import logoImg from "./assets/logo.04179b1c.png"
import {useWindowSize} from "@vant/use";
import {useMediaQueryStore} from "./store/mediaQueryStore";
import {useI18n} from "vue-i18n";
import Config from "./config/Config";
import {useRoute, useRouter} from "vue-router";

const {t, locale} = useI18n();
const router = useRouter();
const route = useRoute();

const mediaQueryStore = useMediaQueryStore();
const windowSize = useWindowSize();
watchEffect(() => {
  mediaQueryStore.updateMediaQuery(
      windowSize.width.value,
      windowSize.height.value,
  )
});
const menuData = reactive({
  index: "home",
  drawer: false,
  langDrawer: false,
  data: [],
  lang: [
    {label: t('zh_CN'), key: 'zh_CN'},
    {label: t('en_US'), key: 'en_US'},
  ],
});
// 初始化菜单栏
initNavs();
watch(locale, () => { // 多语言发生变化时 改变菜单栏
  initNavs()
});
watch(route, (v) => {
  menuData.index = v.name;

})

function initNavs() {
  menuData.data = [
    {key: 'home', link: "home"},
    {key: 'nft', link: "nft"},
    {key: 'pledge', link: 'pledge'},
    {key: 'team', link: 'team'},
    {key: 'show_venue', link: 'show_venue'},
    {key: 'lease'},
    {key: 'transaction'},
    {key: 'white_paper', link: 'https://libwiki.github.io/rac-white-paper/'},
  ];
}

const onLanguageChange = (v) => {
  locale.value = v;
  menuData.langDrawer = false;
  if (route.meta.title) {
    const title = t(`nav.${route.meta.title}`)
    document.title = `${title} | ${Config.siteName}`;
  }
}
const handleSelect = (key) => {
  const nav = menuData.data.find(v => v.key === key);
  if (menuData.drawer) {
    menuData.drawer = false;
  }
  if (!nav || !nav.link) {
    return
  }
  if (nav.link.startsWith('http')) {
    window.open(nav.link)
    return;
  }
  router.push({name: nav.link})
}
</script>

<template>
  <div class="app-container-box">
    <!--<div class="ivo-bg"></div>-->
    <el-container class="app-container">
      <el-header class="flex-row tw-justify-between tw-items-center tw-select-none header" style="padding: 0">

        <!--Logo start-->
        <div @click="$router.push({name:'home'})" class="flex-row tw-items-center tw-cursor-pointer tw-px-20">
          <el-image class="tw-w-30 tw-h-30 logo-box" :src="logoImg" fit="fill"/>
          <div class="tw-px-5">
            {{ Config.siteName }}
          </div>
        </div>
        <!--Logo end-->

        <div class="flex-row">
          <!--顶部菜单栏 start-->
          <div class="tw-pr-20" v-if="mediaQueryStore.isPc">
            <el-menu
                :default-active="menuData.index"
                class="menu"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect">
              <template v-for="item of menuData.data">
                <el-menu-item class="menu-item" :key="item.key" :index="item.key" v-if="isEmpty(item.children)">
                  {{ item.label || $t(`nav.${item.key}`) }}
                </el-menu-item>
                <el-dropdown @command="v=>$i18n.locale=v" v-else>
                  <div class="tw-leading-28 tw-flex-shrink-0 tw-text-white tw-cursor-pointer dropdown-item">
                    <span>{{ item.label || $t(`nav.${item.key}`) }}</span>
                    <el-icon class="el-icon--right">
                      <arrow-down/>
                    </el-icon>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :command="c.key" :key="c.key" v-for="c of item.children||[]">
                        {{ c.label || $t(`nav.${c.key}`) }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </template>
            </el-menu>
          </div>
          <!--顶部菜单栏 end-->

          <!--顶部工具栏 start-->
          <div class="tw-pr-20 flex-row tw-items-center">
            <el-icon class="tw-mx-3" :size="px2rem(20)">
              <WalletFilled class="tw-text-dark tw-cursor-pointer"/>
            </el-icon>
            <el-icon
                @click="menuData.langDrawer=!menuData.langDrawer"
                class="tw-mx-3" :size="px2rem(20)">
              <Promotion class="tw-text-dark tw-cursor-pointer"/>
            </el-icon>
            <el-icon
                class="tw-mx-3"
                @click="menuData.drawer=!menuData.drawer"
                v-if="!mediaQueryStore.isPc"
                :size="px2rem(20)">
              <Fold class="tw-text-dark tw-cursor-pointer"/>
            </el-icon>
          </div>
          <!--顶部工具栏 end-->
        </div>

      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

    <!--竖向菜单 start-->
    <el-drawer :size="250" direction="ltr" v-model="menuData.drawer" :with-header="false">
      <el-menu
          :default-active="menuData.index"
          class="menu"
          :ellipsis="false"
          @select="handleSelect">
        <template v-for="item of menuData.data">
          <el-menu-item class="menu-item" :key="item.key" :index="item.key" v-if="isEmpty(item.children)">
            {{ item.label || $t(`nav.${item.key}`) }}
          </el-menu-item>
          <el-dropdown @command="v=>$i18n.locale=v" v-else>
            <div class="tw-leading-30 tw-text-dark tw-cursor-pointer vertical dropdown-item">
              <span class="dropdown-group-name">{{ item.label || $t(`nav.${item.key}`) }}</span>
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="c.key" :key="c.key" v-for="c of item.children||[]">
                  {{ c.label || $t(`nav.${c.key}`) }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-menu>
    </el-drawer>
    <!--竖向菜单 end-->


    <!--多语言选择框 start-->
    <el-drawer :size="200" direction="rtl" v-model="menuData.langDrawer" :with-header="false">
      <el-menu
          :default-active="locale"
          class="menu"
          :ellipsis="false"
          @select="onLanguageChange">
        <el-menu-item class="menu-item" :key="item.key" :index="item.key" v-for="item of menuData.lang">
          {{ item.label || $t(item.key) }}
        </el-menu-item>
      </el-menu>
    </el-drawer>
    <!--竖向菜单 end-->
  </div>


</template>
<style>
:root {
  --el-menu-item-height: 30px !important;
}
</style>

<style lang="less" scoped>


.app-container-box {
  //background-color: #000234;


  .ivo-bg {
    position: fixed;
    //background-image: url("./bg.7231cad2.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
  }


  .header {
    position: sticky;
    top: 0;
    //background-color: rgba(52, 73, 132, .83);
    background-color: #ffffff;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: 1px 1px 1px #f0f2f5;
    z-index: 999;

    .logo-box {
      border: solid 1px #c0c4cc;
      border-radius: 50%;
      padding: 5px;
    }
  }

  .menu {
    border: none;
    height: var(--el-menu-item-height);
    background-color: transparent;

    .menu-item, .dropdown-item {
      font-size: 10px;
      padding: 0 10px;
      //line-height: 28px;
      //height: 28px;

      &.is-active, &:hover {
        background-color: transparent !important;
      }

      &.vertical {
        padding: 0;

        .dropdown-group-name {
          padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding));
        }
      }

    }
  }
}


</style>
