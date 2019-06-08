<template>
    <div class="info">
        <div class="head">
            <div class="avatar">
                <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" >
                <div class="name"> Zhanwei</div>
            </div>
            <div class="infomation">
                <p class="item">
                    <a-icon type="user" />web前端开发工程师
                </p>
                <p class="item">
                   <a-icon type="bank" />Amole信息科技
                </p>
                <p class="item">
                    <a-icon type="global" />江苏常州
                </p>
            </div>
        </div>
        <a-divider dashed  />
        <div class="tag">
            <div class="title">标签</div>
            <div class="tags">
            <a-tag color="pink">vue</a-tag>
            <a-tag color="red">js</a-tag>
            <a-tag color="orange">react</a-tag>
            <a-tag color="green">electron</a-tag>
            <a-tag color="cyan">屌丝</a-tag>
            <a-tag color="blue">猛男</a-tag>
            <a-tag color="purple">欧巴~</a-tag>
            </div>
        </div>
        <a-divider dashed  />
        <div class="team">
            <div class="title">团队</div>
            <a-row>
                <a-col :span="12" class="item">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" size="small">A</a-avatar> Amole天团
                </a-col>
                <a-col :span="12" class="item">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" size="small">A</a-avatar> Amole天团
                </a-col>
            </a-row>
             <a-row>
                <a-col :span="12" class="item">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" size="small">A</a-avatar> Amole天团
                </a-col>
                <a-col :span="12" class="item">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" size="small">A</a-avatar> Amole天团
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.info{
    padding: 24px;
    .head{
        .avatar{
            text-align: center;
            img{
                width: 100px
            }
            .name{
                text-align: center;
                font-size: 18px;
                font-weight: bold
            }
        }
        .infomation{
            padding-top: 24px;
            .item{
                // padding: 10px
                i{
                    margin-right: 10px
                }
            }
        }
    }
    .tag{
        .title{
                margin-bottom: 12px;
                color: rgba(0,0,0,.85);
                font-weight: 500;
        }
        .ant-tag {
            margin-bottom: 10px !important
        }
    }
    .team{
        .title{
            margin-bottom: 12px;
            color: rgba(0,0,0,.85);
            font-weight: 500;
        }
        .item{
            padding-top: 10px
        }
    }

}
</style>

