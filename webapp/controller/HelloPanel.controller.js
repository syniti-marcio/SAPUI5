sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMessage = oBundle.getText("helloMessage", [sRecipient]);

            // Show a native or vanilla JS alert
            alert(sMessage);

            // Show a message toast loading a default SAPUI5 module/component
            MessageToast.show(sMessage);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        },

        onCloseDialog: function () {
            this.getOwnerComponent().closeHelloDialog();
        }
    });
});