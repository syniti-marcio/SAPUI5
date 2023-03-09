sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (JSONModel, Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function () {
            // set the data model on the view
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function () {
            // Show a native or vanilla JS alert
            alert("Hello there!");
            // Show a message toast loading a default SAPUI5 module/component
            MessageToast.show("Hello there!");
        }
    });
})