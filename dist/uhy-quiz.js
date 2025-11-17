var UHYQuiz=(()=>{var G=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var ae=Object.prototype.hasOwnProperty;var se=(e,o)=>{for(var i in o)G(e,i,{get:o[i],enumerable:!0})},ue=(e,o,i,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let u of ie(o))!ae.call(e,u)&&u!==i&&G(e,u,{get:()=>o[u],enumerable:!(s=re(o,u))||s.enumerable});return e};var le=e=>ue(G({},"__esModule",{value:!0}),e);var Ae={};se(Ae,{default:()=>we,destroyAll:()=>$,init:()=>J,restartAll:()=>X});var ce={startId:"q_age",nodes:{q_age:{id:"q_age",type:"yesno",prompt:"Are you 24 years or older?",yes:"out_auto_independent_24plus",no:"q_recent_hs"},q_recent_hs:{id:"q_recent_hs",type:"yesno",prompt:"Are you currently attending a public high school or did you graduate from a public high school in the last year?",yes:"q_identified_hs",no:"q_live_with_parents"},q_identified_hs:{id:"q_identified_hs",type:"yesno",prompt:"Were you identified as an unaccompanied homeless youth by a high school counselor, McKinney-Vento liaison, or other high school staff?",yes:"out_hs_determination_letter",no:"q_hs_staff_know"},q_hs_staff_know:{id:"q_hs_staff_know",type:"yesno",prompt:"Does a McKinney-Vento homeless liaison or other high school staff know about your homelessness?",yes:"out_hs_become_identified",no:"q_live_with_parents"},q_live_with_parents:{id:"q_live_with_parents",type:"yesno",prompt:"Do you live with your parents?",yes:"out_fafsa_parent",no:"q_temp_since_july"},q_temp_since_july:{id:"q_temp_since_july",type:"yesno",prompt:`Since July 1 of the previous school year, have you had to stay somewhere temporarily because you didn\u2019t have anywhere else to go? For example:

\u2022 Staying with friends or relatives because you lost housing or couldn\u2019t afford rent
\u2022 \u201CCouch surfing\u201D or moving from place to place
\u2022 Living in residence halls/dorms but you would otherwise have no safe place to go`,yes:"q_can_someone_confirm",no:"q_not_meant_for_living"},q_not_meant_for_living:{id:"q_not_meant_for_living",type:"yesno",prompt:`Since July 1 of the previous school year, have you stayed in a place not meant for people to live? For example:

\u2022 A motel or hotel because you had no other housing
\u2022 A trailer park, campground, car, park, or abandoned building`,yes:"q_can_someone_confirm",no:"q_at_risk"},q_at_risk:{id:"q_at_risk",type:"yesno",prompt:`Are you at risk of losing your housing soon or not having a safe place to stay? For example:

\u2022 Being told you can\u2019t stay where you are much longer
\u2022 Having a pending eviction
\u2022 Not knowing where you\u2019ll sleep next week or next month`,yes:"q_pay_all_expenses",no:"q_dep_support_from_parents"},q_pay_all_expenses:{id:"q_pay_all_expenses",type:"yesno",prompt:"Do you pay for all of your own expenses, including your housing? (Only answer \u201CYes\u201D if you do not receive any financial support from anyone.)",yes:"q_can_someone_confirm",no:"q_dep_support_from_parents"},q_can_someone_confirm:{id:"q_can_someone_confirm",type:"yesno",prompt:`Can any of the following individuals confirm your situation?

\u2022 A high school McKinney-Vento liaison or their designee (e.g., a school counselor)
\u2022 The director (or designee) of a shelter, drop-in center, or other program serving individuals experiencing homelessness
\u2022 The director (or designee) of a TRIO or GEAR UP program
\u2022 A financial aid administrator at your current or a previous college/university who has already made a similar determination`,yes:"out_third_party_determination",no:"q_still_staying_temp"},q_still_staying_temp:{id:"q_still_staying_temp",type:"yesno",prompt:"Are you still staying somewhere temporarily, or in a situation like the ones mentioned above?",yes:"out_faa_determination_uhy",no:"q_dep_support_from_parents"},q_dep_support_from_parents:{id:"q_dep_support_from_parents",type:"yesno",prompt:"Do you receive any financial support from either of your parents?",yes:"out_dependent_parent_info",no:"q_dep_contact_with_parents"},q_dep_contact_with_parents:{id:"q_dep_contact_with_parents",type:"yesno",prompt:"Do you have contact with your parents?",yes:"out_likely_dependent_contact_faa",no:"q_dep_abuse_or_unknown"},q_dep_abuse_or_unknown:{id:"q_dep_abuse_or_unknown",type:"yesno",prompt:`Do either of the following apply?

\u2022 You do not know where your parents are or how to contact them
\u2022 You left home due to an abusive or unsafe situation`,yes:"out_may_qualify_dependency_override",no:"out_likely_dependent_contact_faa"},out_auto_independent_24plus:{id:"out_auto_independent_24plus",type:"outcome",title:"You are automatically considered an independent student",body:"Because you are 24 or older, you are automatically considered an independent student for FAFSA purposes. You should complete the FAFSA without parental information. Only use your own information (and your spouse\u2019s, if you are currently married).",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_fafsa_parent:{id:"out_fafsa_parent",type:"outcome",title:"Complete the FAFSA with parental information",body:"Based on your answers, you are considered a dependent student and should complete the FAFSA including your parents\u2019 information.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_hs_determination_letter:{id:"out_hs_determination_letter",type:"outcome",title:"Request a determination letter from your high school",body:"You were identified as an unaccompanied homeless youth by your high school. Contact your McKinney-Vento liaison or high school counselor and request a written determination letter stating that you are (or were) an unaccompanied homeless youth. Give this letter to your financial aid office when you complete the FAFSA.",actions:[{label:"Find your McKinney-Vento liaison",href:"https://schoolhouseconnection.org/homeless-education-directory"},{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_hs_become_identified:{id:"out_hs_become_identified",type:"outcome",title:"Talk to your high school about being identified under McKinney-Vento",body:"Because your high school staff know about your homelessness, contact your McKinney-Vento liaison or school counselor to be formally identified as homeless under the McKinney-Vento Act. Once identified, you can request a determination letter as an unaccompanied homeless youth to give to your financial aid office.",actions:[{label:"Find your McKinney-Vento liaison",href:"https://schoolhouseconnection.org/homeless-education-directory"},{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_third_party_determination:{id:"out_third_party_determination",type:"outcome",title:"Ask a program or liaison to provide a determination",body:"Someone who knows your situation (such as a McKinney-Vento liaison, shelter or program director, TRIO/GEAR UP staff, or a financial aid administrator) can provide a written determination that you are an unaccompanied homeless youth. Give this documentation to your financial aid office. You will then complete the FAFSA as an independent student, without parent information.",actions:[{label:"Sample determination letters",href:"https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"},{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"}]},out_faa_determination_uhy:{id:"out_faa_determination_uhy",type:"outcome",title:"Request a determination from your financial aid office",body:"Because you are in a homeless or at-risk-of-homelessness situation and don\u2019t have another person who can document it, contact your school\u2019s financial aid office and request a determination as an unaccompanied homeless youth. They may ask you questions or request a written statement from you and from people who know your situation.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"}]},out_dependent_parent_info:{id:"out_dependent_parent_info",type:"outcome",title:"You are a dependent student for FAFSA",body:"Because you receive financial support from your parents, you will be considered a dependent student for FAFSA purposes and will need to report your parents\u2019 information on the FAFSA.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"__FAFSA_GUIDE_URL__"}]},out_likely_dependent_contact_faa:{id:"out_likely_dependent_contact_faa",type:"outcome",title:"You will most likely be considered a dependent student",body:"Based on your answers, you will most likely be considered a dependent student and will need to include your parents\u2019 information on the FAFSA. If you have unusual circumstances, contact your school\u2019s financial aid office and explain your situation.",actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"}]},out_may_qualify_dependency_override:{id:"out_may_qualify_dependency_override",type:"outcome",title:"You may qualify for a dependency override",body:`Because you do not have contact with your parents and/or left home due to an abusive or unsafe situation, you may qualify for a dependency override. Submit the FAFSA as an independent student and follow up with your school\u2019s financial aid office.

They will need a statement from you describing your circumstances, and they will likely need signed statements from people who know you and can confirm your situation.

Note that the following circumstances on their own usually do NOT qualify for a dependency override:
\u2022 You do not live with your parents
\u2022 You are financially self-sufficient
\u2022 Your parents do not claim you on their taxes
\u2022 Your parents are not helping with college expenses
\u2022 Your parents do not want to provide their information or refuse to complete the FAFSA`,actions:[{label:"Go to FAFSA.gov",href:"https://studentaid.gov/h/apply-for-aid/fafsa"},{label:"How to answer FAFSA questions",href:"__FAFSA_GUIDE_URL__"}]}}},U=ce;var de={links:{FAFSA:"https://studentaid.gov/h/apply-for-aid/fafsa",TEMPLATE_LIAISON:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_PROGRAM:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_TRIO:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",TEMPLATE_FAA:"https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",FAFSA_GUIDE_URL:"https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"},i18n:{locale:"en-US"}},Y=de;function H(e){if(!e)return()=>{};let o=Array.from(e.querySelectorAll("button"));if(o.length===0)return()=>{};let i=s=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s.key))return;s.preventDefault();let u=o.indexOf(document.activeElement);if(u===-1){o[0].focus();return}let f=s.key==="ArrowLeft"||s.key==="ArrowUp"?-1:1,q=(u+f+o.length)%o.length;o[q].focus()};return e.addEventListener("keydown",i),()=>{e.removeEventListener("keydown",i)}}function I(e){if(!e)return;let o=e.querySelector("[data-uhyq-focus]");o&&o.focus()}function D(e,o){if(!e||typeof o!="function")return()=>{};let i=s=>{s.key==="Escape"&&o(s)};return e.addEventListener("keydown",i),()=>{e.removeEventListener("keydown",i)}}function M(e,o){e&&(e.textContent="",window.requestAnimationFrame(()=>{e.textContent=o}))}var pe=`
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the interactive quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;function he(e,o){if(!e)return"#";let i={__FAFSA_URL__:o.FAFSA,__TEMPLATE_LIAISON__:o.TEMPLATE_LIAISON,__TEMPLATE_PROGRAM__:o.TEMPLATE_PROGRAM,__TEMPLATE_TRIO__:o.TEMPLATE_TRIO,__TEMPLATE_FAA__:o.TEMPLATE_FAA,__FAFSA_GUIDE_URL__:o.FAFSA_GUIDE_URL};return i[e]?i[e]:e}function Q(e,o){let i=e.nodes[o];if(!i||i.type!=="yesno")return 0;let s=e.nodes[i.yes],u=e.nodes[i.no],f=null;return s&&s.type==="yesno"&&(f=i.yes),u&&u.type==="yesno"&&(f?f=i.yes:f=i.no),1+(f?Q(e,f):0)}function ye(e,o){return o?`${e}:${o}`:e}function V({container:e,tree:o,config:i,callbacks:s={},initialPathSegments:u=[]}){let f=i?.links??{},q=typeof s.onStep=="function"?s.onStep:()=>{},E=typeof s.onOutcome=="function"?s.onOutcome:()=>{},C=e.innerHTML.trim()||pe;e.innerHTML="";let y=document.createElement("div");y.className="uhyq-root",y.setAttribute("role","application"),y.setAttribute("aria-label","Unaccompanied homeless youth determination quiz");let b=document.createElement("div");b.className="uhyq-progress",b.setAttribute("role","status");let p=document.createElement("div");p.className="uhyq-card",p.setAttribute("aria-live","polite");let _=document.createElement("div");_.className="uhyq-sr-only",_.setAttribute("aria-live","polite"),_.setAttribute("aria-atomic","true");let k=document.createElement("div");k.className="uhyq-controls";let m=document.createElement("button");m.type="button",m.className="uhyq-btn uhyq-btn-secondary",m.textContent="Back",m.setAttribute("aria-label","Go to previous question"),m.disabled=!0;let w=document.createElement("button");w.type="button",w.className="uhyq-btn uhyq-btn-secondary",w.textContent="Restart",w.setAttribute("aria-label","Restart quiz"),k.append(m,w),y.append(b,p,k,_),e.appendChild(y);let c={currentId:o.startId,history:[],pathSegments:[]},x=null,R=D(y,()=>{window.confirm("Restart the quiz? Your answers will be cleared.")&&T()});function S(){x&&(x(),x=null)}function P(t){return t?t.includes(`

`)?t.split(`

`).map(n=>P(n.trim())).join(""):t.includes(`
\u2022`)||t.trim().startsWith("\u2022")?`<ul class="uhyq-bullet-list">${t.split(`
`).map(r=>r.trim()).flatMap(r=>r.split("\u2022")).map(r=>r.trim()).filter(Boolean).map(r=>`<li>${r}</li>`).join("")}</ul>`:`<p>${t}</p>`:""}function W(t){return typeof t!="string"||!t.includes(`
`)?t:P(t.trim())}function ee(t){S(),p.innerHTML="";let n=document.createElement("h2");n.id=`${t.id}-prompt`,n.innerHTML=W(t.prompt);let a=document.createElement("div");a.className="uhyq-choices",a.setAttribute("role","group"),a.setAttribute("aria-labelledby",n.id);let r={value:"yes",label:"Yes",nextId:t.yes,segmentValue:"yes"},h={value:"no",label:"No",nextId:t.no,segmentValue:"no"},d=document.createElement("button");d.type="button",d.className="uhyq-btn",d.dataset.answer="yes",d.dataset.uhyqFocus="true",d.textContent=r.label,d.addEventListener("click",()=>F(r));let l=document.createElement("button");l.type="button",l.className="uhyq-btn",l.dataset.answer="no",l.textContent=h.label,l.addEventListener("click",()=>F(h)),a.append(d,l),p.append(n,a),x=H(a),I(p),M(_,t.prompt),q({id:t.id,index:c.history.length+1})}function te(t){S(),p.innerHTML="";let n=document.createElement("h2");n.id=`${t.id}-prompt`,n.textContent=t.prompt;let a=document.createElement("div");a.className="uhyq-choices",a.setAttribute("role","group"),a.setAttribute("aria-labelledby",n.id),(t.options||[]).forEach((r,h)=>{let d={value:r.id||r.label,label:r.label,nextId:r.next,segmentValue:r.id||r.label},l=document.createElement("button");l.type="button",l.className="uhyq-btn",h===0&&(l.dataset.uhyqFocus="true"),l.textContent=r.label,l.addEventListener("click",()=>F(d)),a.appendChild(l)}),p.append(n,a),x=H(a),I(p),M(_,t.prompt),q({id:t.id,index:c.history.length+1})}function oe(t){S(),p.innerHTML="";let n=document.createElement("h2");n.textContent=t.title;let a=document.createElement("p");a.className="uhyq-body",a.textContent=t.body;let r=document.createElement("div");r.className="uhyq-outcome-actions",(t.actions||[]).forEach(h=>{let d=he(h.href,f),l=document.createElement("a");l.className="uhyq-btn uhyq-btn-secondary uhyq-link-button",l.href=d,l.target="_blank",l.rel="noopener noreferrer",l.textContent=h.label,r.appendChild(l)}),r.children.length&&r.firstElementChild?.setAttribute("data-uhyq-focus","true"),p.append(n,a,r),M(_,t.title),E({id:t.id,title:t.title}),m.disabled=c.history.length===0,I(p)}let A=null;function ve(t){clearTimeout(A);let n=y.querySelector(".uhyq-alert");n||(n=document.createElement("div"),n.className="uhyq-alert",y.insertBefore(n,k)),n.textContent=t,A=window.setTimeout(()=>{n&&n.remove()},4e3)}function B(t){if(t.type!=="yesno"){b.textContent="You're all set";return}let n=c.history.filter(h=>{let d=o.nodes[h.id];return d&&d.type==="yesno"}).length,a=n+1,r=n+Q(o,t.id);b.textContent=`Question ${a} of ${r}`}function F(t){let n=o.nodes[c.currentId];if(!n||!t||!t.nextId)return;let a=t.segmentValue??t.value??null;c.history.push({id:n.id,answer:a}),c.pathSegments.push(ye(n.id,a)),c.currentId=t.nextId,L()}function ne(){if(!c.history.length)return;let t=c.history.pop();c.pathSegments.pop(),c.currentId=t.id,L()}function T(){c.currentId=o.startId,c.history=[],c.pathSegments=[],A&&clearTimeout(A);let t=y.querySelector(".uhyq-alert");t&&t.remove(),L()}function O(t){if(!(!Array.isArray(t)||!t.length)){T();for(let n of t){if(typeof n!="string"||!n.length)break;let a,r;if(n.includes(":")?[a,r]=n.split(":"):(a=n.slice(0,-1),r=n.slice(-1)),!a)break;let h=o.nodes[c.currentId];if(!h||h.id!==a)break;if(h.type==="buttonGroup"){let g=(h.options||[]).find(z=>(z.id||z.label)===r);if(!g||!g.next)break;F({value:g.id||g.label,nextId:g.next,segmentValue:g.id||g.label});continue}if(h.type!=="yesno")break;let d=r==="y"?"yes":r==="n"?"no":r==="yes"||r==="no"?r:null;if(!d)break;let l=h[d];if(!l||(F({value:d,nextId:l,segmentValue:d}),o.nodes[c.currentId]?.type!=="yesno"&&o.nodes[c.currentId]?.type!=="buttonGroup"))break}}}function L(){let t=o.nodes[c.currentId];if(!t){p.innerHTML=C,m.disabled=!0,b.textContent="Sorry, this quiz is unavailable right now.";return}t.type==="yesno"?(B(t),ee(t),m.disabled=c.history.length===0):t.type==="buttonGroup"?(b.textContent="Select your role to begin",te(t),m.disabled=c.history.length===0):(B(t),oe(t))}return m.addEventListener("click",ne),w.addEventListener("click",()=>{window.confirm("Restart the quiz? Your answers will be cleared.")&&T()}),L(),u.length&&O(u),{destroy(){S(),R&&(R(),R=null),A&&clearTimeout(A),e.innerHTML=C},restart:T,applyPath:O}}var K=`.uhyq-card h2 p {
  margin: 0 0 0.75rem;
}

.uhyq-card h2 ul {
  margin: 0 0 0.75rem 1.25rem;
  padding: 0;
  list-style: disc;
}

.uhyq-card h2 ul:last-child {
  margin-bottom: 0;
}

.uhyq-card h2 li {
  margin: 0.35rem 0;
  line-height: 1.45;
}
.uhyq-root {
  font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f8f5ff;
  color: #2c2050;
  border: 1px solid rgba(91, 44, 131, 0.2);
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(44, 32, 80, 0.15);
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.uhyq-root * {
  box-sizing: border-box;
}

.uhyq-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.uhyq-hidden {
  display: none !important;
}

.uhyq-progress {
  font-size: 0.95rem;
  font-weight: 600;
  color: #5b2c83;
}

.uhyq-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.uhyq-card h2 {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  color: #432266;
}

.uhyq-body {
  font-size: 0.95rem;
  line-height: 1.5;
}

.uhyq-actions,
.uhyq-choices {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.uhyq-btn {
  appearance: none;
  background-color: #5b2c83;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  outline: none;
}

.uhyq-btn:hover,
.uhyq-btn:focus-visible {
  background-color: #4a206e;
}

.uhyq-btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 220, 92, 0.6);
}

.uhyq-btn-secondary {
  background-color: #ffdc5c;
  color: #432266;
  border: 2px solid #f6b81f;
}

.uhyq-btn-secondary:hover,
.uhyq-btn-secondary:focus-visible {
  background-color: #ffd13a;
}

.uhyq-controls {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.uhyq-controls .uhyq-btn {
  flex: 1 1 150px;
}

.uhyq-fallback {
  padding: 16px;
  border: 1px dashed rgba(91, 44, 131, 0.4);
  border-radius: 12px;
  background: #fff7d6;
  color: #2c2050;
  font-size: 0.95rem;
}

.uhyq-alert {
  background: #f9ecff;
  border-left: 4px solid #5b2c83;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
}

.uhyq-link-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
}

.uhyq-link-button::after {
  content: "\\2197";
  font-size: 0.85em;
}

.uhyq-outcome-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.uhyq-muted {
  font-size: 0.85rem;
  color: #4a4a4a;
}

@media (max-width: 480px) {
  .uhyq-root {
    padding: 20px;
    border-radius: 12px;
  }

  .uhyq-controls {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .uhyq-btn {
    transition: none;
  }
}

@media print {
  .uhyq-root {
    box-shadow: none;
    border: 1px solid #000;
  }

  .uhyq-controls,
  .uhyq-progress {
    display: none !important;
  }

  .uhyq-outcome-actions {
    display: block;
  }

  .uhyq-link-button::after {
    content: " (" attr(href) ")";
  }
}

`;var j="uhyq-style",me=`
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`,v=new Map;function _e(){if(typeof document>"u"||document.getElementById(j))return;let e=document.createElement("style");e.id=j,e.textContent=K,document.head.appendChild(e)}function N(e,o){if(!o)return e;let i=Array.isArray(e)?[...e]:{...e};return Object.keys(o).forEach(s=>{let u=o[s];u&&typeof u=="object"&&!Array.isArray(u)?i[s]=N(i[s]||{},u):i[s]=u}),i}function be(e){return N({},e)}function ge(e){if(typeof e!="string"||!e.startsWith("#"))return[];let i=new URLSearchParams(e.slice(1)).get("path");return i?decodeURIComponent(i).split("-").map(u=>u.trim()).filter(Boolean):[]}function qe(e){e&&(e.innerHTML.trim()||(e.innerHTML=me))}function $(){v.forEach(e=>{e&&typeof e.destroy=="function"&&e.destroy()}),v.clear()}function X(){v.forEach(e=>{e&&typeof e.restart=="function"&&e.restart()})}function J(e={}){if(typeof document>"u")return[];let{selector:o="[data-uhy-quiz]",configOverrides:i={},onStep:s,onOutcome:u}=e;_e();let f=N(be(Y),i),q=ge(window.location.hash),E=Array.from(document.querySelectorAll(o));return E.length?E.map((y,b)=>{if(v.has(y)){let _=v.get(y);return _.restart(),_}qe(y);let p=V({container:y,tree:U,config:f,callbacks:{onStep:s,onOutcome:u},initialPathSegments:b===0?q:[]});return v.set(y,p),p}):(console.warn("UHYQuiz: no containers found for selector",o),[])}var Z={init:J,destroyAll:$,restartAll:X};typeof window<"u"&&(window.UHYQuiz=Z);var we=Z;return le(Ae);})();
