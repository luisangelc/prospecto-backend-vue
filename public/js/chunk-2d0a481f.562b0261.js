(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a481f"],{"0779":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row no-gutter"},[o("div",{staticClass:"col-md-1 d-none d-md-flex"}),o("div",{staticClass:"col-md-10 bg-light"},[o("div",{staticClass:"login d-flex py-1"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 mx-auto"},[o("h3",{staticClass:"display-4"},[e._v("Cliente")]),o("p",{staticClass:"text-muted mb-4"},[e._v("Captura de datos")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.agregarCliente()}}},[o("div",{staticClass:"row"},[o("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:e.mensaje.color},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[e._v(" "+e._s(e.mensaje.texto)+" ")]),o("div",{staticClass:"col-md-6 bg-light"},[o("float-label",{staticClass:"form-group mt-4 input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.nombre,expression:"cliente.nombre"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4",attrs:{type:"text",placeholder:"Nombre(s) *",required:"",autofocus:"",maxlength:"60"},domProps:{value:e.cliente.nombre},on:{input:function(t){t.target.composing||e.$set(e.cliente,"nombre",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.primerApellido,expression:"cliente.primerApellido"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4",attrs:{type:"text",placeholder:"Primer Apellido *",required:"",autofocus:"",maxlength:"60"},domProps:{value:e.cliente.primerApellido},on:{input:function(t){t.target.composing||e.$set(e.cliente,"primerApellido",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.segundoApellido,expression:"cliente.segundoApellido"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4",attrs:{type:"text",placeholder:"Segundo Apellido",autofocus:"",maxlength:"60"},domProps:{value:e.cliente.segundoApellido},on:{input:function(t){t.target.composing||e.$set(e.cliente,"segundoApellido",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.calle,expression:"cliente.calle"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4",attrs:{type:"text",placeholder:"Calle *",required:"",autofocus:"",maxlength:"200"},domProps:{value:e.cliente.calle},on:{input:function(t){t.target.composing||e.$set(e.cliente,"calle",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.numero,expression:"cliente.numero"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 mt-3",attrs:{type:"text",placeholder:"Número *",required:"",autofocus:"",maxlength:"15"},domProps:{value:e.cliente.numero},on:{input:function(t){t.target.composing||e.$set(e.cliente,"numero",t.target.value)}}})])],1),o("div",{staticClass:"col-md-6 bg-light"},[o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.colonia,expression:"cliente.colonia"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 mt-3",attrs:{type:"text",placeholder:"Colonia *",required:"",autofocus:"",maxlength:"150"},domProps:{value:e.cliente.colonia},on:{input:function(t){t.target.composing||e.$set(e.cliente,"colonia",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.codigoPostal,expression:"cliente.codigoPostal"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 mt-3",attrs:{type:"text",placeholder:"Código Postal *",required:"",autofocus:"",maxlength:"10"},domProps:{value:e.cliente.codigoPostal},on:{input:function(t){t.target.composing||e.$set(e.cliente,"codigoPostal",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.telefono,expression:"cliente.telefono"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 mt-3",attrs:{type:"tel",placeholder:"Teléfono *",required:"",autofocus:"",maxlength:"20"},domProps:{value:e.cliente.telefono},on:{input:function(t){t.target.composing||e.$set(e.cliente,"telefono",t.target.value)}}})]),o("float-label",{staticClass:"form-group mt-4 field"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.rfc,expression:"cliente.rfc"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 mt-3 field",attrs:{type:"text",placeholder:"RFC *",required:"",autofocus:"",maxlength:"13"},domProps:{value:e.cliente.rfc},on:{input:function(t){t.target.composing||e.$set(e.cliente,"rfc",t.target.value)}}})]),e._m(0)],1)],1),o("button",{staticClass:"btn btn-primary btn-md text-uppercase m-4 pl-4 pr-4 rounded-pill shadow-sm float-right",attrs:{type:"submit"},on:{click:function(t){return e.accionItemMenu({ocultarInicio:!0})}}},[e._v("Enviar")])])])])])])]),o("div",{staticClass:"col-md-1 d-none d-md-flex"})])])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group mb-3"},[o("label",{attrs:{for:"exampleFormControlFile1"}},[e._v("Agregar Documento")]),o("input",{staticClass:"form-control-file",attrs:{type:"file",id:"exampleFormControlFile1"}})])}],s=o("5530"),a=o("a18c"),n=o("2f62"),r={data:function(){return{cliente:{nombre:"",primerApellido:"",segundoApellido:"",calle:"",numero:"",colonia:"",codigoPostal:"",telefono:"",rfc:""},dismissSecs:5,dismissCountDown:0,mensaje:{color:"",texto:""},clientes:[]}},computed:{},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["accionItemMenu"])),{},{countDownChanged:function(e){this.dismissCountDown=e},fnShowAlert:function(e){this.dismissCountDown=this.dismissSecs,this.mensaje.color=e.color,this.mensaje.texto=e.texto,this.showAlert()},agregarCliente:function(){var e=this;this.axios.post("/nuevo-cliente",this.cliente).then((function(t){e.clientes.push(t.data),e.ocultarInicio=!0,e.limpiar(),a["a"].push("/")})).catch((function(t){var o="Ocurrió un error interno de servidor";t.response.data.error.errors.nombre.message&&(e.mensaje.texto=t.response.data.error.errors.nombre.message),e.fnShowAlert({color:"danger",texto:o})}))},limpiar:function(){this.cliente.nombre="",this.cliente.primerApellido="",this.cliente.segundoApellido="",this.cliente.segundoApellido="",this.cliente.calle="",this.cliente.numero="",this.cliente.colonia="",this.cliente.codigoPostal="",this.cliente.telefono="",this.cliente.rfc=""}})},c=r,d=o("2877"),m=Object(d["a"])(c,l,i,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a481f.562b0261.js.map