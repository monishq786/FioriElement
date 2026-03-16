sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsv2.controller.View1", {
        onInit() {
            this.getProductData();
        },

        getProductData: function () {

            let oModelProd = this.getOwnerComponent().getModel();
            sap.ui.core.BusyIndicator.show(0)
            oModelProd.read('/Products', {
                urlParameters: {
                    //"$expand": "Order_Details"
                    "$orderby":"UnitPrice"
                },
                success: (oData) => {
                    sap.ui.core.BusyIndicator.hide()
                    let oModel = new JSONModel();
                    oModel.setData(oData.results);
                    this.getView().setModel(oModel, 'ProdModel');
                },
                error: (oError) => {
                    sap.ui.core.BusyIndicator.hide()
                }
            })



            // let aEmp = {
            //     "Name": "Monish",
            //     "Country": "India"
            // }

            // let oModel = new JSONModel();
            // oModel.setData(aEmp);
            // ///Property Binding
            // this.getView().setModel(oModel, "empModel");
            // this.byId('idProp').bindProperty('text', 'empModel>/Name')

            // /// Element Binding
            // this.byId('idElement').bindElement('empModel>/');

        }
    });
});