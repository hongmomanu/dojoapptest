//>>built
define("dojox/highlight/languages/pygments/html",["../../_base","./_html"],function(a){a=a.languages;var b=[],d=a.pygments._html.tags,c;for(c in d)b.push(c);b="\\b("+b.join("|")+")\\b";a.html={case_insensitive:!0,defaultMode:{contains:"name entity;comment;comment preproc;_script;_style;_tag".split(";")},modes:[{className:"comment",begin:"\x3c!--",end:"--\x3e"},{className:"comment preproc",begin:"\\\x3c\\!\\[CDATA\\[",end:"\\]\\]\\\x3e"},{className:"comment preproc",begin:"\\\x3c\\!",end:"\\\x3e"},
{className:"string",begin:"'",end:"'",illegal:"\\n",relevance:0},{className:"string",begin:'"',end:'"',illegal:"\\n",relevance:0},{className:"name entity",begin:"\\\x26[a-z]+;",end:"^"},{className:"name tag",begin:b,end:"^",relevance:5},{className:"name attribute",begin:"\\b[a-z0-9_\\:\\-]+\\s*\x3d",end:"^",relevance:0},{className:"_script",begin:"\\\x3cscript\\b",end:"\\\x3c/script\\\x3e",relevance:5},{className:"_style",begin:"\\\x3cstyle\\b",end:"\\\x3c/style\\\x3e",relevance:5},{className:"_tag",
begin:"\\\x3c(?!/)",end:"\\\x3e",contains:["name tag","name attribute","string","_value"]},{className:"_tag",begin:"\\\x3c/",end:"\\\x3e",contains:["name tag"]},{className:"_value",begin:"[^\\s\\\x3e]+",end:"^"}]};return a.html});
//# sourceMappingURL=html.js.uncompressed.js.map