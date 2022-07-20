<script setup>
import {EventsEnum} from "../../events/EventsEnum";
import {useRefreshStore} from "../../store/refreshStore";
import {onMounted, onUnmounted, ref} from "vue";
import {useI18n} from "vue-i18n";

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
  {title: 'step_title_4', desc: t('roadMap.step_desc_4')},
])
</script>

<template>
  <div class="col-flex-center">
    <div class="tw-w-full tw-max-w-md tw-py-20 tw-leading-30">
      BuryDAO META UNIVERSE ECOLOGICAL PLATFORM
    </div>
    <div class="tw-w-full tw-max-w-md tw-py-20 tw-w-full">
      <video style="width:100%; height:100%; object-fit: fill" controls>
        <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
      </video>
    </div>

    <div class="tw-w-full tw-max-w-md tw-text-20 tw-leading-40">{{ $t('road_map') }}</div>
    <div class="tw-w-full tw-max-w-md tw-py-20 tw-w-full">
      <el-timeline>
        <el-timeline-item
            v-for="(item,i) of stepsData"
            :key="i">
          <div class="tw-text-dark">{{ $t(`roadMap.${item.title}`) }}</div>
          <div v-html="$t(`roadMap.${item.desc}`)" class="tw-text-light tw-py-10"></div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
