document.addEventListener("DOMContentLoaded",
	function(){
		new Vue({
			el:"#calc",
			data:function(){
				return{
					znam1:'',
					znam2:'',
					answer:0
				}
			},
			methods:{
				plus: function(){
					this.answer = parseInt(this.znam1)+parseInt(this.znam2);
				},
				minus: function(){
					this.answer = parseInt(this.znam1)-parseInt(this.znam2);
				},
				multiply:function(){
					this.answer = parseInt(this.znam1)*parseInt(this.znam2);
				},
				divided:function(){
					this.answer = parseInt(this.znam1)/parseInt(this.znam2);
				}
			}
		})
	}
)