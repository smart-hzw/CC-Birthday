// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "这十年中最最最要好",
        "也是我人生至今近一半时间中",  // 同上...
        "最最最重要的挚友",
        "今天是你的生日",
        "这是我们认识的第九年了",
        "谢谢你一路以来",
        "对我的帮助跟支持",
        "今天也是",
        "你这只大长腿生物的破壳日，",
        "在此希望你能够工作顺心、",
        "爱情获得大丰收、",
        "尽早让我喝到你的喜酒",
        "我的红包已经准备好了",
        "嘻嘻嘻！！！",
        "好了，这个简短的比较low的",
        "小程序就到这中止了，",
        "不要失望，哈哈哈！！！",
        "好久没有做过这个了，比较菜！！！",
        "等以后给你做个人工智能的程序给你玩",
        "好了享受完这首音乐吧！",
        "see you again!!!",
        "My best friend.",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs:{
         "送给我":"./imgs/CC2.jpg",
        "这十年中最最最要好":"./imgs/faceu_20190319173137.jpg",
         "也是我人生至今近一半时间中":"./imgs/CC1.jpg",
        "最最最重要的挚友":"./imgs/pt2019_02_23_08_26_52.jpg",
         "谢谢你一路以来":"./imgs/apic4383.jpg",
        "对我的帮助跟支持":"./imgs/apic4383.jpg",
        "爱情获得大丰收、":"./imgs/1293040_1276843373.jpg",
        "嘻嘻嘻！！！":"./imgs/2190318_1284089432.jpg",
        
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "ok,让我们开始",
        play: "music响起",
        bannar_coming: "呜呼!22===2岁",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
