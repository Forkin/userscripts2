// ==UserScript==
// @name           Wikipedia : Grey Lady
// @namespace      http://gm.wesley.eti.br/wikipedia
// @author         w35l3y
// @email          w35l3y@brasnet.org
// @version        1.1.1
// @copyright      w35l3y 2008
// @license        GNU GPL
// @homepage       http://www.wesley.eti.br
// @include        http://*.wikibooks.tld/*
// @include        http://*.wikipedia.tld/*
// @include        http://*.wikimedia.tld/*
// @include        http://*.wikiquote.tld/*
// @include        http://*.wikisource.tld/*
// @include        http://*.wikiversity.tld/*
// @include        http://*.wiktionary.tld/*
// @grant          GM_addStyle
// @grant          GM.addStyle
// @grant          GM_getResourceText
// @grant          GM.getResourceText
// @icon           http://gm.wesley.eti.br/icon.php?desc=36274
// @resource       css http://userstyles.org/styles/1365.css?v=1
// @require        https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

/**************************************************************************

    Author's NOTE

    This script is an adaption of "Wikipedia - Grey Lady" made by chochem

    Based on http://userstyles.org/styles/1365 (by chochem)

***************************************************************************

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

**************************************************************************/

(async function () {
    await GM.addStyle(await GM.getResourceText('css'));
})();