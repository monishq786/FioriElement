sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View1", {
        onInit() {
          let oModelProd = this.getOwnerComponent().getModel();
          oModelProd.read('/Products',{
            success : (oData) =>{
             let oModel = new sap.ui.model.json.JSONModel();
             oModel.setData(oData.results);
             this.getView().setModel(oModel,'ProdModel');
            },
            error : (oError) =>{

            }
          })
        }
    });
});