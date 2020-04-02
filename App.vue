<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "uniicons",
				'src': "url('/static/uni.ttf')"
			});
			
			var testModule = uni.requireNativePlugin("TestModule")
			// 调用同步方法
			var ret = testModule.testSyncFunc({
				'name': 'unimp',
				'age': 1
			})
			console.log('TestModule >>>>>>>>>>>>>>>>>: ' + JSON.stringify(ret));
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni-nvue.css';
	
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28rpx;
		line-height: 1.8;
	}
</style>
