function timer($this) {
    var i = 60;
    var time1 = setInterval(function () {
        if(i <= 60 && i > 0){
            i--;
            $this.text(i + "秒后重新发送");
            $this.attr("disabled","disabled");
            $this.css("background","#d7d7d7");
        }else if(i <= 0){
            i = 60;
            clearInterval(time1);
            $this.text("获取验证码");
            $this.removeAttr("disabled");
            $this.css("background", "#FF9D00");
        }
    }, 1000)
}