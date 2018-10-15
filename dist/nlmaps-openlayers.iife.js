!function(e){"use strict";function t(e){throw e}function o(e,t){return Object.assign({},e,t)}function n(e){switch(e.type){case"wmts":e.url=e.url+"/"+e.type+"/"+e.layerName+"/"+e.crs+"/{z}/{x}/{y}."+e.format;break;case"tms":e.url=e.url+"/"+e.layerName+"/{z}/{x}/{y}."+e.format;break;default:e.url=e.url+"/"+e.type+"/"+e.layerName+"/"+e.crs+"/{z}/{x}/{y}."+e.format}return e}function r(e){var o=e.url.indexOf("{");if(o>-1){var n=e.url.indexOf("}");"workspacename"===e.url.slice(o+1,n).toLowerCase()?e.url=e.url.slice(0,o)+e.workSpaceName+e.url.slice(n+1,-1):t("only workspacename templates are supported for now")}return e}function a(e){return new Promise(function(t,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&t(JSON.parse(n.responseText))},n.open("GET",e,!0),n.send(null)})}function s(e){if(!e.includes("POINT"))throw TypeError("Provided WKT geometry is not a point.");var t=e.split("(")[1].split(")")[0];return{type:"Point",coordinates:[parseFloat(t.split(" ")[0]),parseFloat(t.split(" ")[1])]}}function l(e,t){t.forEach(function(t){e.classList.add(t)})}function i(e){if(e in m.BASEMAP_PROVIDERS){var t=m.BASEMAP_PROVIDERS[e];return t.deprecated&&console&&console.warn&&console.warn(e+" is a deprecated style; it will be redirected to its replacement. For performance improvements, please change your reference."),t}console.error("NL Maps error: You asked for a style which does not exist! Available styles: "+Object.keys(PROVIDERS).join(", "))}function c(){var e=i(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"standaard");if(e.subdomains){var t=e.subdomains;e.url=e.url.replace("{s}","{"+t.slice(0,1)+"-"+t.slice(-1)+"}")}if("object"===("undefined"==typeof ol?"undefined":g(ol)))return new ol.layer.Tile({source:new ol.source.XYZ({url:e.url,attributions:[new ol.Attribution({html:e.attribution})]})});throw"openlayers is not defined"}function u(e,t){function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,o=t.getView().getZoom(),n=new ol.View({center:ol.proj.fromLonLat([e.coords.longitude,e.coords.latitude]),zoom:o});t.setView(n)}var n=document.createElement("div");return n.className="nlmaps-geolocator-control ol-control",n.addEventListener("click",function(){e.start()}),e.on("position",function(e){o(e,t)}),new ol.control.Control({element:n})}var d={version:.2,basemaps:{defaults:{crs:"EPSG:3857",attribution:"Kaartgegevens &copy; <a href='https://www.kadaster.nl'>Kadaster</a> |             <a href='https://www.verbeterdekaart.nl'>Verbeter de kaart</a>",minZoom:6,maxZoom:19,type:"wmts",format:"png",url:"https://geodata.nationaalgeoregister.nl/tiles/service"},layers:[{name:"standaard",layerName:"brtachtergrondkaart"},{name:"grijs",layerName:"brtachtergrondkaartgrijs"},{name:"pastel",layerName:"brtachtergrondkaartpastel"},{name:"luchtfoto",layerName:"2016_ortho25",url:"https://geodata.nationaalgeoregister.nl/luchtfoto/rgb",format:"jpeg"}]},wms:{defaults:{url:"https://geodata.nationaalgeoregister.nl/{workSpaceName}/wms?",version:"1.1.1",transparent:!0,format:"image/png",minZoom:0,maxZoom:24},layers:[{name:"gebouwen",workSpaceName:"bag",layerName:"pand"},{name:"percelen",workSpaceName:"bkadastralekaartv3ag",layerName:"kadastralekaart"},{name:"drone-no-fly-zones",workSpaceName:"dronenoflyzones",layerName:"luchtvaartgebieden,landingsite"},{name:"hoogte",workSpaceName:"ahn2",layerName:"ahn2_05m_int",styleName:"ahn2:ahn2_05m_detail"},{name:"gemeenten",workSpaceName:"bestuurlijkegrenzen",layerName:"gemeenten",styleName:"bestuurlijkegrenzen:bestuurlijkegrenzen_gemeentegrenzen"},{name:"provincies",workSpaceName:"bestuurlijkegrenzen",layerName:"provincies",styleName:"bestuurlijkegrenzen:bestuurlijkegrenzen_provinciegrenzen"}]},geocoder:{suggestUrl:"https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?",lookupUrl:"https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?",placeholder:"Zoomen naar adres ..."},map:{style:"standaard",center:{latitude:52.093249,longitude:5.111994},zoom:8,attribution:!0,extent:[-180,-90,180,90],zoomposition:"topright"},marker:{url:"./assets/img/marker_icon.svg",iconSize:[64,64],iconAnchor:[63,32]},classnames:{geocoderContainer:["nlmaps-geocoder-control-container"],geocoderSearch:["nlmaps-geocoder-control-search"],geocoderButton:["nlmaps-geocoder-control-button"],geocoderResultList:["nlmaps-geocoder-result-list"],geocoderResultItem:["nlmaps-geocoder-result-item"],geocoderResultSelected:["nlmaps-geocoder-result-selected"]}},m={};m.BASE_DEFAULTS={crs:"EPSG:3857",attr:"",minZoom:0,maxZoom:19,type:"wmts",format:"png",url:""},m.WMS_DEFAULTS={url:"",version:"1.1.1",transparent:!0,format:"image/png",minZoom:0,maxZoom:24,styleName:""},m.BASEMAP_PROVIDERS={},m.WMS_PROVIDERS={},m.GEOCODER={},m.MAP={zoomposition:"bottomleft"},m.MARKER={},m.CLASSNAMES={geocoderContainer:["nlmaps-geocoder-control-container"],geocoderSearch:["nlmaps-geocoder-control-search"],geocoderButton:["nlmaps-geocoder-control-button"],geocoderResultList:["nlmaps-geocoder-result-list"],geocoderResultItem:["nlmaps-geocoder-result-item"]},.2!==d.version&&t("unsupported config version"),void 0!==d.featureQuery&&function(e){m.FEATUREQUERYBASEURL=e}(d.featureQuery.baseUrl),void 0!==d.map&&function(e){m.MAP=o(m.MAP,e)}(d.map),function(e){var r=o(m.BASE_DEFAULTS,e.defaults);(!e.layers||e.layers.length<0)&&t("no basemap defined, please define a basemap in the configuration"),e.layers.forEach(function(e){e.name&&void 0===m.BASEMAP_PROVIDERS[e.name]||t("basemap names need to be defined and unique: "+e.name),m.BASEMAP_PROVIDERS[e.name]=n(o(r,e))})}(d.basemaps),void 0!==d.wms&&function(e){var n=o(m.WMS_DEFAULTS,e.defaults);e.layers&&e.layers.forEach(function(e){e.name&&void 0===m.WMS_PROVIDERS[e.name]||t("wms names need to be defined and unique: "+e.name),m.WMS_PROVIDERS[e.name]=r(o(n,e))})}(d.wms),void 0!==d.geocoder&&function(e){m.GEOCODER.lookupUrl=e.lookupUrl,m.GEOCODER.suggestUrl=e.suggestUrl,m.GEOCODER.placeholder=e.placeholder}(d.geocoder),void 0!==d.marker&&function(e){m.MARKER=e}(d.marker),void 0!==d.classnames&&function(e){m.CLASSNAMES=o(m.CLASSNAMES,e)}(d.classnames);var p=m.GEOCODER;p.resultList=[],p.selectedResult=-1,p.doSuggestRequest=function(e){return a(this.suggestUrl+"q="+encodeURIComponent(e))},p.doLookupRequest=function(e){return a(this.lookupUrl+"id="+encodeURIComponent(e)).then(function(e){var t=e.response.docs[0];return t.centroide_ll=s(t.centroide_ll),t.centroide_rd=s(t.centroide_rd),t})},p.createControl=function(e,t,o){var n=this;this.zoomTo=e,this.map=t,this.nlmaps=o;var r=document.createElement("div"),a=document.createElement("form"),s=document.createElement("input"),i=document.createElement("button"),c=document.createElement("div");return l(r,m.CLASSNAMES.geocoderContainer),l(a,m.CLASSNAMES.geocoderSearch),r.addEventListener("click",function(e){return e.stopPropagation()}),r.addEventListener("dblclick",function(e){return e.stopPropagation()}),s.id="nlmaps-geocoder-control-input",s.placeholder=p.placeholder,s.setAttribute("aria-label",p.placeholder),s.setAttribute("type","text"),s.setAttribute("autocapitalize","off"),s.setAttribute("autocomplete","off"),s.setAttribute("autocorrect","off"),s.setAttribute("spellcheck","false"),s.addEventListener("keydown",function(e){var t=n.resultList;n.resultList.length>0&&("ArrowDown"!==e.code&&40!==e.keyCode||(n.selectedResult<n.resultList.length-1&&n.selectedResult++,n.showLookupResult(t[n.selectedResult])),"ArrowUp"!==e.code&&38!==e.keyCode||(n.selectedResult>0&&n.selectedResult--,n.showLookupResult(t[n.selectedResult])),"Escape"===e.code&&n.clearSuggestResults(!0))}),s.addEventListener("input",function(e){n.suggest(e.target.value)}),s.addEventListener("focus",function(e){n.suggest(e.target.value)}),i.setAttribute("type","submit"),a.addEventListener("submit",function(e){e.preventDefault(),n.resultList.length>0&&n.lookup(n.resultList[n.selectedResult<0?0:n.selectedResult].id)}),i.setAttribute("aria-label",p.placeholder),l(i,m.CLASSNAMES.geocoderButton),c.id="nlmaps-geocoder-control-results",l(c,m.CLASSNAMES.geocoderResultList),c.classList.add("nlmaps-hidden"),r.appendChild(a),a.appendChild(s),a.appendChild(i),r.appendChild(c),r},p.suggest=function(e){var t=this;if(e.length<3)return void this.clearSuggestResults();this.doSuggestRequest(e).then(function(e){t.resultList=e.response.docs,t.showSuggestResults(t.resultList)})},p.lookup=function(e){var t=this;this.doLookupRequest(e).then(function(e){t.zoomTo(e.centroide_ll,t.map),t.nlmaps.emit("search-select",{location:e.weergavenaam,latlng:e.centroide_ll,resultObject:e}),t.showLookupResult(e),t.clearSuggestResults()})},p.clearSuggestResults=function(e){this.selectedResult=-1,e&&(document.getElementById("nlmaps-geocoder-control-input").value=""),document.getElementById("nlmaps-geocoder-control-results").innerHTML="",document.getElementById("nlmaps-geocoder-control-results").classList.add("nlmaps-hidden")},p.showLookupResult=function(e){var t=document.getElementsByClassName(m.CLASSNAMES.geocoderResultItem);Array.prototype.map.call(t,function(e){return e.classList.remove(m.CLASSNAMES.geocoderResultSelected)});var o=document.getElementById(e.id);o&&o.classList.add(m.CLASSNAMES.geocoderResultSelected),document.getElementById("nlmaps-geocoder-control-input").value=e.weergavenaam},p.showSuggestResults=function(e){var t=this;if(this.clearSuggestResults(),e.length>0){var o=document.createElement("ul");e.forEach(function(e){var n=document.createElement("li"),r=document.createElement("a");r.innerHTML=e.weergavenaam,r.id=e.id,l(r,m.CLASSNAMES.geocoderResultItem),r.setAttribute("href","#"),r.addEventListener("click",function(e){e.preventDefault(),t.lookup(e.target.id)}),n.appendChild(r),o.appendChild(n)}),document.getElementById("nlmaps-geocoder-control-results").classList.remove("nlmaps-hidden"),document.getElementById("nlmaps-geocoder-control-results").appendChild(o)}};var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.bgLayer=c,e.geoLocatorControl=u}(this.window=this.window||{});
//# sourceMappingURL=nlmaps-openlayers.iife.js.map
