$(function() {
    //add some effect to hero section 
    animePage();
    //>>>>>>>> -nav bar events <<<<<<<<<<
    $(".controle-bars").on("click", function() {
        navBarEvent($(this));
    })
    //add the scroll effect 
    //about
    scrollToElt($("#about-btn"), $("#about"));
    scrollToElt($("li.about-link"), $("#about"));
    //contact
    scrollToElt($("li.contact-link"), $("footer"));
});


//create the function show menu in small device 
function navBarEvent(t) {
    const elt1 = t.find("div:first-child");
    const elt2 = t.find("div:last-child");
    var dataCtr = t.attr("data-ctr");
    const timeline1= gsap.timeline();
    console.log(dataCtr);
    if(dataCtr=="true") {
        t.attr('data-ctr',"false");
        timeline1.to(elt2, {width:"100%"})
        .to(elt1, {rotate:"50deg", top:"50%"})
        .to(elt2, {rotate:"-50deg", top:"50%"},"<0")
        .to($("#menu"),{height:"100%"}, "<0");

    } else {
        console.log(dataCtr);
        timeline1.to(elt2, {rotate:"0deg", top:"60%"})
        .to(elt1, {rotate:"0deg", top:"40%"}, "<0")
        .to(elt2, {width:"50%"})
        .to($("#menu"),{height:"0"}, "<0");
        t.attr('data-ctr',true);
    }
}
//create function  add some animation when the page onload
function animePage() {
    const timelinePage = gsap.timeline();
    timelinePage.from(".image-side img", {x:-300, opacity:0, ease:"ease-out"})
    .from(".image-side .square-box", {y:-100, opacity:0}, "<0.2")
    .from(".intro-hero h1", {rotate:"20deg", opacity:0})
    .from(".intro-hero ul li", {scale:1.2, opacity:0, stagger:"0.33s"});
}
//function scroll to elements 
function scrollToElt(clickElt, eltWhenGo) {
    clickElt.on("click", function() {
        gsap.timeline().to("html, body", {scrollTop:eltWhenGo.offset().top + 100})
        .from(".about-img img", {opacity:0, y:200});
        navBarEvent($(".controle-bars"));
    });
}