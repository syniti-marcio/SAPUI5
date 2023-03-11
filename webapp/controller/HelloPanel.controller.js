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
            var oView = this.getView();

            // create the dialog lazily
            if (!this.byId("helloDialog")) {
                // load XML fragment asynchronously
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.helloDialog",
                    controller: this
                }).then(function (oDialog) {
                    // connect dialog to the rootView of this component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            // if the dialog already exists
            } else {
                // just open it
                this.byId("helloDialog").open();
            }
        },

        onCloseDialog: function() {
            this.byId("helloDialog").close();
        }
    });
});