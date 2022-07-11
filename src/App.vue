<script setup>
import {reactive, watch, watchEffect} from "vue";
import {isEmpty, px2rem} from "./utils/helpers";
import {ArrowDown, Expand} from "@element-plus/icons-vue"
import logoImg from "./assets/logo.04179b1c.png"
import {useWindowSize} from "@vant/use";
import {useMediaQueryStore} from "./store/mediaQueryStore";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n();

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
  data: [],
});
// 初始化菜单栏
initNavs();
watch(locale, () => { // 多语言发生变化时 改变菜单栏
  initNavs()
});

function initNavs() {
  menuData.data = [
    {label: t('nav.home'), key: 'home'},
    {label: t('nav.ivo'), key: 'ivo'},
    {label: t('nav.account'), key: 'account'},
    {label: t('nav.dashboard'), key: 'dashboard'},
    {label: t('nav.white_paper'), key: 'white_paper'},
    {
      label: t('lang'), key: 'lang', children: [
        {label: t('zh_CN'), key: 'zh_CN'},
        {label: t('en_US'), key: 'en_US'},
      ]
    },
  ];
}


const handleSelect = (e) => {
  console.log(e)
}
</script>

<template>
  <div class="app-container-box">
    <div class="ivo-bg"></div>
    <el-container class="app-container">
      <el-header class="flex-row tw-justify-between tw-items-center tw-select-none header" style="padding: 0">
        <div class="tw-pl-20" v-if="!mediaQueryStore.isPc">
          <el-icon @click="menuData.drawer=!menuData.drawer" :size="px2rem(20)">
            <Expand class="tw-text-white tw-cursor-pointer"/>
          </el-icon>
        </div>

        <!--Logo start-->
        <div class="tw-px-20">
          <el-image class="tw-w-30" :src="logoImg" fit="fill"/>
        </div>
        <!--Logo end-->


        <!--顶部菜单栏 start-->
        <div class="tw-pr-20" v-if="mediaQueryStore.isPc">
          <el-menu
              :default-active="menuData.index"
              class="menu"
              text-color="#ffffff"
              active-text-color="#ffffff"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect">
            <template v-for="item of menuData.data">
              <el-menu-item class="menu-item" :key="item.key" :index="item.key" v-if="isEmpty(item.children)">
                {{ item.label }}
              </el-menu-item>
              <el-dropdown @command="v=>$i18n.locale=v" v-else>
                <div class="tw-leading-28 tw-flex-shrink-0 tw-text-white tw-cursor-pointer dropdown-item">
                  <span>{{ item.label }}</span>
                  <el-icon class="el-icon--right">
                    <arrow-down/>
                  </el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="c.key" :key="c.key" v-for="c of item.children||[]">
                      {{ c.label }}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-menu>
        </div>
        <!--顶部菜单栏 end-->

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
            {{ item.label }}
          </el-menu-item>
          <el-dropdown @command="v=>$i18n.locale=v" v-else>
            <div class="tw-leading-30 tw-text-dark tw-cursor-pointer vertical dropdown-item">
              <span class="dropdown-group-name">{{ item.label }}</span>
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="c.key" :key="c.key" v-for="c of item.children||[]">
                  {{ c.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
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
  background-color: #000234;


  .ivo-bg {
    position: fixed;
    background-image: url("./bg.7231cad2.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
  }


  .header {
    position: sticky;
    top: 0;
    background-color: rgba(52, 73, 132, .83);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
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
