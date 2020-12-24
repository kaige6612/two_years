/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/sdj.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(1991, 2, 26) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 10000) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft" id="main-content" >
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 600 }}>亲爱的！lulu！</h1>
                    <p>首先，祝你圣诞节快乐，来首歌放松下吧！Mu....Music!</p>
                    <p>时间过得真快啊，转眼马上2021年了，仔细想想，好像还没有陪你渡过过圣诞节，这次也不能回去陪你，
                    只能用这种方式陪你度过了。</p>
                    <p>你应该还在忙或者刚忙完吧，总是想劝你劳逸结合，多休息休息，但是我知道说这些你的工作量不会减少，你也不会因此轻松。
                        其实我一直挺心疼你的，我也慢慢更加了解你（自认为），你是一个倔强不服输的人，所以你会很认真的对待工作和考试；你也是一个不喜欢和别人一争高下的人，你想
                        安静的，开心的过好你的生活，单纯干净的生活；但是你也是个很坚强的人，你会坚强的带病工作，你会坚强的用行动反对你姐对你的安排
                        ；你还是个很在乎别人看法的人，在乎别人议论你，在乎别人如何看待考试的难度，甚至在乎别人的学习进度和效果，但是也因此你很容易
                        受外界因素的影响。看着你天天的忙碌，很心疼，也很欣慰。虽然知道没用，还是希望你能好好休息，不要太过操劳。

                </p>
                    <p>在这将近一年的时间里，我觉得咱们好像经过了比以前几年更加丰富、充实的经历。有一起吃饭、关系一步步靠近、陪你一起找工作、陪你聊天谈心的
                        甜蜜(对了，还有你年初给我买的锅,哈哈哈)；也有你学习期间焦虑烦恼、我的各种不解和烦恼、你家的两条狗突然失踪、你找工作不顺利等等烦恼，痛苦的时刻
                        ，但是我觉得这才是真实的你，这也才是真实的我。咱们也在慢慢了解彼此，我不会因为你不及时回复信息而辗转难眠，你应该也更理解我以前和现在的做法
                        我觉得，我们在慢慢融入彼此的生活和生命，你的生活中随处可见我的痕迹，我的脑海中也时刻都是你的一颦一笑。
                </p>
                    <p>虽然咱们现在是异地，但是咱们之间的关系仍然在坎坷中发展，就像一棵树苗在逆境中茁壮成长。每次回去，虽然只能短暂的见到你几个小时，但是那是我最开心的时候，我觉得那时候
                        我才是个有血有肉的人，而不是只想着挣钱的机器。很开心你现在开始在乎我的感受，甚至都会哄我了。其实说实话我不会哄人，性格也比较直，很多时候回想起来应该哄你的，但是
                        当时我都没有察觉。一直以来我都很看重你的感受和想法，同时由于以前的经历，非常担心偶然的分别最后成为永别，所以你可能会觉得我有些夸张或者有些时候无法理解，而我有时候
                        会觉得你不够珍惜。仔细想来都没有错，只是看法不同而已。类似的分歧以后肯定还会有，我相信我们可以互相理解，互相包容。
                </p>
                    <p>异地恋很艰难，但是我相信咱们可以坚守自我，最终修成正果。另外，我把咱们之间的亲密举动当做关系远近的标志，所以你每次的拒绝我都会觉得很失落，不过你说的话和
                        对我的好已经形成了坚实的壁垒，不至于让失落的情绪打败我。

                </p>
                    <p>
                        记得上次答应的哈，说话算话，我可记着呢！
                    </p>
                    <p>再次祝你圣诞节快乐，心想事成，考试顺利，越来越漂亮，明年顺利上岸!对了，页面的时间我是从你生日开始算的，哈哈哈。。。。</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥kai</p>
                        <p>2020年12月25日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main