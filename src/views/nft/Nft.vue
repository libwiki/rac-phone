<script setup>
import {Carousel3d, Slide} from "../../plugins/carousel-3d";
import {px2rem} from "../../utils/helpers";
</script>

<template>
  <div class="col-flex-center">
    <div class="col-flex-center tw-w-full tw-max-w-md">
      <div class="quarter-box">
        <div class="title">
          {{ $t('quarter1') }}
        </div>
        <div class="sheets">
          {{ $t('remaining_sheets', {sheets: 50}) }}
        </div>
      </div>
      <div>
        <Carousel3d
            :border="0"
            :shrink="20"
            :perspective="20"
            :inverse-scaling="-100"
            :count="3"
            :display="3">
          <Slide :index="0" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(248)}`">
              <el-image
                  class="c-image"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
            </div>
          </Slide>
          <Slide :index="1" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(248)}`">
              <el-image
                  class="c-image"
                  src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"/>
            </div>
          </Slide>
          <Slide :index="2" class="c-item">
            <div class="c-image-box" :style="`height:${px2rem(248)}`">
              <el-image
                  class="c-image"
                  src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"/>
            </div>
          </Slide>
        </Carousel3d>
      </div>
      <div class="">
        The a card ,nicknamed "Junyi Gongzi" is first with strong strength and high appearance, and each piece
        produces 1,000 tokens
      </div>
      <div class="tw-py-10">
        <div class="tw-text-red-400 tw-text-center tw-leading-25">
          1000USDT
        </div>
        <!--<ElButton type="danger">-->
        <!--  {{ $t('snap_up_now') }}-->
        <!--</ElButton>-->
        <div class="buy-btn">
          {{ $t('snap_up_now') }}
        </div>
      </div>
    </div>

    <div class="tw-w-full tw-py-20 dr"></div>

    <div class=" tw-w-full tw-max-w-md col-flex-center tw-pt-20">
      <div class="quarter-box">
        <div class="title">
          {{ $t('quarter2') }}
        </div>
        <div class="sheets">
          {{ $t('unopened') }}
        </div>
      </div>
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
      <div class="">
        The a card ,nicknamed "Junyi Gongzi" is first with strong strength and high appearance, and each piece
        produces 1,000 tokens
      </div>
      <div class="tw-py-10">
        <ElButton disabled>
          {{ $t('unopened') }}
        </ElButton>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.dr {
  background: url("../../assets/rac/dr.png") no-repeat;
  background-size: 100% auto;
  height: 15px;
}

.buy-btn {
  background: url("../../assets/rac/button1.5dae442c.png") no-repeat;
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

.quarter-box {
  background: url("../../assets/rac/money.bc9d3fdd.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  min-height: 100px;
  height: auto;

  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .sheets {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #ffc925;
  }
}

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
</style>