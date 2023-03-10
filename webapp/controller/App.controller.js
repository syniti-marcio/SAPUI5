sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
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