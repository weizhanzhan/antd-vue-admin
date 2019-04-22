<template>
    <div class="container-view">
        <h1>{{$route.query.id?'Edit':'Create'}}</h1>   
        <Form :id="$route.query.id"/> 
    </div>
</template>

<script>

import Form from './components/form'

export default {
    components:{ Form },
    data() {
        return {
            
        };
    }
}
</script>

<style>

</style>
