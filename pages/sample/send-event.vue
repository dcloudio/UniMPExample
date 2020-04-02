<template>
	<view>
		<button type="primary" @click="sendEvent">向宿主App发送消息</button>
		<text>{{ nativeMsg }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nativeMsg: ''
			}
		},
		onLoad() {
			uni.onNativeEventReceive((event,data)=>{
				console.log('接收到宿主App消息：' + event + data);
				this.nativeMsg = '接收到宿主App消息 event：' + event + " data: " + data;
			})
		},
		methods: {
			sendEvent() {
				uni.sendNativeEvent('unimp-event', {
					msg: 'unimp message!!!'
				}, ret => {
					this.nativeMsg = '宿主App回传的数据：' + ret;
				})
			}
		},
	}
</script>

<style>
</style>
