/*! semantic ui integration 2.1.2 2.1.2 for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['2.3.5'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('2.3.5')(root);
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



(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['2.3.5'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('2.3.5')(root);
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


$.extend(true, DataTable.SearchPane.classes, {
    buttonGroup: 'right floated ui buttons column',
    disabledButton: 'disabled',
    narrowSearch: 'dtsp-narrowSearch',
    narrowSub: 'dtsp-narrow',
    paneButton: 'basic ui',
    paneInputButton: 'circular search link icon',
    topRow: 'row dtsp-topRow'
});
$.extend(true, DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll basic ui button',
    collapseAll: 'dtsp-collapseAll basic ui button',
    disabledButton: 'disabled',
    showAll: 'dtsp-showAll basic ui button'
});
// This override is required for the integrated search Icon in sematic ui
DataTable.SearchPane.prototype._searchContSetup = function () {
    $('<i class="' + this.classes.paneInputButton + '"></i>').appendTo(this.dom.searchCont);
};


return DataTable;
}));


return DataTable;
}));
