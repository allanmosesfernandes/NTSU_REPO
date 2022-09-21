//Changes top level nav items into anchor tags
$("#top-nav-level-one-about-us").wrap("<a href='/about-ntsu'></a>");
$("#top-nav-level-one-student-voice").wrap("<a href='/student-voice-ntsu'></a>");
$("#top-nav-level-one-eat-drink-shop").wrap("<a href='/eatdrinkshop'></a>");
$("#top-nav-level-one-whats-on").wrap("<a href='/whatson'></a>");
$("#top-nav-level-one-opportunities").wrap("<a href='/ntsu-opportunities'></a>");
$("#top-nav-level-one-sport").wrap("<a href='/sports'></a>");
$("#top-nav-level-one-support-advice").wrap("<a href='/supportadvice'></a>");

window.setInterval(function () {
    $(".event-container:contains(Team Interviews)").remove();
    $('img[src$="https://d2wcds7obmglv2.cloudfront.net/assets/default/events_icons.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="https://www.unioncloud.org/assets/default/groupsicon-44c2eba7ac339d277552653549ccf19a4b786edd040aab572c2e59a832c02113.png"]').attr(
        "src",
        "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png"
    );
    $('img[src$="https://d2wcds7obmglv2.cloudfront.net/assets/default/groupsicon.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="https://d2wcds7obmglv2.cloudfront.net/assets/default/new-articles-320x220.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="/assets/default/events_icons.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="https://d2wcds7obmglv2.cloudfront.net/assets/default/new-articles-400x400.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="https://d2wcds7obmglv2.cloudfront.net/assets/default/events_icons.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $('img[src$="https://www.unioncloud.org/assets/default/events_icons-bfb3c7b88f40cb3c0ef6155e33b4801a0d9dceecd84f8fec7043b65352458073.png"]').attr(
        "src",
        "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png"
    );
    $('img[src$="https://www.unioncloud.org/assets/default/new-articles-400x400-744c95e18bedff77352af5d88bab9352615c32cdcf86f08e006bacb7e2e37e68.png"]').attr(
        "src",
        "https://nusdigital.s3.amazonaws.com/article/images/30478/medium/NTSU_Building.jpg"
    );
    $('img[src$="/public/images/missing_twobytwo.png"]').attr("src", "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/156356/original/NTSU_web_avatar.png");
    $(".uc-doc-bg-ext-wrapper").text("");
    $("td input").attr("placeholder", "Search");
    $("td input").attr("style", "width:100%");
}, 200);
// LOAD ON SCROLL
// Used to load events and groups on scroll, as they are loaded in batches of 8 and normally require button input to load the next batch. 
function EnableAutoLoadMore(buttonElement, contentElement) {
    $(window).bind('scroll', function() {
        if (typeof $(buttonElement).first().attr('data-loadmore') === typeof undefined || $(buttonElement).first().attr('data-loadmore') == false) {
             $(buttonElement).first().attr('data-loadmore', 0);
        }
        if ($(buttonElement + ':visible').length > 0) {
        	if (($(window).height() + $(document).scrollTop()) > ($(buttonElement).first().offset().top - 80) && $(contentElement).first().children().length > $(buttonElement).first().attr('data-loadmore')) {
                $(buttonElement).first().attr('data-loadmore', $(contentElement).first().children().length);
                $(buttonElement).click();
            }
        }
    });
}
$(function() {
    if (window.location.pathname.substring(0, 7) == '/events' && window.location.pathname.length <= 8) {
        EnableAutoLoadMore('#load-more-events', '#uc-event-right-panel-listing');
    } else if (window.location.pathname.substring(0, 7) == '/groups') {
        EnableAutoLoadMore('#uc-more-group-search', '.category-box-wrapper');
        $('.club-navigation ul li').click(function() {
            $('#uc-more-group-search').first().attr('data-loadmore', 0);
        });
        $('.group-types-wrapper ul li').click(function() {
            $('#uc-more-group-search').first().attr('data-loadmore', 0);
        });
    } else if (window.location.pathname.substring(0, 9) == '/articles' && window.location.pathname.length <= 10) {
        EnableAutoLoadMore('#load_more_article', '.uc-articles-listing');
    } else if (window.location.pathname.substring(0, 16) == '/thestudentvoice' && window.location.pathname.length <= 17) {
        EnableAutoLoadMore('#load_more_sv', '.uc-sv-left-panel-wrapper');
        $('#uc-sv-navigation li a').click(function() {
            $('#load_more_sv').first().attr('data-loadmore', 0);
        });
    }
});

$('html, body').bind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart', function(){
    $('html, body').stop();
});
  
/* --- Accordion code --- */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  
/* --- Move the ad banner under the content ---  */
document.addEventListener("DOMContentLoaded", function () {
  const leaderboard = document.querySelector(".uc-leaderboard-advertisement"); 
  const content = document.querySelector(".row.bottom"); 

  content.parentNode.insertBefore(leaderboard, content); 
  leaderboard.classList.add("is-visible");
});
document.addEventListener("DOMContentLoaded", function () {
  const leaderboard = document.querySelector(".uc-leaderboard-advertisement"); 
  const content = document.querySelector(".row.bottom-union");

  content.parentNode.insertBefore(leaderboard, content); 
  leaderboard.classList.add("is-visible");
});
  /* --- Change the search text ---  */
document.getElementById("site_search_id").placeholder = "I'm looking for...";

document.getElementById("search_keyword").placeholder = "Search...";

const let a == b;