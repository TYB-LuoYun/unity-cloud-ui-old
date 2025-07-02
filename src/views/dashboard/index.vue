<template>
  <div class="app-container">
    <el-row>
      <el-col style="width: 49%; margin-right: 1%">
        <el-card class="box-card">
        
        </el-card>
      </el-col>
      <el-col style="width: 50%">
        <el-card class="box-card">
              </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 18px">
      <el-col style="width: 49%; margin-right: 1%">
        <el-card class="box-card">
          
        </el-card>
      </el-col>
      <el-col style="width: 50%">
        <el-card class="box-card">
           
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 18px">
      <el-col style="">
        <el-card class="box-card">
          
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardEditor',
  data() {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}
.el-collapse {
  border-top: none;
}
.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;

  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }

  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;

    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
