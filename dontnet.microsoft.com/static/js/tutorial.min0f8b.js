function loadStep(n){$(".nav-page .step-select").closest("li").removeClass("active");$(".nav-page .step-select.step-select-"+n).closest("li").addClass("active");$(".step").hide();$(".step.step-"+n).show();recordStepLoaded(n)}function recordStepLoaded(n,t){var i=$(".toc ul.nav .step-select").filter(function(){return $(this).data("step")===n}),r=$(".toc ul.nav").children().index(i.closest("li"))+1,u=t!=null?t:"tutorial",f={behavior:"Loaded",actionType:"CL",contentTags:{scn:u,scnstp:n,stpnum:r}};captureAction(f)}function pauseVideos(){var n=$("iframe");n.length>0&&n.each(function(n,t){t.src.indexOf("youtube")>=0?pauseYouTubeVideo(t):t.src.indexOf("channel9")>=0&&pauseChannel9Video(t)})}function pauseYouTubeVideo(n){n.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:""}),"*")}function pauseChannel9Video(n){n.contentWindow.postMessage({method:"pause"},"*")}$(function(){$(".step-select").click(function(){pauseVideos();var n=$(this).data("step");return loadStep(n),history.pushState({step:n},"","./"+n),window.scrollTo(0,0),!1});$(window).on("popstate",function(){history.state&&history.state.step&&loadStep(history.state.step)})});