// JavaScript Document
(function() {
    //// Creates a new plugin class and a custom listbox
    //tinymce.create('tinymce.plugins.dws_tabs', {
    //    init: function(editor) {
    //        editor.addButton('buttonnnn', {
    //            title: 'Tabs',
    //            onclick: function() {
    //                tb_show('Tab builder', '../wp-content/plugins/dw-shortcodes-bootstrap/assets/js/plugins/tabs.html?TB_iframe=1');
    //            }
    //        })
    //    },
    //    createControl: function(n, cm) {
    //        switch (n) {
    //            case 'dws_tabs':
    //            var c = cm.createButton('dws_tabs', {
    //                title : 'Tabs',
    //                onclick : function() {
    //                    tb_show('Tab builder', '../wp-content/plugins/dw-shortcodes-bootstrap/assets/js/plugins/tabs.html?TB_iframe=1');
    //                }
    //            });
    //
    //
    //            // Return the new splitbutton instance
    //            return c;
    //
    //        }
    //        return null;
    //    }
    //});
    //tinymce.PluginManager.add('dws_tabs', tinymce.plugins.dws_tabs);



    tinymce.PluginManager.add('dws_tabs', function( editor, url ) {
        editor.addButton( 'dws_tabs', {
            title : 'Tabs',
            icon: 'mce_dws_tabs',
            onclick: function() {
                tb_show('Tab builder', SiteParameters.this_plugin_url + '/assets/js/plugins/tabs.html?TB_iframe=1');
                //tb_show('Tab builder', '/wp-content/plugins/dw-shortcodes-bootstrap/assets/js/plugins/tabs.html?TB_iframe=1');
            }
        });
    });




})();