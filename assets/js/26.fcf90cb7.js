(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{240:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"page-frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$page.frontmatter.title))]),a._v(" "),e("p",[a._v(a._s(a.$page.frontmatter.abstract))]),a._v(" "),e("MetadataTable"),a._v(" "),e("h2",{attrs:{id:"language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[a._v("#")]),a._v(" Language")]),a._v(" "),e("Language"),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Tabular Data Package is a simple container format used for publishing and sharing tabular-style data. The format’s focus is on simplicity and ease of use, especially online. In addition, the format is focused on data that can be presented in a tabular structure and in making it easy to produce (and consume) tabular data packages from spreadsheets and relational databases.")]),a._v(" "),e("p",[a._v("The key features of this format are the following:")]),a._v(" "),e("ul",[e("li",[a._v("CSV (comma separated variables) for data files")]),a._v(" "),e("li",[a._v("Single JSON file (datapackage.json) to describe the dataset including a schema for data files")]),a._v(" "),e("li",[a._v("Reuse of existing work including other Frictionless Data specifications")])]),a._v(" "),e("p",[a._v("As suggested by the name, Tabular Data Package extends and specializes the "),e("router-link",{attrs:{to:"/data-package/"}},[a._v("Data Package")]),a._v(" spec for the specific case where the data is tabular.")],1),a._v(" "),e("h3",{attrs:{id:"why-csv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-csv"}},[a._v("#")]),a._v(" Why CSV")]),a._v(" "),e("p",[a._v("We chose CSV as the data format for the Tabular Data Package specification because:")]),a._v(" "),e("ol",[e("li",[a._v("CSV is very simple – it is possibly "),e("em",[a._v("the")]),a._v(" most simple data format")]),a._v(" "),e("li",[a._v("CSV is tabular-oriented. Most data structures are either tabular or can be transformed to a tabular structure by some form of normalization")]),a._v(" "),e("li",[a._v("It is open and the “standard” is well-known")]),a._v(" "),e("li",[a._v("It is widely supported - practically every spreadsheet program, relational database and programming language in existence can handle CSV in some form or other")]),a._v(" "),e("li",[a._v("It is text-based and therefore amenable to manipulation and access from a wide range of standard tools (including revision control systems such as git, mercurial and subversion)")]),a._v(" "),e("li",[a._v("It is line-oriented which means it can be incrementally processed - you do not need to read an entire file to extract a single row. For similar reasons it means that the format supports streaming.")])]),a._v(" "),e("p",[a._v("More informally:")]),a._v(" "),e("blockquote",[e("p",[a._v("CSV is the data Kalashnikov: not pretty, but many wars have been"),e("br"),a._v("\nfought with it and kids can use it."),e("br"),a._v("\n["),e("a",{attrs:{href:"https://twitter.com/pudo/status/248473299741446144",target:"_blank",rel:"noopener noreferrer"}},[a._v("@pudo"),e("OutboundLink")],1),a._v(" (Friedrich"),e("br"),a._v("\nLindenberg)]")])]),a._v(" "),e("blockquote",[e("p",[a._v("CSV is the ultimate simple, standard data format - streamable,"),e("br"),a._v("\ntext-based, no need for proprietary tools etc [@rufuspollock (Rufus"),e("br"),a._v("\nPollock)]")])]),a._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[a._v("#")]),a._v(" Specification")]),a._v(" "),e("p",[a._v("Tabular Data Package builds directly on the "),e("router-link",{attrs:{to:"/data-package/"}},[a._v("Data Package")]),a._v(" specification. Thus a Tabular Data Package "),e("code",[a._v("MUST")]),a._v(" be a Data Package and conform to the "),e("router-link",{attrs:{to:"/data-package/"}},[a._v("Data Package specification")]),a._v(".")],1),a._v(" "),e("p",[a._v("Tabular Data Package has the following requirements over and above those imposed by "),e("router-link",{attrs:{to:"/data-package/"}},[a._v("Data Package")]),a._v(":")],1),a._v(" "),e("ul",[e("li",[a._v("There "),e("code",[a._v("MUST")]),a._v(" be at least one "),e("code",[a._v("resource")]),a._v(" in the "),e("code",[a._v("resources")]),a._v(" "),e("code",[a._v("array")])]),a._v(" "),e("li",[a._v("There "),e("code",[a._v("MUST")]),a._v(" be a "),e("code",[a._v("profile")]),a._v(" property with the value "),e("code",[a._v("tabular-data-package")])]),a._v(" "),e("li",[a._v("Each "),e("code",[a._v("resource")]),a._v(" "),e("code",[a._v("MUST")]),a._v(" be a "),e("router-link",{attrs:{to:"/tabular-data-resource/"}},[a._v("Tabular Data Resource")])],1)]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("p",[a._v("Here’s an example of a minimal tabular data package:")]),a._v(" "),e("p",[a._v("On disk we have 2 files:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("data.csv\ndatapackage.json\n")])])]),e("p",[e("code",[a._v("data.csv")]),a._v(" looks like:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var1,var2,var3\nA,1,2.1\nB,3,4.5\n")])])]),e("p",[e("code",[a._v("datapackage.json")]),a._v(" looks like:")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"profile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tabular-data-package"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-dataset"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// here we list the data files in this dataset")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"resources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"profile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tabular-data-resource"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"schema"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"fields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"var1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"var2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"integer"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"var3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"number"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);