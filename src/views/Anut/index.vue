<template>
  <div>
    <el-calendar v-model="date" />

    <el-form ref="form" :model="form" label-width="120px">

      <el-form-item label="大姨妈来了">
        <el-switch v-model="form.anut" @change="changeAnut" />
      </el-form-item>

      <el-form-item>
        <span slot="label">
          <span class="span-box">
            <span>爱爱 ：</span>
            <i class="el-icon-question ico-pre" />
          </span>
        </span>
        <el-select v-model="form.aiai" clearable placeholder="请选择">
          <el-option
            v-for="item in aiai"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="身体状况">
        <el-checkbox-group v-model="form.bodyInfo">
          <el-checkbox label="腰痛" />
          <el-checkbox label="腹胀" />
          <el-checkbox label="便秘" />
          <el-checkbox label="痘痘" />
          <el-checkbox label="头痛" />
          <el-checkbox label="乳房胀痛" />
          <el-checkbox label="易怒" />
          <el-checkbox label="失眠" />
          <el-checkbox label="恶心" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="活动名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Anut',
  data: function() {
    return {
      name: '吃大便',
      date: new Date(),
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        anut: false,
        aiai: '',
        bodyInfo: []
      },
      aiai: [{
        value: '无措施',
        label: '无措施'
      }, {
        value: '避孕药',
        label: '避孕药'
      }, {
        value: '避孕套',
        label: '避孕套'
      }, {
        value: '自然避孕',
        label: '自然避孕'
      }]
    }
  },
  methods: {
    onSubmit() {
      this.$message({
        message: '成功啦~',
        type: 'success'
      })
    },
    changeAnut() {
      debugger
      const isAnut = this.form.anut
      if (isAnut) {
        this.$notify({
          title: '提示',
          message: '呀哈，来大姨妈了就该好好休息哈~',
          type: 'warning'
        })
      } else {
        this.$notify({
          title: '提示',
          message: '咦，是不是好了呀',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style scoped>
  input{
    font-size: 500%;
  }

  .span-box{
    display:inline-block;
    position:relative;
  }
  .ico-pre{
    position:absolute;
    left:-21px;
    top:12px;
  }

</style>
