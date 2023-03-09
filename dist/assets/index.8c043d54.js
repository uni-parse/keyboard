const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}};N();var j="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";function q(e){e.append(w),_.style.bottom=".3rem";let t=0;_.addEventListener("click",()=>{t=!t,t?y.forEach(r=>r.style.right="2.8rem"):y.forEach(r=>r.style.right=0)})}const w=document.createElement("address"),Q=[[m("youtube"),"https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg"],[m("facebook"),"https://facebook.com/UniParse"],[m("instagram"),"https://instagram.com/UniParse"],[m("linkedin"),"https://linkedin.com/in/UniParse"],[m("github"),"https://github.com/TheUniParse"],[m("twitter"),"https://twitter.com/UniParse"]];for(const[e,t]of Q){const r=document.createElement("a");r.target="_blank",r.innerHTML=e,r.href=t,w.append(r)}const _=document.createElement("img");_.srcset=j;_.alt="uniparse";w.append(_);const y=w.querySelectorAll("svg");y.forEach((e,t)=>e.style.transition=`all 500ms cubic-bezier(.215, .61, .355, 1), right ${(y.length-t)*100+200}ms cubic-bezier(.4,1,.8,1.4), left ${(y.length-t)*100+200}ms cubic-bezier(.4,1,.8,1.4)`);function m(e){const t={github:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='KpzH_ttTMIjq8dhx1zD2pa_52539_gr1' x1='30.999' x2='30.999' y1='16' y2='55.342' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)' d='M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z'></path><linearGradient id='KpzH_ttTMIjq8dhx1zD2pb_52539_gr2' x1='32' x2='32' y1='5' y2='59.167' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)' d='M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z'></path></svg>",twitter:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1' x1='32' x2='32' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1)' d='M57.595,16.086c-0.286-0.341-0.762-0.45-1.17-0.271c-0.614,0.271-1.245,0.512-1.891,0.719 c0.824-1.035,1.462-2.216,1.874-3.491c0.127-0.396-0.002-0.827-0.326-1.087c-0.324-0.261-0.774-0.295-1.131-0.083 c-1.777,1.041-3.672,1.788-5.641,2.223C47.244,12.122,44.449,11,41.555,11c-6.169,0-11.189,4.978-11.189,11.097 c0,0.404,0.022,0.81,0.067,1.214c-7.41-0.705-14.289-4.343-19.027-10.103c-0.207-0.252-0.518-0.385-0.85-0.362 c-0.325,0.025-0.618,0.207-0.784,0.488c-0.993,1.679-1.519,3.613-1.519,5.593c0,2.447,0.807,4.78,2.247,6.68 c-0.292-0.123-0.579-0.26-0.859-0.412c-0.311-0.167-0.686-0.161-0.988,0.021c-0.303,0.181-0.488,0.507-0.488,0.859v0.119 c0,3.708,1.868,7.073,4.786,9.104c-0.012-0.002-0.024-0.005-0.036-0.007c-0.35-0.065-0.699,0.062-0.93,0.327 c-0.231,0.265-0.306,0.631-0.198,0.966c1.182,3.648,4.149,6.371,7.769,7.332c-3.003,1.771-6.401,2.697-9.957,2.697 c-0.786,0-1.563-0.046-2.308-0.137c-0.467-0.059-0.906,0.218-1.063,0.657c-0.157,0.44,0.012,0.931,0.407,1.181 C11.478,51.38,17.064,53,22.79,53c18.772,0,29.989-15.119,29.989-29.736c0-0.271-0.005-0.541-0.014-0.81 c1.907-1.423,3.552-3.159,4.896-5.169C57.908,16.915,57.881,16.427,57.595,16.086z M51.167,21.143 c-0.279,0.197-0.438,0.523-0.422,0.865c0.02,0.415,0.034,0.834,0.034,1.256C50.779,36.897,40.31,51,22.79,51 c-3.982,0-7.894-0.84-11.499-2.452c4.226-0.321,8.198-1.85,11.575-4.468c0.335-0.26,0.47-0.702,0.336-1.104 s-0.506-0.677-0.93-0.686c-3.381-0.065-6.404-1.952-7.948-4.835c1.115,0.038,2.203-0.099,3.276-0.393 c0.447-0.123,0.751-0.537,0.735-1c-0.017-0.464-0.35-0.854-0.804-0.945c-3.773-0.752-6.632-3.773-7.244-7.449 c1.122,0.403,2.297,0.631,3.468,0.667c0.459,0.011,0.848-0.271,0.983-0.696c0.136-0.426-0.027-0.89-0.399-1.137 c-2.558-1.698-4.084-4.53-4.084-7.575c0-1.135,0.21-2.25,0.614-3.287c5.319,5.827,12.784,9.361,20.714,9.76 c0.328,0.022,0.617-0.116,0.817-0.357c0.202-0.241,0.278-0.563,0.207-0.868c-0.16-0.685-0.24-1.384-0.24-2.077 c0-5.016,4.122-9.097,9.189-9.097c2.537,0,4.979,1.047,6.7,2.871c0.235,0.248,0.581,0.359,0.917,0.296 c1.385-0.267,2.739-0.671,4.048-1.209c-0.729,1.007-1.665,1.865-2.759,2.514c-0.407,0.242-0.589,0.735-0.436,1.184 c0.153,0.447,0.597,0.73,1.068,0.669c0.952-0.117,1.886-0.292,2.797-0.525C53.06,19.666,52.15,20.449,51.167,21.143z'></path><linearGradient id='iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2' x1='38.903' x2='38.903' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2)' d='M30.772,45.786l0.621,1.9c7.123-2.326,12.824-7.914,15.642-15.33l-1.869-0.711 C43.636,35.671,39.733,42.859,30.772,45.786z'></path><g><linearGradient id='iS8U25XJCb2VBQOwbuAcrc' x1='42' x2='42' y1='17.979' y2='21.528' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><circle cx='42' cy='20' r='2' fill='url(#undefined)'></circle></g></svg>",facebook:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='JOZq0V4XPxMzNaLCE5XPGa_44003_gr1' x1='37.646' x2='37.646' y1='14.5' y2='56.878' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGa_44003_gr1)' d='M42,56V38h5.358l0.934-8H42v-4.457c0-2.097-0.131-3.527,2.877-3.527L48,22.014v-6.479 c-1-0.088-2.487-0.285-5.136-0.285c-5.531,0-8.864,3.376-8.864,9.576V30h-7v8h7v18H42z'></path><linearGradient id='JOZq0V4XPxMzNaLCE5XPGb_44003_gr2' x1='32' x2='32' y1='6.833' y2='58.017' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGb_44003_gr2)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",linkedin:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='SUJNhpmDQDF27Y3OfwgfYa_44019_gr1' x1='19' x2='19' y1='24.858' y2='49.041' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)' fill-rule='evenodd' d='M22 48L22 26 16 26 16 48 22 48z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYb_44019_gr2' x1='19.382' x2='19.382' y1='15.423' y2='23.341' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)' fill-rule='evenodd' d='M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYc_44019_gr3' x1='37.386' x2='37.386' y1='14.125' y2='49.525' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)' fill-rule='evenodd' d='M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYd_44019_gr4' x1='32' x2='32' y1='6.5' y2='57.5' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",instagram:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='jm_nAfYbxsVmTlYr5N4x9a_43625_gr1' x1='32' x2='32' y1='6.667' y2='57.872' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)' d='M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9b_43625_gr2' x1='32' x2='32' y1='18.167' y2='45.679' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)' d='M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9c_43625_gr3' x1='46' x2='46' y1='12.75' y2='23.049' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)' d='M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z'></path></svg>",youtube:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='PMWUiMSnUf2R_PPJ6rqZea_44112_gr1' x1='32' x2='32' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZea_44112_gr1)' d='M32,53.001c-6.358,0-12.716-0.195-19.299-0.584c-4.96-0.293-8.961-4.242-9.308-9.187 c-0.521-7.452-0.521-15.009-0.001-22.46c0.348-4.945,4.349-8.895,9.309-9.188c13.167-0.778,25.433-0.778,38.598,0 c4.96,0.293,8.961,4.242,9.308,9.187c0.521,7.452,0.521,15.009,0.001,22.46c-0.348,4.945-4.349,8.895-9.309,9.188l0,0 C44.716,52.806,38.358,53.001,32,53.001z M51.182,50.421l0.059,0.998L51.182,50.421c3.959-0.234,7.153-3.386,7.431-7.331 c0.515-7.358,0.515-14.821-0.001-22.181c-0.276-3.944-3.471-7.096-7.43-7.33c-13.088-0.773-25.275-0.773-38.363,0 c-3.959,0.234-7.153,3.386-7.431,7.331c-0.515,7.358-0.515,14.821,0.001,22.181c0.276,3.944,3.471,7.096,7.43,7.33 C25.906,51.194,38.094,51.194,51.182,50.421z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2' x1='31.72' x2='31.72' y1='24.25' y2='39.252' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2)' d='M25 39.84L25 24.16 38.44 32z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZec_44112_gr3' x1='32.212' x2='32.212' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZec_44112_gr3)' d='M24,41.581V22.419L40.425,32L24,41.581z M26,25.901v12.197L36.456,32L26,25.901z'></path></svg>",whatsapp:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='fzF5K76u~QPjMIgETt7bMa_43677_gr1' x1='32' x2='32' y1='5.25' y2='58.834' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)' d='M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z'></path><linearGradient id='fzF5K76u~QPjMIgETt7bMb_43677_gr2' x1='32.305' x2='32.305' y1='17.5' y2='46.527' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)' fill-rule='evenodd' d='M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z' clip-rule='evenodd'></path></svg>"};return e?t[e]:t}const n={power:`
55 46 40 34 29 29 35   47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18         10  26   40  60`,standard:`
\`  1 2 3 4 5 6   \\   7 8 9 0 =   \u232B
\u21C4    q w f p b   [   j l u y ' -   \u23CE
alt   a r s t g   ]   m n e i o ;   \u23CE
\u21E7    \u21E7 x c d v   z /   k h , . \u21E7
\u229E      \u2A01 \u{1F4B2}     space    \u2B50 \u2A01 \u2A01 \u2263`,ext:`
.  . . . . . .   .   . . . . .    .
.   \u21C8 \u2297 \u25B4 \u2387 .   .   . \u21F1 \u2191 \u21F2 \u21DE \u21DF   .
.    \u21CA \u25C2 \u25BE \u25B8 \u2263   .   \u21C4 \u2190 \u2193 \u2192 \u23CE .   .
.   . \u21A9 \u21AA \u232B \u2326   . .   \u21EA \u25F4 \u29BA \u25F7 .
.       . .      .        . . . .`,ext2:`
.  . . . . . .   .   . . . . .      .
.   . . . . .   .   . \u2399 \u{1F50A} \u229A \u25FC .   .
.   . . \u{1F50D} . .   .  \u{1F4F1} \u23EE \u{1F509} \u23ED \u23EF \u{1F507}   .
.  . . . . .   . .   \u2600 \u2733 \u2295 \u229D .
.       . .     .     . . . .`,sym:`
\u22C6  \u25AA \u25B8 . . \xBB .   .   \u203A \u2022 . . \u2043  .
. \` [ ] . .   .   .  . ( ) " _  .
.   1 2 3 4 .   \u20AC  \\ 7 8 9 0 :  .
.  . { } 5 =   . .   / 6 < > .
.     . .       .      . . . .`,sym2:`
. \u2152 \xBD  \u2153  \xBC  \u2155  .    .    \xBE  \u2070  .  .  .   .
.  \u{1F4A1} \u26A0\uFE0F  \u2191  \u03C0  \u2248    \u2209   .  .  \u2264  \u2265  \u2026   \xB1   .
.   F1 F2 F3 F4 \u2260    \u2208   .  F7 F8 F9 F10  .   .
.  .  \u2717  \u32BF F5 F11  . .  F12 F6  .  .  .
.      .   .         .         .   .   .   .`},L=n.standard;X();n.shift=K(n.standard);n.symShift=K(n.sym,!1);n.standardHtk=n.standard.map(e=>x(e));n.extHtk=n.ext.map(e=>x(e));n.ext2Htk=n.ext2.map(e=>x(e));n.standardRows=O(L);n.standardHtkRows=O(L.split("").map(e=>x(e)).join(""));function X(){Object.entries(n).forEach(([e,t])=>n[e]=t.replace(`
`,"").replaceAll(`
`," ").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(" "))}function O(e){const t=["top","upper","home","lower","bottom"],r=e.replace(`
`,"").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(`
`);return r.forEach((s,o)=>r[o]=s.split(" ")),Object.fromEntries(t.map((s,o)=>[s,r[o]]))}function K(e,t=!0){return e.map(r=>{if(t&&r==".")return">";switch(r){case"`":return"~";case"1":return"!";case"2":return"@";case"3":return"#";case"4":return"$";case"5":return"%";case"6":return"^";case"7":return"&";case"8":return"*";case"9":return"(";case"0":return")";case"=":return"+";case"-":return"_";case"\\":return"|";case"/":return"?";case"[":return"{";case"]":return"}";case",":return"<";case";":return":";case"'":return'"';default:return r.length==1&&r>="a"&&r<="z"?r.toUpperCase():r}})}function x(e){switch(e){case"\u{1F4B2}":return"F23";case"\u2B50":return"F24";case"\u2297":return"Esc";case"\u238B":return"Esc";case"\u21C4":return"Tab";case"\u23CE":return"Enter";case"\u21EA":return"Capslock";case"\u21E7":return"LShift";case"\u2A01":return"LCtrl";case"\u229E":return"LWin";case"\u2263":return"AppsKey";case"\u232B":return"Bs";case"\u2326":return"Del";case"\u21F1":return"Home";case"\u21F2":return"End";case"\u21DE":return"PgUp";case"\u21DF":return"PgDn";case"\u2191":return"Up";case"\u2193":return"Down";case"\u2192":return"Right";case"\u2190":return"Left";case"\u25B4":return"mouseU";case"\u25BE":return"mouseD";case"\u25B8":return"mouseR";case"\u25C2":return"mouseL";case"\u25F4":return"LButton";case"\u25F7":return"RButton";case"\u29BA":return"MButton";case"\u21A9":return"XButton1";case"\u21AA":return"XButton2";case"\u21C8":return"WheelUp";case"\u21CA":return"WheelDown";case"\u2387":return"toggleMouseSpeed";case"\u23EF":return"Media_Play_Pause";case"\u25FC":return"Media_Stop";case"\u23ED":return"Media_Next";case"\u23EE":return"Media_Prev";case"\u{1F507}":return"Volume_Mute";case"\u{1F50A}":return"Volume_Up";case"\u{1F509}":return"Volume_Down";case"\u2600":return"brightnessUp";case"\u2733":return"brightnessDown";case"\u{1F50D}":return"Browser_Search";case"\u229A":return"^Numpad0";case"\u2295":return"^NumpadAdd";case"\u229D":return"^NumpadSub";case"\u2399":return"PrintScreen";case"\u{1F4F1}":return'Run("calc")';case"%":return"`%";case";":return"`;";default:return e}}var Z="./assets/pop1.b5fe646f.wav",ee="./assets/pop2.5719bcba.wav",te="./assets/pop3.4711d144.wav";const T=[Z,ee,te];T.forEach(e=>new Audio(e));function re(){const e=document.querySelectorAll("#keyboard button");document.addEventListener("keydown",t=>{const{key:r,code:s}=t;console.log(s,r);const o=[].find.call(e,l=>l.innerText==r||l.className.split(" ").find(c=>c==r||c=="_"+r||c=="space"&&r==" "||c=="LShift"&&r=="Shift"));!o||(new Audio(T[Math.floor(Math.random()*3)]).play(),o.style.borderStyle="inset",o.className.includes("modifier")?o.style.backgroundColor="darkcyan":o.style.backgroundColor="#333",document.addEventListener("keyup",function l({key:c}){r==c&&(document.removeEventListener("keyup",l),o.style.borderStyle="outset",o.className.includes("modifier")?o.style.backgroundColor="#222":o.style.backgroundColor="#666")},{once:!1}))})}const $=document.createElement("div");$.id="keyboard";const oe=[...Object.entries(n.standardRows)],se=oe.map(([e,t])=>{const r=document.createElement("div");r.id=`${e}_row`,r.className="row";const s=t.map((o,l)=>{const c=document.createElement("button");return c.textContent=o,c.className=ne(n.standardHtkRows[e][l]),"\u232B \u21C4 \u23CE alt \u21E7 \u229E \u2A01 \u{1F4B2} space \u2B50 \u2263".split(" ").includes(o)&&c.classList.add("modifier"),c});return r.append(...s),r});$.append(...se);function ne(e){if(+e||e==0)return`_${e}`;switch(e){case"`":return"backtick";case"-":return"hyphon";case"=":return"equal";case"/":return"slash";case"\\":return"backSlash";case"[":return"openBreacket";case"]":return"closeBracket";case"'":return"quate";case"`;":return"semiColon";case",":return"comma";case".":return"period";default:return e}}var ae="./assets/UniParse.8b8d5d1d.zip",le="./assets/msklc.100e6e50.zip";const h=document.createElement("fieldset");h.id="switcher";h.name="layer";const H=document.createElement("legend");H.innerText="layout switcher";h.append(H);const ce="power standard shift ext ext2 sym symShift sym2",ie=ce.split(" ").map(e=>{const t=document.createElement("label");t.id=`label_${e}`;const r=document.createElement("input");return r.type="radio",r.id=`radio_${e}`,r.name="layer",r.value=e,e=="standard"&&r.setAttribute("checked",!0),t.append(r,e),t});h.append(...ie);function de(){const e=document.querySelectorAll("#keyboard button");h.addEventListener("change",t=>e.forEach((r,s)=>r.textContent=n[t.target.value][s]))}const v=document.createElement("div");v.id="panel";v.append(h);const M=document.createElement("div");M.id="download";v.append(M);const S=document.createElement("a");S.textContent="MsKLC";S.download="msklc.zip";S.href=le;M.append(S);const C=document.createElement("a");C.textContent="AutoHotKey";C.download="autohotkey.zip";C.href=ae;M.append(C);const p="F23",f="F24",i={symKey:p,extKey:f};i.intro=`;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority 'High'
Persistent
#Warn  ; detecting common errors.

x_slow := 1.5
x_default := 2.8
x_defaultMultiply := 1.01
x_doubleMultiply := 1.1
x_tripleMultiply := 3

y_slow := x_slow
y_default := x_default
y_defaultMultiply := x_defaultMultiply
y_doubleMultiply := x_doubleMultiply
y_tripleMultiply := x_tripleMultiply

x := x_default
y := y_default

mouse_speed_lvl := 0
x_max := mouse_speed_lvl ? x_default : 8
y_max := x_max

wheelDelay_default := 40
wheelDelay_multiplier := .25

brightnessJump := 10
currentBrightness := getCurrentBrightness()

SetCapsLockState('AlwaysOff')

`;i.switchers=`${p}::symSwitcher('${p}', 400, 200)
${f}::extSwitcher('${f}', 400, 200)`;i.layer_condition={ext:`!layer_ext2 && (
  (
    layer_ext
    && !GetKeyState("${p}", "P")
  ) || (
    !layer_ext
    && GetKeyState("${f}", "P")
    && !GetKeyState("${p}", "P")
  ) || (
    layer_sym
    && GetKeyState("${f}", "P")
  )
)`,ext2:"layer_ext2",sym:`!layer_sym2 && (
  (
    layer_sym
    && !GetKeyState("${f}", "P")
  ) || (
    !layer_sym
    && GetKeyState("${p}", "P")
    && !GetKeyState("${f}", "P")
  ) || (
    layer_ext
    && GetKeyState("${p}", "P")
  )
)`,sym1:`GetKeyState("${p}", "P") && GetKeyState("${f}", "P")`,sym2:"layer_sym2"};i.config=`layer_ext := 0
layer_ext2 := 0
layer_sym := 0
layer_sym2 := 0

switchers := {
  holding_sym: 0,
  holding_ext: 0,
  pressCount_sym: 0,
  pressCount_ext: 0
}

symSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_sym
    return

  switchers.holding_sym := 1
  layer_sym := 0

  If !switchers.pressCount_sym {
    switchers.pressCount_sym := 1
    SetTimer(double_sym_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_sym := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_ext := 0
    layer_sym := 1
    switchers.pressCount_sym := 0
    switchers.holding_sym := 0
  } else {
    layer_sym2 := 1
    KeyWait(key)
    layer_sym2 := 0
    switchers.holding_sym := 0
  }
}

double_sym_timer() {
  global
  switchers.pressCount_sym := 0
}

extSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_ext
    return
  
  switchers.holding_ext := 1
  layer_ext := 0

  If !switchers.pressCount_ext {
    switchers.pressCount_ext := 1
    SetTimer(double_ext_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_ext := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_sym := 0
    layer_ext := 1
    switchers.pressCount_ext := 0
    switchers.holding_ext := 0
  } else {
    layer_ext2 := 1
    KeyWait(key)
    layer_ext2 := 0
    switchers.holding_ext := 0        
  }
}

double_ext_timer() {
  global
  switchers.pressCount_ext := 0
}`;function ue(e,t,r,s,o){return`mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  pressCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  keys: Map(
    'up', '${t}',
    'down', '${s}',
    'right', '${r}',
    'left', '${o}',
  )
}

mouse_move(dir) {
  global

  ;ignore auto press repeat of holding.
  If mouse.moveCount.get(dir)
    return

  if isCombo(dir) {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
    return
  }

  if !mouse.pressCount.get(dir) {
    mouse.pressCount.set(dir, 1)
    SetTimer(mouse_boostSpeed_timer.bind(dir), -300)
  } else
    mouse.pressCount.set(dir, 2)

  moveMove_switch(dir) ;no combo

  if KeyWait(mouse.keys.get(dir), 'T.1')
    mouse.boostSpeed := 0
  Else {
    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }
    
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
  }
}

mouse_boostSpeed_timer(dir) {
  global
  if mouse.pressCount.get(dir) == 2
    mouse.boostSpeed := 1
  mouse.pressCount.set(dir, 0)
}

mouse_moveCount_timer(dir) {
  global
  
  If GetKeyState(mouse.keys.get(dir), 'P') && (
    layer_ext
    || GetKeyState('${e}', 'P')
    ) {
    if mouse.moveCount.get(dir) != mouse.moveCount_total
      return
    
    multiplyMouseSpeed(mouse.boostSpeed) ;single/double clicks
    moveMove_switch(dir)

    return
  }

  if isCombo(dir)
    mouseMoveCountersDecrement(dir)
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set(dir, 0)
  SetTimer( , 0)
}

isCombo(dir) {
  for key, value in mouse.keys
    if key != dir && GetKeyState(value, 'p')
      return true
  return false
}

resetMouseSpeed() {
  global
  x := mouse_speed_lvl ? x_slow : x_default
  y := mouse_speed_lvl ? y_slow : y_default
}

toggleMouseSpeed() {
  global
  mouse_speed_lvl := !mouse_speed_lvl
  resetMouseSpeed()
}

multiplyMouseSpeed(boost) {
  global

  if x <= x_max {
    x *= boost ? x_doubleMultiply : x_defaultMultiply
    if x > x_max
      x := x_max
  }

  if y <= y_max {
    y *= boost ? y_doubleMultiply : y_defaultMultiply
    if y > y_max
      y := y_max
  }
}

mouseMoveCountersDecrement(dir) {
  global

  if mouse.moveCount.get(dir) != 1
  && mouse.moveCount.get(dir) != 2
    return

  mouse.moveCount_total--

  for key, value in mouse.moveCount
    if key != dir && value > mouse.moveCount.get(dir)
      mouse.moveCount.set(key, --value)
}

moveMove_switch(dir) {      
  vertical := dir == 'up' || dir == 'down'
  if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'), 'P')
    switch dir {
      case 'up', 'left': MouseMove(-x, -y,, 'R')
      case 'right': MouseMove(x, -y,, 'R')
      case 'down': MouseMove(-x, y,, 'R')
    }
  else if GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'), 'P')
    switch dir {
      case 'up': MouseMove(x, -y,, 'R')
      case 'right', 'down': MouseMove(x, y,, 'R')
      case 'left': MouseMove(-x, y,, 'R')
    }
  else
    switch dir {
      case 'up': MouseMove(0, -y,, 'R')
      case 'right': MouseMove(x, 0,, 'R')
      case 'down': MouseMove(0, y,, 'R')
      case 'left': MouseMove(-x, 0,, 'R')
    }
}
`}function pe(e,t,r){return`wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}
`+s(t)+s(r);function s(d){const a=c(d);return o(d,a)+l(d,a)}function o(d,a){return`
wheelScroll_${a}() {
  global

  if wheel.scrolling_${a}
    return

  If !wheel.pressCount_${a} {
    wheel.pressCount_${a} := 1
    SetTimer(wheel_${a}_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_${a} := 2

  SendInput '{Blind}{${G(d)}}'

  if KeyWait('${d}', 'T.2') 
    wheel.boostSpeed_${a} := 0
  Else{
    wheel.scrolling_${a} := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_${a} {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_${a} := 0
    }

    setTimer(wheel_${a}_scrolling_timer, wheelDelay)
  }   
}
`}function l(d,a){return`
wheel_${a}_scrolling_timer() {
  global
  if GetKeyState("${d}","P") && (layer_ext || GetKeyState("${e}","P"))
    SendInput '{Blind}{${G(d)}}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_${a} := 0
    setTimer( , 0)
  }
}

wheel_${a}_boostSpeed_timer() {
  global
  if wheel.pressCount_${a} = 2
    wheel.boostSpeed_${a} := 1
  wheel.pressCount_${a} := 0
}
`}function c(d){switch(d){case t:return"up";case r:return"down"}}function G(d){switch(d){case t:return"WheelUp";case r:return"WheelDown"}}}function fe(){return`; setBrightness(0)
; minimumBrightness := getCurrentBrightness()
; setBrightness(currentBrightness)

brightnessUp() {
  global
  brightness := (currentBrightness < 100 - brightnessJump)
    ? (currentBrightness += brightnessJump)
    : 100
  setBrightness(brightness)
}

brightnessDown() {
  global
  brightness := (currentBrightness > brightnessJump)
    ? (currentBrightness -= brightnessJump)
    : 0
  setBrightness(brightness)
}

getCurrentBrightness() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		current_brightness := property.CurrentBrightness
	return current_brightness
}

setBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}
`}const u=n.standard.map(e=>e==";"?"`;":e);let A,F,I,V,Y,W;const R=`${i.intro}
;config layers \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F
${i.switchers}


;extend layer \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}
#HotIf ${i.layer_condition.ext}
${D("extHtk")}#HotIf


;extend2 layer \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}
#HotIf ${i.layer_condition.ext2}
${D("ext2Htk")}#HotIf


;symbol layer \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}
#HotIf ${i.layer_condition.sym}
${me()}#HotIf


;symbol1 layer \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}
#HotIf ${i.layer_condition.sym1}
${ge()}#HotIf


;symbol2 layer \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}
#HotIf ${i.layer_condition.sym2}
${he()}#HotIf


;standard
ins::switchWindow()


;helper functions \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA
window_toggle := 0
switchWindow() {
  global
  window_toggle := !window_toggle
  SendInput( window_toggle ? "#^{left}" : "#^{right}")
}
${i.config}
${fe()}
${pe(i.extKey,Y,W)}
${ue(i.extKey,I,F,V,A)}`;function D(e){return n[e].reduce((t,r,s)=>{if(r==".")return t;switch(r){case"WheelUp":return t+`	*${Y=u[s]}::wheelScroll_up()
`;case"WheelDown":return t+`	*${W=u[s]}::wheelScroll_down()
`}switch(t+=`	${u[s]}::`,r){case"mouseU":t+="mouse_move('up')",I=u[s];break;case"mouseD":t+="mouse_move('down')",V=u[s];break;case"mouseL":t+="mouse_move('left')",A=u[s];break;case"mouseR":t+="mouse_move('right')",F=u[s];break;case"toggleMouseSpeed":case"brightnessUp":case"brightnessDown":t+=`${r}()`;break;case"Capslock":t+='SetCapsLockState(!GetKeyState("CapsLock","T"))';break;default:t+=r}return t+`
`},"")}function me(){return n.sym.reduce((e,t,r)=>t=="."?e:(e+=`	${u[r]}::`,e+=+t||"0`\\/=[]".includes(t)?t:P(t),e+`
`),"")}function he(){return n.sym2.reduce((e,t,r)=>t=="."?e:(e+=`	${u[r]}::`,e+=t.startsWith("F")||t.startsWith("^")?t:P(t),e+`
`),"")}function ge(){return n.symShift.reduce((e,t,r)=>t=="."?e:e+`	${u[r]}::${P(t)}
`,"")}function ye(e){switch(e){case"\u26A0\uFE0F":return"U+26a0}{U+fe0f";default:return`U+${e.codePointAt(0).toString(16)}`}}function P(e){return e<="~"?`SendText('${e}')`:`Send('{${ye(e)}}')`}function B(e){return new Promise(t=>setTimeout(t,e))}const U=document.createElement("div");U.id="ahkCtx";const J=document.createElement("ol");U.append(J);const _e=R.split(`
`).map(e=>{const t=document.createElement("li");return t.textContent=e,t});J.append(..._e);const b=document.createElement("button");b.id="copyBtn";b.textContent="copy";U.append(b);const g=document.createElement("span");b.prepend(g);let k;b.addEventListener("click",async()=>{await navigator.clipboard.writeText(R),!k&&(k=!0,g.textContent="copied \u2713",g.style.opacity=1,await B(1500),g.style.opacity=0,await B(500),g.textContent="",k=!1)},{once:!1});const z=document.createElement("main");document.body.append(z);const E=document.createElement("div");E.id="kbdCtx";E.append($,v);z.append(E,U);q(z);de();re();console.log("\u{1F4A1}\u{1F4A1}done\u{1F4A1}\u{1F4A1}");
