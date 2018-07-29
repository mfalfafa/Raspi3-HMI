<template>
<div>
    <h2>{{component_name}}</h2>
    <h2>{{method01()}}</h2>
    <h2>{{method02()}}</h2>
    <button v-on:click="count++">You click me {{count}}</button>
    <div>
        <router-link class='btn' to='/downtimepage'>Goto downtime page</router-link>
    </div>
    <!-- <dt-page :clicked='count'></dt-page> -->
</div>
</template>

<script>
    // Import components
    import dtPage from './DowntimePage'

    export default {
        name: 'component1',
        components:{ dtPage },
        data(){
            return {
                component_name:"This is Component 1",
                count:0,
                items:[
                    {message:"a"},
                    {message:"b"}
                ]
            }
        },methods:{
            method01: function(){
                return "Hello, this is my own component 1.";
            },
            method02: function(){
                return "This create by vue javascript";
            },
            method03: function(){
                this.component_name = '=== Component 01 ==='
            }
        }

    }
</script>
<style>
    .btn{
        margin-top: 10px;
        padding: 5px;
        background: #00ff00;
        text-decoration: none;
    }
</style>
