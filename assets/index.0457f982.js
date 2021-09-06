import{p as e,a as t,o as a,c as n,r as s,d as i,b as r,w as l,e as o,t as u,F as c,f as d,g as p,h as m,i as g,j as h,n as f,k as v,l as b,m as y}from"./vendor.2b259ecb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={};e("data-v-297c85b8");const k={class:"badge font-bold leading-4 text-center whitespace-nowrap align-middle rounded-xl text-white py-1 px-2 text-sm relative inline-block"};t(),w.render=function(e,t){return a(),n("span",k,[s(e.$slots,"default",{},void 0,!0)])},w.__scopeId="data-v-297c85b8";const S={};e("data-v-0e5f4f0c");const T={class:"text-xl font-bold uppercase mb-3 mt-3"};t(),S.render=function(e,t){return a(),n("h2",T,[s(e.$slots,"default",{},void 0,!0)])},S.__scopeId="data-v-0e5f4f0c";const D={};e("data-v-55054346");const x={class:"skill-section-title p-1 whitespace-nowrap overflow-hidden text-lg font-semibold"};t(),D.render=function(e,t){return a(),n("div",x,[s(e.$slots,"default",{},void 0,!0)])},D.__scopeId="data-v-55054346";const C=g("i",{class:"fa fa-heart"},null,-1),E={class:"interests"},q={key:0,class:"ml-6 col-sm-12"};var N=i({props:{interests:{type:Array,required:!0},title:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[C,o(" "+u(e.title),1)])),_:1}),(a(!0),n(c,null,d(e.interests,(e=>(a(),n("div",E,[r(D,null,{default:l((()=>[o(u(e.name),1)])),_:2},1024),e.keywords.length>0?(a(),n("div",q,[(a(!0),n(c,null,d(e.keywords,(e=>(a(),p(w,{class:"interest mb-2 mr-2"},{default:l((()=>[o(u(e),1)])),_:2},1024)))),256))])):m("",!0)])))),256))],64))});const A={};e("data-v-211e0118");const I={class:"list-group-item relative bg-white px-4 py-3 border border-gray-300"};t(),A.render=function(e,t){return a(),n("li",I,[s(e.$slots,"default",{},void 0,!0)])},A.__scopeId="data-v-211e0118";const L=g("i",{class:"fa fa-language"},null,-1);var _=i({props:{languages:{type:Array,required:!0},title:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[L,o(" "+u(e.title),1)])),_:1}),g("ul",null,[(a(!0),n(c,null,d(e.languages,(e=>(a(),p(A,{class:"flex justify-between items-center"},{default:l((()=>[o(u(e.language),1),r(w,{class:"ml-auto"},{default:l((()=>[o(u(e.fluency),1)])),_:2},1024)])),_:2},1024)))),256))])],64))});const G=g("i",{class:"fa fa-tasks"},null,-1),J={class:"ml-6 skills break-words"};var P=i({props:{skills:{type:Array,required:!0},title:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[G,o(" "+u(e.title),1)])),_:1}),(a(!0),n(c,null,d(e.skills,(e=>(a(),n("div",null,[r(D,null,{default:l((()=>[o(u(e.name),1)])),_:2},1024),g("div",J,[(a(!0),n(c,null,d(e.keywords,(e=>(a(),p(w,{class:"mb-2 mr-2"},{default:l((()=>[o(u(e),1)])),_:2},1024)))),256))])])))),256))],64))});e("data-v-5e997f1a");const R=g("i",{class:"fa fa-university"},null,-1),M={id:"education",class:"relative px-0 py-4"},O={class:"flex items-start relative"},j={class:"year bg-white p-1 font-bold text-center w-1/6"},F=g("br",null,null,-1),B={class:"description ml-3 w-5/6 mb-2 p-2 relative"},U={class:"text-lg font-bold"},W={class:"mt-1"},K=g("i",{class:"fa fa-graduation-cap"},null,-1),Z={class:"mt-1"};t();var H=i({props:{education:{type:Array,required:!0},title:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[R,o(" "+u(e.title),1)])),_:1}),g("ul",M,[(a(!0),n(c,null,d(e.education,(e=>(a(),n("li",O,[g("div",j,[o(u(e.startDate.split("-")[0]),1),F,o(u(e.endDate.split("-")[0]),1)]),g("div",B,[g("h3",U,u(e.institution),1),g("p",W,[K,o(" "+u(e.studyType),1)]),g("p",Z,u(e.area),1)])])))),256))])],64))});H.__scopeId="data-v-5e997f1a",e("data-v-27c30ac4");const V=g("i",{class:"fa fa-bullseye"},null,-1),Q=o(" Contact"),$={class:"contact-item flex"},z=g("div",{class:"icon"},[g("span",{class:"fa fa-phone fa-fw"})],-1),X={class:"title flex items-center ml-3"},Y={class:"contact-item flex"},ee=g("div",{class:"icon"},[g("span",{class:"fa fa-envelope fa-fw"})],-1),te={class:"title flex items-center ml-3"},ae=["href"],ne=h('<div class="contact-item flex" data-v-27c30ac4><div class="icon" data-v-27c30ac4><span class="fa fa-fw fa-globe-europe" data-v-27c30ac4></span></div><div class="title flex items-center ml-3" data-v-27c30ac4><a href="https://magicoftravels.com" target="_blank" data-v-27c30ac4>MagicOfTravels</a></div></div>',1),se={class:"contact-item flex"},ie={class:"icon"},re={class:"title flex items-center ml-3"},le=["href"];t();var oe=i({props:{networks:{type:Array,required:!0},email:{type:String,required:!0},phone:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[V,Q])),_:1}),g("div",$,[z,g("div",X,u(e.phone),1)]),g("div",Y,[ee,g("div",te,[g("a",{href:"mailto:"+e.email,target:"_blank"},u(e.email),9,ae)])]),ne,(a(!0),n(c,null,d(e.networks,(e=>(a(),n("div",se,[g("div",ie,[g("span",{class:f("fa fa-fw fa-"+e.name)},null,2)]),g("div",re,[g("a",{href:e.url,target:"_blank"},u(e.username),9,le)])])))),256))],64))});oe.__scopeId="data-v-27c30ac4",e("data-v-0b0cb0a4");const ue=g("i",{class:"fa fa-suitcase ico"},null,-1),ce={class:"job mb-3"},de={class:"details mx-2 mb-2 p-3"},pe={class:"where text-xl font-bold"},me={class:"year capitalize opacity-70"},ge={class:"job-details ml-6 pr-2"},he={class:"profession text-xl font-bold"},fe={class:"description"},ve=g("div",{class:"highlights py-1 font-bold"},"Highlights",-1),be={class:"list-group"};t();var ye=i({props:{workExperiences:{type:Array,required:!0},title:{type:String,required:!0},lang:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[ue,o(" "+u(e.title),1)])),_:1}),(a(!0),n(c,null,d(e.workExperiences,(t=>(a(),n("div",ce,[g("div",null,[g("div",de,[g("div",pe,u(t.company),1),g("div",me,u(new Intl.DateTimeFormat("en"===e.lang?"en-GB":"fr-FR",{month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(t.startDate)))+" - "+u(t.endDate?new Intl.DateTimeFormat("en"===e.lang?"en-GB":"fr-FR",{month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(t.endDate)):"Present"),1)])]),g("div",null,[g("div",ge,[g("div",he,u(t.position),1),g("div",fe,[ve,g("ul",be,[(a(!0),n(c,null,d(t.highlights,(e=>(a(),p(A,{innerHTML:e},null,8,["innerHTML"])))),256))])])])])])))),256))],64))});ye.__scopeId="data-v-0b0cb0a4";const we=g("i",{class:"fa fa-user"},null,-1);var ke=i({props:{summary:{type:String,required:!0},title:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n(c,null,[r(S,null,{default:l((()=>[we,o(" "+u(e.title),1)])),_:1}),g("p",null,u(e.summary),1)],64))});e("data-v-3eac4c2e");const Se={id:"photo-header",class:"text-center"},Te=g("div",{class:"photo-container"},[g("div",{id:"photo",class:"w-40 h-40 p-1 inline-block rounded-full transform -translate-y-1/2"},[g("img",{src:"/assets/me.b32f2e3b.jpg",alt:"avatar",class:"rounded-full"})])],-1),De={id:"text-header"},xe={class:"text-4xl font-bold uppercase tracking-tight font-extrabold"},Ce=g("br",null,null,-1),Ee={class:"text-2xl opacity-70"};t();var qe=i({props:{name:{type:String,required:!0},label:{type:String,required:!0}},setup:e=>(t,s)=>(a(),n("div",Se,[Te,g("div",De,[g("h1",xe,[o(u(e.name),1),Ce,g("span",Ee,u(e.label),1)])])]))});qe.__scopeId="data-v-3eac4c2e";const Ne={},Ae={class:"box pb-2 mb-4"};Ne.render=function(e,t){return a(),n("div",Ae,[s(e.$slots,"default")])};var Ie={basics:{name:"Laurent Maillet",label:"Senior Tech Lead & Trainer",picture:"me.png",email:"nebounet@gmail.com",phone:"(+65) 81549622",summary:"I have been involved in many missions using both legacy and new technologies. I use those experiences to match business needs with technical requirements while following best practices in software development. I like being involved in every part of the development of an application including developing features/tools, setting up processes and best practices (TDD, Code reviews, Pair programming), reducing time to market (CI/CD, Devops principles), etc. As a trainer I'm always keen to share about my knowledge and experiences. As a developer I'm eager to learn new things everyday that's why you can meet me in meetups or conferences often as attendee and sometimes as speaker.",networks:[{name:"twitter",username:"Nebounet",url:"https://twitter.com/Nebounet"},{name:"github",username:"Nebulis",url:"https://github.com/Nebulis"},{name:"linkedin",username:"Laurent Maillet",url:"https://www.linkedin.com/in/laurent-maillet-81232aaa/"}]},work:[{company:"Govtech - Singapore",position:"Senior Team Lead",startDate:"2018-12-01",highlights:["Responsible for full stack development, tech strategy & decision making, mentorship, setting standards for CI/CD and code quality practices, hiring, interacting with the community, etc. in the Distributed Ledger Technology Team",'We created <a href="https://openattestation.com/">OpenAttestation</a> an open-source framework for verifiable documents and transferable records.<br/>- A verifiable document (or verifiable credential) is a tamper-evident document that cryptographically proves who issued it.<br/>- Transferable Records are documents that extend on Verifiable Documents which allows for the document ownership to be part of the immutable ledger.','Using OpenAttestation our team created:<br/>- <a href="https://opencerts.io/">OpenCerts</a> (PST award): Educational credentials.<br/>- <a href="https://www.healthcerts.gov.sg/">HealthCerts</a>: Provide travelers with easily verifiable digital certificates<br/>- <a href="https://verify.gov.sg/">Verify</a>: Platform to verify credentials issued by the Singaporean government<br/>- <a href="https://www.tradetrust.io/">TradeTrust</a> (PST award): Platform for digital trade documents.<br/> - <a href="https://www.notarise.gov.sg/">Notarise</a>: Portal to issue health certificates',"Tech stack: Ethereum, Solidity, Javascript, Typescript, React, and AWS"]},{company:"Zenika - Singapore",position:"Software Engineer, Consultant & Trainer",startDate:"2017-01-01",endDate:"2018-12-01",highlights:["BNP Paribas is a French Bank. Our team built the new authentication module in order to support new projects for BNP Paribas Wealth Management. The project involved the implementation of a new technical stack and setting up new practices within the whole organization using Spring Boot, Java 8, Git and TDD",'Built the new job portal <a href="https://www.mycareersfuture.gov.sg/">MyCareersFuture</a> to connect jobseekers and companies for Govtech, the "operating system" of Singapore government. Technologies used: React, Node.JS, Typescript, Kotlin, GraphQL',"Conducted trainings on TDD and Angular",'Speaker at <a href="https://www.meetup.com/fr-FR/singajug/events/245218392/">SingaJUG</a> and <a href="https://www.youtube.com/watch?v=x7j6KeQgZ6k">Voxxed Days Singapore</a>']},{company:"Zenika - Nantes, France",position:"Software Engineer, Consultant & Trainer",startDate:"2015-03-01",endDate:"2017-01-01",highlights:['Built architecture and frontend application of eco-design tool provided by <a href="https://greenspector.com/">Greenspector</a> for developers. Technologies used: Angular 1, NodeJS, Go, Android, Redis, Java 7, Ansible.',"<b>Sparklane</b> is a French startup crawling information and making them easily available for salesman and marketman. Technologies used: Angular 1, ElasticSearch, Docker, Groovy, Java 8.","<b>GE Money Bank</b> is the bank services unit of General Electric. Our team built a web application for salesman to reduce the time to validate or reject loans. We worked with salesman directly to understand their business and the way they worked to understand how our application should be built to improve their productivity.Technologies used: React, Docker, Java 7.","<b>CACEIS</b> is an asset servicing bank specialising in post-trade functions. Our team developed a mobile application, Olis Mobile, who won an innovation award delivered by Global Custodian. Technologies used: Angular, Ionic 2","Conducted <b>trainings</b> on Javascript, Typescript, Angular (1&2), React and NodeJS",'Speaker at <a href="http://nantesjs.org/">NantesJS meetup</a> and <a href="https://web2day.co/2016/evenements/bien-preparer-migration-vers-angular-2/">Web2day</a>']},{company:"Sopra - Nantes, France",position:"IT Software Engineer",startDate:"2011-03-01",endDate:"2015-03-01",highlights:["Lead developer on application for the DGDDI (Department of Customs) called <b>NSTI</b> based on legacy technologies (COBOL, GCOS7, C, ASP.NET) and J2EE technologies. The application had to strictly follow rules provided by the European Commission","Lead developer on internal applications deployed in the whole company and used by managers. Technologies used: PHP and J2EE","Developer in the modernization pole on legacy application, using Bluage."]}],education:[{institution:"University of Avignon",area:"Computer Science and Mathematics",studyType:"Bachelor",startDate:"2005-09-01",endDate:"2007-06-01"},{institution:"University of Languedoc (Montpellier II)",area:"Computer Science",studyType:"Bachelor & Master",startDate:"2007-09-01",endDate:"2010-06-01"},{institution:"University of Nantes",area:"Computer Science",studyType:"Master",startDate:"2010-09-01",endDate:"2011-06-01"}],skills:[{name:"Web Development",keywords:["Javascript","React","Typescript","Angular","NodeJS"]},{name:"Development",keywords:["Java","Kotlin","Spring","Go"]},{name:"Other",keywords:["Docker","Git","GraphQL"]}],languages:[{language:"French",fluency:"Native speaker"},{language:"English",fluency:"Full professional proficiency"}],interests:[{name:"Sports",keywords:["Football","Cycling","Tennis"]},{name:"Mangas",keywords:[]},{name:"Travels",keywords:["Treks","Tourism"]}]};var Le={basics:{name:"Laurent Maillet",label:"Senior Tech Lead & Trainer",picture:"me.png",email:"nebounet@gmail.com",phone:"(+65) 81549622",summary:"J'ai été impliqué dans de nombreuses missions utilisant à la fois des nouvelles technologies et des plus anciennes. J'utilise ces expériences pour faire correspondre les besoins des entreprises aux exigences techniques, tout en suivant les meilleures pratiques en matière de développement de logiciels. J'aime être impliqué dans chaque partie du développement d'une application, y compris le développement de fonctionnalités/outils, la mise en place de processus et de bonnes pratiques (TDD, revues de code, programmation par pairs), la réduction du temps de mise sur le marché (CI/CD, principes Devops), etc. En tant que formateur, j'aime partager mes connaissances et mes expériences. En tant que développeur, je suis impatient d'apprendre de nouvelles choses tous les jours, c'est pourquoi vous pouvez me rencontrer lors de meetups ou de conférences, souvent en tant que participant et parfois en tant que speaker.",networks:[{name:"twitter",username:"Nebounet",url:"https://twitter.com/Nebounet"},{name:"github",username:"Nebulis",url:"https://github.com/Nebulis"},{name:"linkedin",username:"Laurent Maillet",url:"https://www.linkedin.com/in/laurent-maillet-81232aaa/"}]},work:[{company:"Govtech - Singapore",position:"Senior Team Lead",startDate:"2018-12-01",highlights:["Responsable du développement, des choix techniques et stratégiques, de l'établissement de normes de qualité (CI/CD, code, revues, etc.), du recrutement, du partage avec la communauté, etc. au sein de l'équipe DLT (Distributed Ledger Technology)","Nous avons créé <a href=\"https://openattestation.com/\">OpenAttestation</a> un framework open source pour créer des certificats vérifiables (verifiable document) et des enregistrements transférables (Transferable Records), permettant de prouver cryptographiquement l'origine de l'émetteur et le transfert entre plusieurs parties.",'En utilisant OpenAttestation, notre équipe a créé :<br/>- <a href="https://opencerts.io/">OpenCerts</a> (PST award): Certificats numériques pour les étudiants (diplômes).<br/>- <a href="https://www.healthcerts.gov.sg/">HealthCerts</a>: Certificats numériques pour les voyageurs<br/>- <a href="https://verify.gov.sg/">Verify</a>: Plateforme pour vérifier les certificats émis par le gouvernement singapourien<br/>- <a href="https://www.tradetrust.io/">TradeTrust</a> (PST award): Plateforme pour les documents commerciaux numériques<br/> - <a href="https://www.notarise.gov.sg/">Notarise</a>: Portail délivrant des certificats liés à la santé',"Technologies utilisées: Ethereum, Solidity, Javascript, Typescript, React, and AWS"]},{company:"Zenika - Singapore",position:"Software Engineer, Consultant & Trainer",startDate:"2017-01-01",endDate:"2018-12-01",highlights:["Nous avons construit le nouveau module d'authentification afin d'accompagner les nouveaux projets de BNP Paribas Wealth Management. Le projet impliquait la mise en place d'une nouvelle pile technique et la mise en place de nouvelles pratiques au sein de l'ensemble de l'organisation en utilisant Spring Boot, Java 8, Git et TDD","Création du nouveau portail d'emploi <a href=\"https://www.mycareersfuture.gov.sg/\">MyCareersFuture</a> pour connecter les demandeurs d'emploi et les entreprises pour Govtech Singapour. Technologies utilisées : React, Node.JS, Typescript, Kotlin, GraphQL","Animation de formations sur TDD et Angular",'Speaker à <a href="https://www.meetup.com/fr-FR/singajug/events/245218392/">SingaJUG</a> et <a href="https://www.youtube.com/watch?v=x7j6KeQgZ6k">Voxxed Days Singapore</a>']},{company:"Zenika - Nantes, France",position:"Software Engineer, Consultant & Trainer",startDate:"2015-03-01",endDate:"2017-01-01",highlights:["Création de l'Architecture et application front de l'outil d'éco-conception fourni par <a href=\"https://greenspector.com/\">Greenspector</a> pour les développeurs. Technologies utilisées : Angular 1, NodeJS, Go, Android, Redis, Java 7, Ansible.","<b>Sparklane</b> est une startup française qui recherche des informations et les rend facilement disponibles pour les vendeurs et les marketeurs. Technologies utilisées : Angular 1, ElasticSearch, Docker, Groovy, Java 8.","<b>GE Money Bank</b> est l'unité de services bancaires de General Electric. Notre équipe a développé une application Web afin de réduire le temps de validation ou de rejet des prêts. Nous avons travaillé directement avec les analystes pour comprendre leurs besoins et la façon dont ils travaillaient afin d'améliorer leur productivité. Technologies utilisées : React, Docker, Java 7.","<b>CACEIS</b> est une banque de gestion d'actifs spécialisée dans les fonctions post-marché. Notre équipe a développé une application mobile, Olis Mobile, qui a remporté un prix de l'innovation décerné par Global Custodian. Technologies utilisées : Angular, Ionic 2","Animation de <b>formations</b> sur Javascript, Typescript, Angular (1&2), React and NodeJS",'Speaker à <a href="http://nantesjs.org/">NantesJS meetup</a> et <a href="https://web2day.co/2016/evenements/bien-preparer-migration-vers-angular-2/">Web2day</a>']},{company:"Sopra - Nantes, France",position:"IT Software Engineer",startDate:"2011-03-01",endDate:"2015-03-01",highlights:["Développeur principal sur l'application pour la DGDDI (Département des douanes) appelée <b>NSTI</b> basée sur des vieilles technologies (COBOL, GCOS7, C, ASP.NET) et les technologies J2EE. L'application devait suivre strictement les règles fournies par la Commission européenne","Développeur principal sur des applications internes déployées dans toute l'entreprise et utilisée par les managers. Technologies utilisées : PHP et J2EE","Développeur dans le pôle modernisation d'applications legacy, utilisant Bluage."]}],education:[{institution:"Université of Avignon",area:"Informatique et Mathématiques",studyType:"Licence",startDate:"2005-09-01",endDate:"2007-06-01"},{institution:"Université du Languedoc (Montpellier II)",area:"Informatique",studyType:"Licence & Master",startDate:"2007-09-01",endDate:"2010-06-01"},{institution:"Université de Nantes",area:"Informatique",studyType:"Master",startDate:"2010-09-01",endDate:"2011-06-01"}],skills:[{name:"Développement web",keywords:["Javascript","React","Typescript","Angular","NodeJS"]},{name:"Développement",keywords:["Java","Kotlin","Spring","Go"]},{name:"Autres",keywords:["Docker","Git","GraphQL","Ethereum"]}],languages:[{language:"Français",fluency:"Langue maternelle"},{language:"Anglais",fluency:"Compétence professionnelle avancée"}],interests:[{name:"Sports",keywords:["Football","Vélo","Tennis"]},{name:"Mangas",keywords:[]},{name:"Voyages",keywords:["Treks","Tourisme"]}]};const _e={class:"container mx-auto bg-white mb-10 px-4 mt-20 relative"},Ge={class:"absolute cursor-pointer top-2 right-2"},Je={class:"-mx-4"},Pe={class:"-mx-4n flex flex-col lg:flex-row"},Re={class:"w-100 lg:w-7/12 px-4"};y(i({setup(e){let t=window.location.search.substring(1),s=new URLSearchParams(t);const i=v(s.get("lang")||"fr"),o=()=>"fr"===i.value?Le:Ie,u=v(o());b(i,(()=>{u.value=o()}));const c=()=>{i.value="en"===i.value?"fr":"en";const e=new URL(window.location);e.searchParams.set("lang",i.value),window.history.pushState({},"",e)};return(e,t)=>(a(),n("div",_e,[g("span",Ge,["en"===i.value?(a(),n("img",{key:0,src:"/assets/french-flag.9c160267.svg",alt:"Click to change the resume language to french",class:"w-6",onClick:c})):(a(),n("img",{key:1,src:"/assets/uk-flag.1a55a5ce.svg",alt:"Click to change the resume language to english",class:"w-6",onClick:c}))]),g("div",Je,[r(qe,{name:u.value.basics.name,label:u.value.basics.label},null,8,["name","label"])]),g("div",Pe,[g("div",Re,[r(Ne,null,{default:l((()=>[r(ke,{summary:u.value.basics.summary,title:"en"===i.value?"About":"À propos"},null,8,["summary","title"])])),_:1}),r(Ne,null,{default:l((()=>[r(ye,{workExperiences:u.value.work,lang:i.value,title:"en"===i.value?"WORK EXPERIENCE":"EXPÉRIENCE PROFESSIONNELLE"},null,8,["workExperiences","lang","title"])])),_:1})]),r(Ne,{class:"w-100 lg:w-5/12 px-4"},{default:l((()=>[r(Ne,null,{default:l((()=>[r(oe,{email:u.value.basics.email,phone:u.value.basics.phone,networks:u.value.basics.networks},null,8,["email","phone","networks"])])),_:1}),r(Ne,null,{default:l((()=>[r(H,{education:u.value.education,title:"en"===i.value?"EDUCATION":"Formation"},null,8,["education","title"])])),_:1}),r(Ne,null,{default:l((()=>[r(P,{skills:u.value.skills,title:"en"===i.value?"SKILLS":"COMPÉTENCES"},null,8,["skills","title"])])),_:1}),r(Ne,{class:"languages"},{default:l((()=>[r(_,{languages:u.value.languages,title:"en"===i.value?"LANGUAGES":"LANGAGES"},null,8,["languages","title"])])),_:1}),r(Ne,null,{default:l((()=>[r(N,{interests:u.value.interests,title:"en"===i.value?"INTERESTS":"LOISIRS"},null,8,["interests","title"])])),_:1})])),_:1})])]))}})).mount("#app");