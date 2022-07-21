<script setup>
import logoImg from "../../assets/logo.png"
import {reactive} from "vue";

const tabsData = reactive({
  index: 0,
  data: [
    {
      title: 'direct_recommend_address_list',
      lists: ['0xdsog1561s651d1g****sd165f156g1651616', '0xdsog1561s651d1g****sd165f156g1651616']
    },
    {
      title: 'direct_recommend_address_list',
      lists: ['0xjasd1561s651d1g****0xjasd1561s651d1g', '0xjasd1561s651d1g****0xjasd1561s651d1g']
    },
  ]
})
</script>

<template>
  <div class="col-flex-center tw-space-y-10">
    <div class="tw-w-full tw-max-w-md">
      <div class="tw-leading-50">
        {{ $t('my_team') }}
      </div>
      <div class="flex-col tw-space-y-5 tw-w-full">
        <div class="flex-row tw-space-x-5">
          <div class="col-flex-center tw-w-1/2 rect-box">
            <div>{{ $t('team_person_count') }}</div>
            <div>10</div>
          </div>
          <div class="col-flex-center tw-w-1/2 rect-box">
            <div>{{ $t('team_card_count') }}</div>
            <div>10</div>
          </div>
        </div>
        <div class="flex-row tw-space-x-5">
          <div class="col-flex-center tw-w-1/2 rect-box">
            <div>{{ $t('direct_recommend_person_count') }}</div>
            <div>10</div>
          </div>
          <div class="col-flex-center tw-w-1/2 rect-box">
            <div>{{ $t('indirect_recommend_person_count') }}</div>
            <div>10</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-flex-center tw-w-full tw-max-w-md tw-text-10 tw-py-10 tw-px-10">
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

    <div class="tw-w-full tw-max-w-md tw-text-10 tw-pb-20 footer-box">
      <el-tabs v-model="tabsData.index">
        <el-tab-pane v-for="(item,i) of tabsData.data" :name="i" :key="i">
          <template #label>
            <div class="tw-text-10">{{ $t(item.title) }}</div>
          </template>
          <div class="tw-leading-30">
            <div
                class=" tw-text-center tw-cursor-pointer tw-border-0 tw-border-b tw-border-solid tw-border-gray-300"
                v-for="(v,index) of item.lists||[]" :key="`addr-${i}-${index}`">
              {{ v }}
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<style lang="less" scoped>
.rect-box {
@apply tw-px-10 tw-py-15 tw-rounded-2 tw-border tw-border-solid tw-border-gray-300;
}

.logo-box {
  border: solid 1px #c0c4cc;
  border-radius: 50%;
  padding: 5px;
}

.footer-box {
  background: url("../../assets/rac/border2.0c5acd3a.png") no-repeat;
  background-size: 100% 100%;
  padding: 10px 20px;
  padding-bottom: 40px;
}

</style>