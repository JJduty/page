// pages/index/index.js
Page({

  
  data: {
    item:0,
    tab:0,
    playlist:[
      {
        id:1,
        title:'悬溺',
        singer:'葛东琦',
        src:'https://dl.stream.qqmusic.qq.com/C400001thpPN1feDKU.m4a?guid=1109763676&vkey=56021B6D690321808FFF5A223C45B73AE313369B016B57C92F1ADD92401CC84E299924E4B253CBED10E8A3E6DDCF43BFB402C46F69C12D7F&uin=1152921504896278995&fromtag=120032',
        coverimgurl:'../../images/333.jpg',
      },
      {
        id:2,
        title:'爱到1440',
        singer:'时代少年团',
        src:'https://dl.stream.qqmusic.qq.com/C400000gDSx91KAPAd.m4a?guid=6479271634&vkey=A829BE5A0708C75DA51685280C437AB470115B3C68F1EC52846D609F366963CA06E4A3803D8A397E031DB13E307A1497A9B36B79FC308B97&uin=1152921504896278995&fromtag=120032',
        coverimgurl:'../../images/666.jpg',
      },
      {
        id:3,
        title:'热恋情节',
        singer:'吴子健',
        src:'https://dl.stream.qqmusic.qq.com/C400004GvTXJ25aHam.m4a?guid=1938008475&vkey=CD4F835A6F11CE5D3DCEA55BE16B87BEA062EDDD41B649F282366C5563ECCC5584B341AE405B2346337FD23C7F24A90117BA0CB034E09255&uin=1152921504896278995&fromtag=120032',
        coverimgurl:'../../images/bbb.jpg',
      },
      {
        id:4,
        title:'热恋',
        singer:'万妮达',
        src:'https://dl.stream.qqmusic.qq.com/C400001nuE4Z4ACGzd.m4a?guid=3666556056&vkey=470DCB0AF42B0E4D483F51C6F5954776790910D2B1C063521AAB522D75B9410F960175D1D8DE03A45143DEA1807CB358FE73B0E303604C09&uin=1152921504896278995&fromtag=120032',
        coverimgurl:'../../images/777.jpg',
      },
      {
        id:5,
        title:'18dB',
        singer:'吴子健/小蓝背心',
        src:'https://dl.stream.qqmusic.qq.com/C400003vAOuZ1MeQso.m4a?guid=3666556056&vkey=5597AB65E6C425D7EFD908EAEA37518DC0AB211371E70B452E961B3E57D26A8ADA7A5D878A144FA33C589B258EE91C457BA0F3703C612D87&uin=1152921504896278995&fromtag=120032&src=C400001IgixN2rXuQ6.m4a',
        coverimgurl:'../../images/aaa.jpg',
      },
      {
        id:6,
        title:'躺着真舒服',
        singer:'时代少年团',
        src:'https://dl.stream.qqmusic.qq.com/C400002NAi7U4XphUV.m4a?guid=2321549166&vkey=0D38B803753554D117A203349F9AE18EACDD86B061B1E13F2507F794EF39A51662AAB5F8A5C5024298C382006D104624599B693B0F87B588&uin=1152921504896278995&fromtag=120032',
        coverimgurl:'../../images/111.jpg',
      }
     
    ],
    state:'paused', //当前音乐状态，另一个running
    playindex:0,//当前播放音乐序号
    play:{
      title:'',
      singer:'',
      coverimgurl:'',
      duration:'00:00',
      currenttime:'00:00',
      percent:0
    }

  },
  audioctx:null,
  onReady:function(){
    this.audioctx=wx.createInnerAudioContext()
    this.setmusic(0)
    var that=this
    this.audioctx.onEnded(function(){
      that.next()
    })
    // this.audioctx.onPlay(function(){})
    this.audioctx.onTimeUpdate(function(){
      that.setData({
        'play.currenttime':that.formatTime(that.audioctx.currentTime),
        'play.duration':that.formatTime(that.audioctx.duration),
        'play.percent':that.audioctx.currentTime/that.audioctx.duration*100
      })
    })
  },
  formatTime:function(time){
    var minute=Math.floor(time/60)%60
    var second=Math.floor(time)%60
    return(minute<10?'0'+minute:minute)+":"+(second<10?'0'+second:second)
  },
  //设置音乐 准备好音乐 以待播放 但是不唱 index是播放音乐的序号
  setmusic:function(index){
    var music=this.data.playlist[index] //music就是对应的音乐 
    this.audioctx.src=music.src       //设置src上下文对象
    //更新data中play的信息（正在播放）
    this.setData({
      playindex:index,
      'play.title':music.title,
      'play.singer':music.singer,
      'play.coverimgurl':music.coverimgurl,
      'play.currenttime':'00:00',
      'play.duration':'00:00',
      'play.percent':0

    })
  },
  
  changeitem:function(e){      //轮播图自动切换
    this.setData({
      item:e.currentTarget.id
    })
  },
  changetab:function(e){  //配合轮播图切换的样式和颜色 e.detail.current
    this.setData({
      tab:e.detail.current
    })
  },
  changegd:function(e){
    this.setData({
      item:e.currentTarget.id,
      playindex:5
    })
    
    
  },
  song:function(e){
    this.setData({
      item:e.currentTarget.id,
    })
  },
  play:function(){
    this.audioctx.play()
    this.setData({
      state:'running'
    })
  },
  pause:function(){
    this.audioctx.pause()
    this.setData({
      state:'paused'
    })
  },
  next:function(){
    var index;
    if(this.data.playindex==this.data.playlist.length-1){
      index=0
    }else{
      index=this.data.playindex+1
    }

    this.setmusic(index)
    if(this.data.state=='running'){
      this.play()
    }
  },
  changetime:function(e){
    var second=e.detail.value*this.audioctx.duration/100
    this.audioctx.seek(second)
  },
  change:function(e){
    this.setmusic(e.currentTarget.dataset.index)
    this.play()
  },
  navigateTo:function(){
    wx.navigateTo({
      url:'/pages/index1/index1'
    })
  }

  
})