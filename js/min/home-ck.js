$(document).ready(function(){function t(){function t(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}function e(){$("#play-button").on("click",function(t){t.preventDefault(),$(this).fadeOut(),y||p.playVideo(),$("#embed").css({zIndex:"99",opacity:"1"}),w=setInterval(o,1e4)})}function n(t){1===t.data&&(f=p.getDuration()),2===t.data,0===t.data&&clearInterval(w)}function o(){var t=p.getCurrentTime(),e=t/f*100,n=Math.round(e);n>=25&&0===g&&(g=1,ga("send","event","RBMA15","Film","25perc")),n>=50&&0===m&&(m=1,ga("send","event","RBMA15","Film","50perc")),n>=75&&0===v&&(v=1,ga("send","event","RBMA15","Film","75perc"))}function r(){var t=document.getElementById("stream").getBoundingClientRect();return a=t.height?t.height:t.bottom-t.height}function d(t){t.hasClass("filmlink")?($("#wrapper").animate({scrollTop:i},l),$("#pointer").fadeOut()):t.hasClass("aboutlink")?($("#wrapper").animate({scrollTop:$("#aboutlink").offset().top},2*l),$("#pointer").fadeOut()):t.hasClass("titlelink")&&$("#wrapper").animate({scrollTop:0},l)}function c(t){var e=t.getBoundingClientRect();return[e.left]}function D(){var t=$("#wrapper").scrollTop();winheight=$(window).height(),$("#pointer").fadeOut(),winheight/2>t&&$("#wrapper").animate({scrollTop:i},l),t>=winheight/2&&2*winheight>t&&$("#wrapper").animate({scrollTop:2*i},l),t>=2*winheight&&2.5*winheight-1>t&&$("#wrapper").animate({scrollTop:2.5*i},l),t>=2.5*winheight-10&&3.5*winheight-1>t&&$("#wrapper").animate({scrollTop:3.5*i},l),t>=3.5*winheight-1&&$("#wrapper").animate({scrollTop:6*i},1.5*l)}function b(){var t=$("#wrapper").scrollTop();winheight=$(window).height(),t>=winheight/2&&2*winheight>t&&$("#wrapper").animate({scrollTop:0},l),t>=2*winheight&&2.5*winheight-1>t&&$("#wrapper").animate({scrollTop:i},l),t>=2.5*winheight-1&&3.5*i-1>t&&$("#wrapper").animate({scrollTop:2*i},l),t>=3.5*winheight-1&&4.5*winheight>t&&$("#wrapper").animate({scrollTop:2.5*i},l),t>=4.5*i-1&&$("#wrapper").animate({scrollTop:3.5*i},l)}h.attr("href",k),s.attr("href",T),u="_EDnMFJiv8U",t(),window.onYouTubeIframeAPIReady=function(t){var i=r(),o=$(window).width();p=new YT.Player("embed",{height:i,width:o,videoId:u,events:{onReady:e,onStateChange:n}})},$("#download").find(".download-left img").on("mouseenter",function(){$(this).attr("src","//d17vwh530ty7de.cloudfront.net/standard_def_back.svg")}),$("#download").find(".download-left img").on("mouseleave",function(){$(this).attr("src","//d17vwh530ty7de.cloudfront.net/standard_def_b.svg")}),$("#download").find(".download-right img").on("mouseenter",function(){$(this).attr("src","//d17vwh530ty7de.cloudfront.net/high_def_back.svg")}),$("#download").find(".download-right img").on("mouseleave",function(){$(this).attr("src","//d17vwh530ty7de.cloudfront.net/high_def_b.svg")}),$("nav").on("click","a.scroll",function(t){t.preventDefault(),d($(this))}),$("#nav-bottom").on("click","a.scroll",function(t){t.preventDefault(),d($(this)),$("#pointer").fadeOut()}),$(document).keydown(function(t){t.stopPropagation(),40===t.keyCode?D():38===t.keyCode&&b()}),$("#pointer").on("click",function(t){t.preventDefault();var e=$(window).height();$("#wrapper").animate({scrollTop:e},700,function(){$("#pointer").fadeOut()})})}var e=$("nav a"),n=$("#nav-bottom a"),i=$(window).height(),o=$(window).width(),a=0,r=$("#wrapper").find("#exit"),d=$(window).scrollTop()+4.5*i,l=500,c,h=$("#download").find(".download-left a"),s=$("#download").find(".download-right a"),p,f,w,u,g=0,m=0,v=0,y=navigator.userAgent.match(/(Android|iPad|iPhone|iPod)/g)?!0:!1,T="https://d1cwrlyxfuylre.cloudfront.net/HD+What+Difference+Does+It+Make%3F+A+Film+About+Making+Music.mp4",k="https://d1cwrlyxfuylre.cloudfront.net/SD-what-difference-does-it-make.mp4",D="https://d1cwrlyxfuylre.cloudfront.net/HD+JP+What+Difference+Does+It+Make%3F.mp4",b="https://d1cwrlyxfuylre.cloudfront.net/SD+JP+What+Difference+Does+It+Make%3F.mp4",I=$("#artist").find(".artist-list ul"),M=artist.length,_,C,A,B,F,P,x,R,O,E=$(".artist-images img"),J=$("#artist-info"),S=$("#artist-info").find(".links ul"),W=$("#insert-name").text(),H=$("#insert-name");t()});