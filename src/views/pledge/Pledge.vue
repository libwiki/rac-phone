<script setup>
import {Carousel3d, Slide} from "../../plugins/carousel-3d"
import {px2rem} from "../../utils/helpers";
import logoImg from "../../assets/logo.04179b1c.png"
</script>

<template>
  <div class="col-flex-center">
    <div class="col-flex-center">
      <div>
        <Carousel3d
            :width="240"
            :height="148"
            :border="0"
            :shrink="20"
            :perspective="20"
            :inverse-scaling="-100"
            :count="3"
            :display="3">
          <Slide :index="0" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(348)}`">
              <el-image
                  class="c-image"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
            </div>
          </Slide>
          <Slide :index="1" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(348)}`">
              <el-image
                  class="c-image"
                  src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"/>
            </div>
          </Slide>
          <Slide :index="2" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(348)}`">
              <el-image
                  class="c-image"
                  src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"/>
            </div>
          </Slide>
        </Carousel3d>
      </div>
      <div class="tw-py-10">
        <ElButton>
          {{ $t('immediate_pledge') }}
        </ElButton>
      </div>
    </div>
    <div class="col-flex-center tw-w-full tw-max-w-md tw-text-10 tw-bg-gray-50 tw-py-10 tw-px-10">
      <div
          class="flex-row tw-justify-between tw-w-full tw-mb-10 rect-box">
        <div>{{ $t('total_income') }}（Bury）</div>
        <div>5000{{ $t('pieces') }}</div>
      </div>
      <div class="flex-row tw-justify-between tw-w-full tw-mb-10 rect-box">
        <div class="tw-flex-1">
          <div class="tw-pb-10">{{ $t('income') }}（Bury）</div>
          <div class="flex-row tw-items-center">
            <el-image class="tw-w-30 tw-h-30 logo-box" :src="logoImg" fit="fill"/>
            <div class="tw-px-5">
              0.2242341
            </div>
          </div>
        </div>
        <div class="flex-col tw-items-center tw-justify-center">
          <div class="tw-pb-5">
            <ElButton size="small">{{ $t('income_record') }}</ElButton>
          </div>
          <div>
            <ElButton size="small">{{ $t('income_draw') }}</ElButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.c-item {
  .c-image-box {
    width: 100%;
    flex-shrink: 0;
    overflow: hidden;
    .row-flex-center;

    .c-image {
      width: 90%;
      height: 100%;
    }
  }
}

.rect-box {
@apply tw-px-10 tw-py-15 tw-rounded-2 tw-border tw-border-solid tw-border-gray-300;
}

.logo-box {
  border: solid 1px #c0c4cc;
  border-radius: 50%;
  padding: 5px;
}
</style>