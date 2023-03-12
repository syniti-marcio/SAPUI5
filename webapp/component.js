sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data models
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());

            // create the views based on the URL/hash
            this.getRouter().initialize();
        },

        getContentDensityClass: function () {
            if (!this._sContentDensityClass) {
                // if the device doesn't support touch
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        },
        
        openHelloDialog: function () {
            this._helloDialog.open();
        },
        
        closeHelloDialog: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        }
    });
});