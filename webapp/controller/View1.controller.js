sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View1", {
        
        onInit() {
            this.getProductData();
        },

        getProductData: function () {

            let oModelProd = this.getOwnerComponent().getModel();
            oModelProd.read('/Products', {
                success: (oData) => {
                    let oModel = new JSONModel();
                    oModel.setData(oData.results);
                    this.getView().setModel(oModel, 'ProdModel');
                },
                error: (oError) => {
                  sap.m.MessageToast("Fetching Error",oError);
                }
            })
            
        }
    });
});