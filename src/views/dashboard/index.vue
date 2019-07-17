<template>
  <div class="dashboard">
    <div class="title-card">
      <a-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="6"
        class="card-col"
      >
        <a-row class="card">
          <a-col
            :span="8"
            class="card-avatar"
          >
            <a-icon
              type="team"
              style="color: #40c9c6"
            />
          </a-col>
          <a-col
            :span="16"
            class="card-info"
          >
            <div class="info-name">
              users
            </div>
            <div class="info-value">
              2,100
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="6"
        class="card-col"
      >
        <div class="card">
          <a-col
            :span="8"
            class="card-avatar"
          >
            <a-icon
              type="read"
              style="color:#36a3f7"
            />
          </a-col>
          <a-col
            :span="16"
            class="card-info"
          >
            <div class="info-name">
              Record
            </div>
            <div class="info-value">
              2,100
            </div>
          </a-col>
        </div>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="6"
        class="card-col"
      >
        <a-row class="card">
          <a-col
            :span="8"
            class="card-avatar"
          >
            <a-icon
              type="area-chart"
              style="color:#f4516c"
            />
          </a-col>
          <a-col
            :span="16"
            class="card-info"
          >
            <div class="info-name">
              Trend
            </div>
            <div class="info-value">
              2,100
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="6"
        class="card-col"
      >
        <a-row class="card">
          <a-col
            :span="8"
            class="card-avatar"
          >
            <a-icon
              type="experiment"
              style="color:#34bfa3"
            />
          </a-col>
          <a-col
            :span="16"
            class="card-info"
          >
            <div class="info-name">
              Experiment
            </div>
            <div class="info-value">
              2,100
            </div>
          </a-col>
        </a-row>
      </a-col>
      </a-row>
      <div class="container-view">
        <Chart />
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from './components/chart.vue'
  export default {
    components: { Chart }
  }
</script>

<style lang="scss" scoped>
.dashboard{
    .title-card{
        margin:8px;
        .card-col{
            padding: 8px;
            .card{
                cursor: pointer;
                background: #fff;
                box-shadow: 4px 4px 40px rgba(0,0,0,.05);
                border-color: rgba(0,0,0,.05);
                height: 108px;
                border-radius: 2px;

                .card-avatar{
                    text-align: center;

                    margin-top: 30px;
                    i {
                        font-size: 50px
                    }
                    i:hover{
                        transition: all 0.5s;
                        transform: scale(1.2)
                    }
                }
                .card-info{
                    text-align: center;
                    margin-top: 15px;
                    .info-name{
                        color: rgba(0,0,0,.45);
                        font-size: 26px;
                        font-weight: 600
                    }
                    .info-value{
                        font-size: 20px;
                        font-weight: 700;
                    }

                }
            }
        }
    }
    .container-view{
        height: 650px;
    }
}
</style>
