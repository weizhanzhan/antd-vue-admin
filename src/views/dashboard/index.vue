<template>
  <wx-container>
    <div class="dashboard">
      <div>
        <a-row :gutter="16">
          <MenuCard
            title="Vue.js"
            sub-title="Evan You"
            :count="141000"
            :value="20"
          />
          <MenuCard
            title="React.js"
            sub-title="Facebook"
            :count="131000"
            :value="50"
          />
          <MenuCard
            title="Angular.js"
            sub-title="Google"
            :count="50000"
            :value="70"
          />
          <MenuCard
            title="Jquery.js"
            sub-title="John Resig"
            :count="51000"
            :value="90"
          />
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
            <TotalItem
              title="Total Visit"
              value="5000"
            />
            <TotalItem
              title="Total Visit"
              value="5000"
            />
            <TotalItem
              title="Total Visit"
              value="5000"
            />
            <TotalItem
              title="Total Visit"
              value="5000"
            />
          </a-row>
        </a-col>
      </a-row>
    </div>
  </wx-container>
</template>
<script>
  import Chart from './components/dashborad-line/chart'
  import MenuCard from './components/menu-card'
  import TotalItem from './components/total-item'
  export default {
    components: {
      Chart,
      MenuCard,
      TotalItem
    }
  }

</script>
<style lang="scss">
.dashboard {
  .w_menu_card {
    margin-bottom: 32px
  }

  .w_card_content {
    background: #ffffff;
    height: 125px;
    padding: 20px;

    .w_card_title {
      float: right;
    }

    .w_card_remark {
      font-size: 14px;
      float: right;
      margin-top: 8px;
      color: #999;
      font-weight: 300;
    }
  }

  .w_card_content>h2 {
    font-size: 20px;
    color: #303030;
    font-weight: 700;
    margin-bottom: 5px
  }

  .w_card_content>h5 {
    font-size: 14px;
    color: #303030;
    font-weight: 700;
    margin-bottom: 5px
  }

  .title-card {
    margin: 8px;

    .card-col {
      padding: 8px;

      .card {
        cursor: pointer;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
        height: 108px;
        border-radius: 2px;

        .card-avatar {
          text-align: center;
          margin-top: 30px;

          i {
            font-size: 50px;
            transform: scale(1)
          }

          i:hover {
            transition: all 0.3s;
            transform: scale(1.2)
          }
        }

        .card-info {
          text-align: center;
          margin-top: 15px;

          .info-name {
            color: rgba(0, 0, 0, .45);
            font-size: 26px;
            font-weight: 600
          }

          .info-value {
            font-size: 20px;
            font-weight: 700;
          }

        }
      }
    }
  }

  .dashboard_chart {
    background: #fff;
    padding: 20px
  }

  .statistics-text {
    text-align: right;
    height: 65px;
    position: relative;

    .statistics-text-value {
      position: absolute;
      bottom: 0;
      right: 0;

      .value-rise {
        // font-size: 20px
        color: #096dd9
      }

      .value-fall {
        color: #f5222d
      }

      .value-label {
        font-size: 20px;
        font-weight: 700;
        padding-left: 6px
      }
    }
  }
}

</style>
