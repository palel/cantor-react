(this["webpackJsonpkantor-react"]=this["webpackJsonpkantor-react"]||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,s,u,l,d,b,j,x,h,p,f,g,m=t(1),O=t.n(m),y=t(9),k=t.n(y),v=t(3),w=t(2),z=t.p+"static/media/background.642afe32.png",F=Object(w.b)(r||(r=Object(v.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Lato', sans-serif;\n        line-height: 1.5;\n        background-color: ",';\n        background-image: url("','");\n        background-position: top;\n    }\n'])),(function(e){return e.theme.color.darksLateGray}),z),L=t(4),C=w.c.div(c||(c=Object(v.a)(["\n    max-width: 600px;\n    margin: 50px auto;\n    padding: 30px 0;\n"]))),S=w.c.header(o||(o=Object(v.a)(["\n    padding: 0 30px;\n    margin: 0 auto;\n    max-width: 600px;\n    text-align: center;\n    color: ",";\n    background-color: ",";\n    border-radius: 10px;\n"])),(function(e){return e.theme.color.babyBlue}),(function(e){return e.theme.color.darksLateGray})),G=t(0),D=function(e){var n=e.title;return Object(G.jsx)(S,{children:Object(G.jsx)("h1",{children:n})})},P=w.c.form(a||(a=Object(v.a)(["\n    width: 100%;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: ",";\n    border-radius: 15px; \n    border-style:  solid;\n    border-color: ",";\n"])),(function(e){return e.theme.color.babyBlue}),(function(e){return e.theme.color.darksLateGray})),B=w.c.fieldset(i||(i=Object(v.a)(["\n    margin: 0px 20px 20px 20px;\n    border-radius: 10px;\n    background-color: ",";\n"])),(function(e){return e.theme.color.frenchPass})),R=w.c.legend(s||(s=Object(v.a)(["\n    text-align: left;\n    padding: 10px;\n    background-color: ",";\n    border-radius: 5px;\n    color: ",";\n"])),(function(e){return e.theme.color.darksLateGray}),(function(e){return e.theme.color.white})),T=w.c.label(u||(u=Object(v.a)(["\n    display: grid;\n    grid-gap: 10px;\n    margin: 0 10px;\n    grid-template-columns: 1fr 2fr;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n        grid-gap: 0;\n    }\n"]))),A=w.c.span(l||(l=Object(v.a)(["\n    align-self: center;\n    height: 30px;\n    margin: 5px 10px;\n    font-size: 17px;\n    font-weight: bold;\n"]))),E=w.c.input(d||(d=Object(v.a)(["\n    align-self: center;\n    text-align: center;\n    height: 30px;\n    margin: 0px 10px;\n    border-radius: 5px;\n    color: ",";\n    background-color: ",";\n\n    &::placeholder{\n        color:",";\n    }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.darksLateGray}),(function(e){return e.theme.color.white})),I=w.c.div(b||(b=Object(v.a)(["\n    background-color: ",";\n    border: 2px inset  ",";\n    border-radius: 10px;margin: 30px;\n    padding: 30px;\n    text-align: center;\n    font-size: 17px;\n"])),(function(e){return e.theme.color.frenchPass}),(function(e){return e.theme.color.darksLateGray})),M=w.c.div(j||(j=Object(v.a)(["\n    text-align: right;\n    font-size: 13px;\n    font-family: 'Roboto Mono', monospace;\n    color: ",";\n    padding: 0 20px 10px 0;\n"])),(function(e){return e.theme.color.darksLateGray})),N=function(e){return e.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})},U=function(){var e=function(){var e=Object(m.useState)(new Date),n=Object(L.a)(e,2),t=n[0],r=n[1];return Object(m.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return Object(G.jsxs)(M,{children:["Dzisiaj jest "," "," ",N(e)]})},W=w.c.select(x||(x=Object(v.a)(["\n    align-self: center;\n    padding-left: 10px;\n    margin: 0 10px;\n    height: 30px;\n    border-radius: 5px;\n    text-align: center;\n    color: ",";\n    background-color: ",";\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.darksLateGray})),J=w.c.option(h||(h=Object(v.a)(["\n    background-color: ",";\n"])),(function(e){return e.theme.color.darksLateGray})),K=function(e){var n=e.currency,t=e.setCurrency,r=e.rates;return Object(G.jsx)(W,{value:n,onChange:function(e){var n=e.target;return t(n.value)},children:Object.keys(r).map((function(e){return Object(G.jsx)(J,{value:e,children:e},e)}))})},q=w.c.div(p||(p=Object(v.a)(["\n    padding: 5px;\n    display: block;\n    text-align: center;\n"]))),Z=w.c.input(f||(f=Object(v.a)(["\n    padding: 5px 10px;\n    margin: 3px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(e){return e.theme.color.darksLateGray}),(function(e){return e.theme.color.white})),H=function(){return Object(G.jsxs)(q,{children:[Object(G.jsx)(Z,{type:"submit",value:"Sprzedaj!"}),Object(G.jsx)(Z,{type:"reset",value:"Zresetuj formularz"})]})},Q=w.c.p(g||(g=Object(v.a)(["\n    text-align: right;\n    font-size: 13px;\n    font-family: 'Roboto Mono', monospace;\n    color: ",";\n    padding-right: 20px;\n    margin: 10px 0 0 0;\n"])),(function(e){return e.theme.color.darksLateGray})),V=function(e){var n=e.date;return Object(G.jsxs)(Q,{children:["Kursy walut pochodz\u0105 z dnia ",n,"."]})},X=function(e){var n=e.onFormSubmit,t=e.onFormReset,r=e.sellCurrency,c=e.setSellCurrency,o=e.buyCurrency,a=e.setBuyCurrency,i=e.transactionAmount,s=e.setTransactionAmount,u=e.transactionResult,l=e.rates,d=e.state,b=e.date;return Object(G.jsxs)(P,{onSubmit:n,onReset:t,children:[Object(G.jsx)(U,{}),"loading"===d?Object(G.jsxs)(I,{children:["Trwa \u0142adowanie niezb\u0119dnych informacji.",Object(G.jsx)("br",{})," Prosz\u0119, zaczekaj chwil\u0119..."]}):"error"===d?Object(G.jsxs)(I,{children:["Ups... co\u015b posz\u0142o nie tak.",Object(G.jsx)("br",{}),"Sprawd\u017a po\u0142\u0105czenie z internetem, lub spr\xf3buj ponownie p\xf3\u017aniej."]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(B,{children:[Object(G.jsx)(R,{children:"Co sprzedajesz:"}),Object(G.jsxs)(T,{children:[Object(G.jsx)(A,{children:"Wybierz walut\u0119:"}),Object(G.jsx)(K,{currency:r,setCurrency:c,rates:l})]}),Object(G.jsxs)(T,{children:[Object(G.jsx)(A,{children:"Kwota:"}),Object(G.jsx)(E,{value:i,onChange:function(e){var n=e.target;return s(n.value)},type:"number",min:"0",step:"0.1",required:!0,placeholder:"Wpisz kwot\u0119..."})]})]}),Object(G.jsxs)(B,{children:[Object(G.jsx)(R,{children:"Co kupujesz:"}),Object(G.jsxs)(T,{children:[Object(G.jsx)(A,{children:"Wybierz walut\u0119:"}),Object(G.jsx)(K,{currency:o,setCurrency:a,rates:l})]}),Object(G.jsxs)(T,{children:[Object(G.jsx)(A,{children:"Do wyp\u0142aty:"}),Object(G.jsx)(E,{value:u,disabled:!0})]})]}),Object(G.jsx)(H,{}),Object(G.jsx)(V,{date:b})]})]})};var Y=function(){var e=function(){var e=Object(m.useState)({state:"loading"}),n=Object(L.a)(e,2),t=n[0],r=n[1];return Object(m.useEffect)((function(){setTimeout((function(){fetch("https://api.exchangerate.host/latest?base=PLN").then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){e.base;var n=e.date,t=e.rates;return r({state:"success",date:n,rates:t})})).catch((function(e){r({state:"error"}),console.error("Sorry, something goes happened... Please try later.",e)}))}),1e3)}),[]),t}(),n=Object(m.useState)(""),t=Object(L.a)(n,2),r=t[0],c=t[1],o=Object(m.useState)("EUR"),a=Object(L.a)(o,2),i=a[0],s=a[1],u=Object(m.useState)("PLN"),l=Object(L.a)(u,2),d=l[0],b=l[1],j=Object(m.useState)("Brak"),x=Object(L.a)(j,2),h=x[0],p=x[1],f=function(n){return e.rates[n]},g=function(e,n,t){return(e*function(e,n){var t=f(e),r=f(n);return console.log(r+" "+t),r/t}(n,t)).toFixed(2)};return Object(G.jsxs)(C,{children:[Object(G.jsx)(D,{title:"Internetowy kantor walut"}),Object(G.jsx)(X,{onFormSubmit:function(e){e.preventDefault();var n=g(r,i,d),t="".concat(n,"  ").concat(d);p(t)},onFormReset:function(e){e.preventDefault(),c(""),p("Brak"),s("EUR"),b("PLN")},sellCurrency:i,setSellCurrency:s,buyCurrency:d,setBuyCurrency:b,transactionAmount:r,setTransactionAmount:c,transactionResult:h,rates:e.rates,state:e.state,date:e.date})]})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};k.a.render(Object(G.jsx)(O.a.StrictMode,{children:Object(G.jsxs)(w.a,{theme:{color:{white:"#fff",darksLateGray:"#2F4F4F",frenchPass:"#AAFDFD",babyBlue:"#DDFFFF"},breakPoint:{mobileMax:767}},children:[Object(G.jsx)(F,{}),Object(G.jsx)(Y,{})]})}),document.getElementById("root")),$()}},[[20,1,2]]]);
//# sourceMappingURL=main.bac5c8bc.chunk.js.map