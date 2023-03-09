sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (JSONModel, ResourceModel, Controller, MessageToast) {
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

            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello: function () {
            // read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMessage = oBundle.getText("helloMessage", [sRecipient]);

            // Show a native or vanilla JS alert
            alert(sMessage);

            // Show a message toast loading a default SAPUI5 module/component
            MessageToast.show(sMessage);
        }
    });
})