/*! SearchPanes Fomantic UI styling 3.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-se', 'datatables.net-searchpanes'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-se')(root);
			}

			if (! window.DataTable.SearchPanes) {
				require('datatables.net-searchpanes')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

var Dom = DataTable.Dom;
var util = DataTable.util;

util.object.assignDeep(DataTable.SearchPane.classes, {
    buttonGroup: 'right floated ui buttons column',
    disabledButton: 'disabled',
    narrowSearch: 'dtsp-narrowSearch',
    narrowSub: 'dtsp-narrow',
    paneButton: 'basic ui',
    paneInputButton: 'circular search link icon',
    topRow: 'row dtsp-topRow'
});
util.object.assignDeep(DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll basic ui button',
    collapseAll: 'dtsp-collapseAll basic ui button',
    disabledButton: 'disabled',
    showAll: 'dtsp-showAll basic ui button'
});
// This override is required for the integrated search Icon in sematic ui
DataTable.SearchPane.prototype._searchContSetup = function () {
    Dom.c('i')
        .classAdd(this.classes.paneInputButton)
        .appendTo(this.dom.searchCont);
};


return DataTable;
}));
