(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";var r=`:host{\r
    --wb-loading-size:32px;\r
    --wb-loading-color:#fff;\r
    --wb-loading-border-width:2px;\r
    --wb-full-screen-bg: rgba(0, 0, 0, .6);\r
    --wb-layer-bg: rgba(0, 0, 0, .8);\r
}\r
:host .full-screen{\r
    width: 100vw;\r
    height: 100vh;\r
    background: var(--wb-full-screen-bg);\r
}\r
:host .wb-layer {\r
    padding: calc(20px - var(--wb-loading-border-width) - 2px );\r
    border-radius: 8px;\r
    background-color: var(--wb-layer-bg);\r
    transition: all .3s;\r
}\r
\r
:host .wb-loading{\r
    position: relative;\r
    box-sizing: border-box\r
}\r
\r
:host .wb-loading {\r
    width: 100%;\r
    height: 100%;\r
    display: block;\r
    font-size: 0;\r
    color: var(--wb-loading-color);\r
}\r
\r
:host .wb-loading > div {\r
    display: inline-block;\r
    float: none;\r
    background-color: var(--wb-loading-color);\r
    border: 0 solid var(--wb-loading-color);\r
}\r
\r
:host .la-ball-clip-rotate {\r
    width: var(--wb-loading-size);\r
    height: var(--wb-loading-size);\r
}\r
\r
:host .wb-loading > div {\r
    width: 32px;\r
    height: 32px;\r
    background: 0 0;\r
    border-width: var(--wb-loading-border-width);\r
    border-bottom-color: transparent;\r
    border-radius: 100%;\r
    animation: ball-clip-rotate .75s linear infinite\r
}\r
\r
@keyframes ball-clip-rotate {\r
    0% {\r
        -webkit-transform: rotate(0deg);\r
        -moz-transform: rotate(0deg);\r
        -o-transform: rotate(0deg);\r
        transform: rotate(0deg)\r
    }\r
\r
    50% {\r
        -webkit-transform: rotate(180deg);\r
        -moz-transform: rotate(180deg);\r
        -o-transform: rotate(180deg);\r
        transform: rotate(180deg)\r
    }\r
\r
    100% {\r
        -webkit-transform: rotate(360deg);\r
        -moz-transform: rotate(360deg);\r
        -o-transform: rotate(360deg);\r
        transform: rotate(360deg)\r
    }\r
}\r
`});
