"use strict";
var mime = require('./lib/mime_types');
var application = require("application");
// var getContext = function () {
//     if (application.android.context) {
//         return (application.android.context);
//     }
//     var ctx = java.lang.Class.forName("android.app.AppGlobals").getMethod("getInitialApplication", null).invoke(null, null);
//     if (ctx) return ctx;

//     ctx = java.lang.Class.forName("android.app.ActivityThread").getMethod("currentApplication", null).invoke(null, null);
//     return ctx;
// };

var openFile = function (FilePath) {
    try {
        var file_type = mime.getMIMEType(FilePath);
        if (FilePath === false) {
            console.log('File Format Not Available');
        } else {
            var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
            intent.setDataAndType(android.net.Uri.fromFile(new java.io.File(FilePath)), file_type);
            application.android.currentContext.startActivity(android.content.Intent.createChooser(intent, "Open File..."));
        }

    } catch (e) {
        console.log(e);
    }
};
module.exports = openFile;