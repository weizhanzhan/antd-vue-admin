<template>
  <div class="container">
    <div class="screen">
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.container{

}
.screen{
  position:relative;
  height:100px;
  width:100px;
  overflow:hidden;
  background:#301353;
  margin: 0 auto;
  margin-top: 100px;
  /* border: 10px solid #000;
  border-radius: 10px; */
  /* padding: 10px */
}
.screen ul{
  position: absolute;
  list-style:none;
  top: 0;
  padding:0;
  margin: 0;
  width:100px;
  animation: codeMove 5s linear infinite;
}
.screen li {
  position: relative;
  height: 5px;
  margin: 0 0 5px 0;
  border-radius: 5px;
  width:60px;
  background:#ffb023;
}

.screen li:nth-child(2n+0){
  background:#ff4766;
  width:50%
}
.screen li:nth-child(3n+0){
  background:#29b97d;
  width:70%
}
.screen .title{
  width:100%;
  height:20px;
  background:#000000;
}
@keyframes codeMove{
  100%{
    top: -60%
  }
}
</style>
