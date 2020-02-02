// navbar component
Vue.component('navbar', {
    props: ['navbar'],
    template: `
        <ul class="nav justify-content-center fixed-top" style="width:100vw;">
        <li class="nav-item">
        <a class="nav-link active" href="#panel">Top</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" href="#header">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#skills-header">Skills</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#works">Works</a>
        </li>
        </ul>
    `
})
new Vue({el:'#nav',
         mounted: function(){
            var duration = 300;
            $('.nav-item').on('mouseover',function(){
                $(this).stop(true).animate({
                    backgroundColor:'#e6e6e6' 
                },duration);
            });
            $('.nav-item').on('mouseout',function(){
                $(this).stop(true).animate({
                    backgroundColor:'#FAFAFA' 
                },duration);
            });
        }
    })

// panel component
Vue.component('panel-header', {
    template: `
        <p class="panel-header">Welcom to Fukuishi Kento's Portfolio Site</p>
    `
})
new Vue({
        el:'#panel',
        mounted: function(){
            $('.panel-header').hide().fadeIn('slow')
        }
    })

// header component
Vue.component('list-title', {
    props: ['title'],
    template: `
        <h2 class="header">{{title}}</h2>
    `
})
new Vue({el:'#header'})
new Vue({el:'#skills-header'})
new Vue({el:'#works-header'})
// introduce component
Vue.component('introduce', {
    template: `
        <table style="width: 80vw;">
            <tbody>
                <tr style="border-style:none;">
                    <th class="intro-th">Name</th><td class="intro-con">福石　健人(Fukuishi Kento)</td>
                </tr>
                <tr style="border-style:none;">
                    <th class="intro-th">Birthday</th><td class="intro-con">2001/02/14</td>
                </tr>
                <tr style="border-style:none;">
                    <th class="intro-th">University</th><td class="intro-con">静岡県立大学　経営情報学部</td>
                </tr>
                <tr style="border-style:none;">
                    <th class="intro-th" id="contact">Contact</th><td class="intro-con">b19103@u-shizuoka-ken.ac.jp</td>
                </tr>
            </tbody>
        </table>
    `
})
new Vue({el:'#intro'})
// skills component
Vue.component('skills', {
    template: `
        <div class="row">
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">HTML CSS</span>
                    <p>HTML・CSSを使ってレスポンシブなWebサイトを作成することができます</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">Javascript</span>
                    <p>Javascriptを使ってWebサイトに様々な動きをつけることができます</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">PHP</span>
                    <p>PHPフレームワークLaravelを使ってアプリケーションを開発できます</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">Wordpress</span>
                    <p>HTMLのWebサイトをPHPを使ってワードプレス化することができます</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">VirtualBox</span>
                    <p>Vagrantなどの仮装環境を構築してアプリケーションを開発することができます</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card fadein">
                    <div class="card-content grey-text text-darken-4">
                    <span class="card-title" style="font-weight:400;">MySQL</span>
                    <p>MySQL・PHPなどを使ってデータベースとデータのやりとりが可能なアプリケーションを作ることができます</p>
                    </div>
                </div>
            </div>
        </div>
    `
})
new Vue({
        el:'#skills',
        mounted: function(){
            $(window).scroll(function (){
                $('.fadein').each(function(){
                    var targetElement = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > targetElement - windowHeight + 100){
                        $(this).animate({opacity:'1'},350);
                        $(this).animate({transform:'translateY(0)'},350);
                    }
                });
            });
        }
    })
// works component
Vue.component('works-wp', {
    template: `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="screencapture-wordpresscom-local-2019-10-19-21_45_43.png">
        </div>
        <div class="card-content">
          <p>ブログのオープンソースのテーマをWordpress化しました</p>
        </div>
      </div>
    </div>
  </div>
    `
})
Vue.component('works-la', {
    template: `
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="screencapture-127-0-0-1-8000-home-2019-10-20-16_11_56.png">
        </div>
        <div class="card-content">
          <p>laravelで作成した掲示板サイトです。<hr>
            実装機能<br>
            ・ログイン機能<br>
            ・投稿削除機能<br>
            ・各ユーザーの個別投稿を見ることができる個別ページ<br>
            （掲示板に必要な最低限の機能は揃っている<br>
            DB<br>
            ・MySQL</p>
        </div>
      </div>
    </div>
  </div>
    `
})
new Vue({el:'#works'})
