<template>
  <div class="dashboard">
    <!-- <div class="title-card">
      <a-row>
        <a-col
          ::xs="24"
          ::sm="24"
          ::md="12"
          ::lg="12"
          ::xl="6"
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
          ::xs="24"
          ::sm="24"
          ::md="12"
          ::lg="12"
          ::xl="6"
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
          ::xs="24"
          ::sm="24"
          ::md="12"
          ::lg="12"
          ::xl="6"
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
          ::xs="24"
          ::sm="24"
          ::md="12"
          ::lg="12"
          ::xl="6"
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
      <div class="dashboard_chart">
        <Chart />
      </div>
    </div> -->
    <div>
      <a-row :gutter="16">
        <a-col
          class="w_menu_card"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="6"
        >
          <div class="w_card_content">
            <h5>
              <span>Vue.js</span>
              <span class="w_card_title">Evan You</span>
            </h5>
            <h2>
              <span>141,000</span>
              <span class="w_card_remark">stars</span>
            </h2>
            <IconSlider
              min="0"
              max="20"
            />
          </div>
        </a-col>
        <a-col
          class="w_menu_card"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="6"
        >
          <div class="w_card_content">
            <h5>
              <span>React.js</span>
              <span class="w_card_title">Facebook</span>
            </h5>
            <h2>
              <span>131,000</span>
              <span class="w_card_remark">stars</span>
            </h2>
            <IconSlider
              min="0"
              max="20"
            />
          </div>
        </a-col>
        <a-col
          class="w_menu_card"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="6"
        >
          <div class="w_card_content">
            <h5>
              <span>Angular.js</span>
              <span class="w_card_title">Google</span>
            </h5>
            <h2>
              <span>50,000</span>
              <span class="w_card_remark">stars</span>
            </h2>
            <IconSlider
              min="0"
              max="20"
            />
          </div>
        </a-col>
        <a-col
          class="w_menu_card"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="6"
        >
          <div class="w_card_content">
            <h5>
              <span>Jquery.js</span>
              <span class="w_card_title">John Resig</span>
            </h5>
            <h2>
              <span>51,000</span>
              <span class="w_card_remark">stars</span>
            </h2>
            <IconSlider
              min="0"
              max="20"
            />
          </div>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="18"
      >
        <div class="dashboard_chart">
          <Chart />
        </div>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="6"
      >
        <a-row>
          <a-col
            class="w_menu_card"
          >
            <div class="w_card_content">
              <h5>
                <span>Total Visit</span>
              </h5>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import Chart from './components/chart.vue'
  import IconSlider from '../../components/IconSlider'
  import chartBarItem from '@/components/ChartBar'
  export default {
    components: { Chart, IconSlider }
  }
</script>

<style lang="scss" scoped>
.dashboard{
  padding:16px 16px 0 16px;
  .w_menu_card{
    margin-bottom: 32px
  }
  .w_card_content{
      background: #ffffff;
      height: 125px;
      padding: 20px;
      .w_card_title{
          float: right;
      }
      .w_card_remark{
          font-size: 14px;
          float: right;
          margin-top: 8px;
          color: #999;
          font-weight: 300;
      }
  }
  .w_card_content > h2{
      font-size: 20px;
      color: #303030;
      font-weight: 700;
      margin-bottom: 5px
  }
  .w_card_content > h5{
      font-size: 14px;
      color: #303030;
      font-weight: 700;
      margin-bottom: 5px
  }
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
                          font-size: 50px;
                          transform: scale(1)
                      }
                      i:hover{
                          transition: all 0.3s;
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
      .dashboard_chart{
          background: #fff;
      }
}
</style>
