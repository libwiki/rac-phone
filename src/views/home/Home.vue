<script setup>
import {EventsEnum} from "../../events/EventsEnum";
import {useRefreshStore} from "../../store/refreshStore";
import {onMounted, onUnmounted, ref} from "vue";
import middleImg from "../../assets/rac/middle.120b44fe.png"
import {useI18n} from "vue-i18n";
import Config from "../../config/Config";

const {t} = useI18n();
const refreshStore = useRefreshStore()
onMounted(() => { // 页面渲染时进行事件监听
  window.emitter.on(EventsEnum.onRefresh, () => {
    console.log('下拉刷新触发')
    refreshStore.loading = false; // 关闭下拉刷新动画
  }); // 监听处理页面的下拉刷新事件
})

onUnmounted(() => { // 离开页面时移除事件监听
  window.emitter.off(EventsEnum.onRefresh)
})

const stepsData = ref([
  {title: 'step_title_1', desc: 'step_desc_1'},
  {title: 'step_title_2', desc: 'step_desc_2'},
  {title: 'step_title_3', desc: 'step_desc_3'},
  {title: 'step_title_4', desc: 'step_desc_4'},
])
</script>

<template>
  <div class="col-flex-center">
    <div class="tw-w-full flex-row tw-leading-25 site-info-box">
      <div class="tw-flex-1">
        <div class="tw-text-22">{{ Config.siteName }}</div>
        <div class="tw-text-18">
          {{ $t('meta_universe_ecological_platform') }}
        </div>
      </div>
      <div class="middle-icon-box">
        <el-image class="image" :src="middleImg"/>
      </div>
    </div>

    <!--视频简介 start-->
    <div class="tw-w-full tw-py-20 video-box">
      <div class="row-flex-center intro-title-box">
        {{ $t('video_introduction') }}
      </div>
      <div class="col-flex-center tw-w-full intro-video">
        <div class="intro-video-box">
          <video style="width:100%; height:100%; object-fit: fill" controls>
            <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    <!--视频简介 end-->

    <!--免费领取 start-->
    <div class="tw-w-full receive-box">
      <div class="header">{{ $t('limited_quantity') }}</div>
      <div class="main">{{ $t('remaining_count', {count: 2000}) }}</div>
      <div class="dr"></div>
      <div class="row-flex-center footer">
        <div class="receive-btn">
          {{ $t('free_receive') }} NFT
        </div>
      </div>
    </div>
    <!--免费领取 end-->

    <!--路线图 start-->
    <div class="tw-w-full tw-max-w-md tw-text-20 tw-leading-40">{{ $t('road_map') }}</div>
    <div class="tw-w-full tw-max-w-md tw-py-20 tw-w-full">
      <el-timeline>
        <el-timeline-item
            v-for="(item,i) of stepsData"
            :key="i">
          <div class="tw-text-white">{{ $t(`roadMap.${item.title}`) }}</div>
          <div v-html="$t(`roadMap.${item.desc}`)" class="tw-text-light tw-py-10"></div>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!--路线图 end-->


  </div>
</template>

<style lang="less" scoped>
.site-info-box {
  height: 100px;
  position: relative;
  padding: 0 20px;
  @media screen and (min-width: 760px) {
    padding: 0 50px;
  }
  @media screen and (min-width: 960px) {
    padding: 20px 60px;
  }

  @media screen and (min-width: 1200px) {
    padding: 30px 90px;
  }

  .middle-icon-box {

    .image {
      width: 100px;
      height: auto;
    }
  }
}

.video-box {
  min-height: 200px;
  background: url('../../assets/rac/intro.25c302fb.png') no-repeat;
  background-size: 100% 100%;

  .intro-title-box {
    font-size: 14px;
    @media screen and (min-width: 760px) {
      font-size: 16px;
    }
    @media screen and (min-width: 960px) {
      padding-top: 20px;
      font-size: 30px;
    }
  }


  .intro-video {
    padding-top: 10%;
    padding-bottom: 5%;

    .intro-video-box {
      min-height: 140px;
      width: 80%;
    }
  }
}

.receive-box {
  margin: 20px;
  min-height: 200px;
  background: url('../../assets/rac/border3.124a052a.png') no-repeat;
  background-size: 100% 100%;

  .header {
    height: 40px;
    line-height: 40px;
    width: 24%;
    text-align: center;
    font-size: 14px;
    @media screen and (min-width: 760px) {
      font-size: 16px;
    }
  }

  .main {
    text-align: center;
    line-height: 70px;
    height: 70px;
  }

  .dr {
    background: url("../../assets/rac/dr.png") no-repeat;
    background-size: 100% auto;
    height: 15px;
  }

  .footer {
    .receive-btn {
      background: url("../../assets/rac/button2.94d0af22.png") no-repeat;
      background-size: 100% 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      min-width: 200px;
      width: auto;
      color: #ffffff;
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
