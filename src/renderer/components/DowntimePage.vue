<template>
	<div>
		<h3>Hello to this page...</h3>
		<div>{{component_name}}</div>
		<h3>Click {{clicked}}</h3>
		<div>
			<router-link to='/'>Back</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'DowntimePage',
		data(){
			return{
				component_name:'This is Downtime Page.'
			}
		},
		props:[ 'clicked' ],
		methods:{

		}
	}
</script>