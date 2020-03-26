<template>
    <div class="cmt-container">
       <div class="form-group">
                <label>评论人：</label>
                <input type="text" v-model="user" class="form-control" maxlength="6" style="height:30px;">
            </div>
            <div class="form-group">
                <label>评论内容：</label>
                <textarea class="form-control" v-model="content" placeholder="请输入您的评论(最多输入200个字)" maxlength="200"></textarea>
            </div>
        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:'',
            content:''
        }
    },
    methods:{
      add(){
          var com={content:this.content,user:this.user}
          var list=JSON.parse(localStorage.getItem('key')||'[]')
          list.push(com)
          localStorage.setItem('key',JSON.stringify(list))
          this.content=this.user=''
          this.$emit("func")
      }
    }
}
</script>
<style scoped>
textarea{
    font-size: 12px;
    height: 85px;
    margin: 0;
}
label{
    font-size: 12px;
}
</style>

