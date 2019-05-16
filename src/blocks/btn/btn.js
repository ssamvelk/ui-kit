[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
    el.addEventListener('click',e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
})



/*
var ripink = function(){}
ripink.apply = function(ELEMENTS, COLOR) {
    var STYLE = ELEMENTS + " {overflow:hidden;position:relative} "+ELEMENTS+" .js-ripink-ink{display:block;position:absolute;background:" + COLOR + ";border-radius:100%;transform:scale(0)} "+ELEMENTS+" .js-ripink-ink.js-ripink-animate {animation: js-ripink-ripple 0.65s linear;} @keyframes js-ripink-ripple {100% {opacity: 0.25; transform: scale(2.5);}";
    head = document.head || document.getElementsByTagName('head')[0];
    style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = STYLE;
    } else {
      style.appendChild(document.createTextNode(STYLE));
    }
    head.appendChild(style);


    var parent, ink, d, x, y;
    dfe(ELEMENTS, function(el) {
        el.addEventListener("mousedown", function(e) {
            parent = el.parentNode;
            el.insertBefore(mhe("<span class='js-ripink-ink'></span>"), el.firstChild);
            ink = el.querySelector(".js-ripink-ink");
            ink.setAttribute("data-js-ripink-active", "start");
            ink.classList.remove("js-ripink-animate");

            d = String(Math.max(el.offsetWidth, el.offsetHeight)) + "px";
            ink.style.width = d;
            ink.style.height = d;

            x = e.pageX - el.offsetLeft - ink.offsetWidth/2;
        	y = e.pageY - el.offsetTop - ink.offsetHeight/2;

            x = String(x) + "px"; y = String(y) + "px";

            ink.style.top = y; ink.style.left = x;
            ink.classList.add("js-ripink-animate")
            window.setTimeout(function() {
                if(ink.getAttribute("data-js-ripink-active") == "stop")
                {
                    return;
                }
                ink.setAttribute("data-js-ripink-active", "stop");
                ink.style.transform = "scale(2.5)";
                ink.style.opacity = "0.25";
            },650);
        });
        el.addEventListener("mouseup", function(e) {
            ink = el.querySelector(".js-ripink-ink");
            if(ink.getAttribute("data-js-ripink-active") != "stop")
            {
                ink.setAttribute("data-js-ripink-active", "stop");
                return;
            }
            ink.parentNode.removeChild(ink);
        })
    });
}

function dfe(select, func)
{
    els = document.querySelectorAll(select);
    for(var i=0; i<els.length; i++)
    {
        el = els[i];
        func(el);
    }
}

function mhe(html)
{
    var t = document.createElement('template');
    t.innerHTML = html;
    el = t.content.cloneNode(true);
    return el;
}



*/