<template>
    <div class="account">
        <a-row>
            <a-col :span="7" class="account-item">
                <div class="account-info">

                </div>
            </a-col>
            <a-col :span="17" class="account-item">
                <div class="account-detail">

                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// $theme-color 全局css
.account {
    padding: 8px;
    .account-item{
        padding: 8px 16px 12px 8px;
        .account-info{
            width: 100%;
            height: 500px;
            background: #ffffff
        }
        .account-detail{
        
            width: 100%;
            height: 500px;
            background: #ffffff
    }
    }
    
}

</style>
