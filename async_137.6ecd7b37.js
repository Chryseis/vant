(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{355:function(C,E,s){"use strict";s.r(E);var t={created:function(){this.content=unescape("%3Ch1%3ESearch%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Search%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Search%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-search%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Placeholder%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%27%3C/span%3E%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EListen%20to%20Events%3C/h3%3E%0A%3Cp%3E%3Ccode%3Esearch%3C/code%3E%20event%20will%20be%20triggered%20when%20click%20the%20search%20button%20on%20the%20keyboard.%3C/p%3E%0A%3Cp%3E%3Ccode%3Ecancel%3C/code%3E%20event%20will%20be%20triggered%20when%20click%20the%20cancel%20button.%3C/p%3E%0A%3Cp%3ETips%3A%20There%20will%20be%20a%20search%20button%20on%20the%20keyboard%20when%20Search%20is%20inside%20a%20form%20in%20iOS.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eform%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eaction%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22/%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-search%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Placeholder%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-action%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esearch%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSearch%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Ecancel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onCancel%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eform%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ECustom%20Button%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Eaction%3C/code%3E%20slot%20to%20custom%20right%20button%2C%20%3Ccode%3Ecancel%3C/code%3E%20event%20will%20no%20longer%20be%20triggered%20when%20use%20this%20slot%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-search%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-action%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshape%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22round%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esearch%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSearch%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22action%22%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSearch%22%3C/span%3E%26gt%3B%3C/span%3ESearch%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-search%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EProps%3C/h3%3E%0A%3Cp%3ESearch%20support%20all%20native%20properties%20of%20input%20tag%uFF0Csuch%20as%20%3Ccode%3Emaxlength%3C/code%3E%u3001%3Ccode%3Eplaceholder%3C/code%3E%u3001%3Ccode%3Eautofocus%3C/code%3E%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel%3C/td%3E%0A%3Ctd%3ESearch%20label%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshape%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eround%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Esquare%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebackground%3C/td%3E%0A%3Ctd%3EBackground%20color%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23f2f2f2%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-action%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20right%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20field%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereadonly%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20readonly%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20error%20info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einput-align%3C/td%3E%0A%3Ctd%3EInput%20text%20align%2C%20can%20be%20set%20to%20%3Ccode%3Ecenter%3C/code%3E%20%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3EEvents%3C/h3%3E%0A%3Cp%3ESearch%20support%20all%20native%20events%20of%20input%20tag%uFF0Csuch%20as%20%3Ccode%3Efocus%3C/code%3E%u3001%3Ccode%3Eblur%3C/code%3E%u3001%3Ccode%3Ekeypress%3C/code%3E%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20cancel%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esearch%3C/td%3E%0A%3Ctd%3ETriggered%20when%20confirm%20search%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclear%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20clear%20icon%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eaction%3C/td%3E%0A%3Ctd%3ECustom%20right%20button%2C%20displayed%20when%20%3Ccode%3EshowAction%3C/code%3E%20is%20true%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft-icon%3C/td%3E%0A%3Ctd%3ECustom%20left%20icon%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel%3C/td%3E%0A%3Ctd%3ECustom%20Search%20label%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")}},a=s(7),e=Object(a.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var C=this.$createElement;return(this._self._c||C)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);E.default=e.exports}}]);