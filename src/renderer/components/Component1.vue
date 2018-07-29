<template>
<div>
    <h2>{{component_name}}</h2>
    <h2>{{method01()}}</h2>
    <h2>{{method02()}}</h2>
    <button v-on:click="count++">You click me {{count}}</button>
</div>
</template>

<script>
    export default {
        name: 'component1',
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