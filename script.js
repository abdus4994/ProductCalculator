function calculation(){
    let totalQty = $("#totalQty").val();
    let ctnPerPcs = $("#ctnPerPcs").val();
    let carton = $("#carton");
    let pcs = $("#pcs");

    let pcsValue = totalQty%ctnPerPcs;
    let vale = (totalQty-pcsValue)/ctnPerPcs;
    carton.text(vale);        
    pcs.text(pcsValue);
};

function reset(){
    let totalQty = $("#totalQty").val(" ");
    let ctnPerPcs = $("#ctnPerPcs").val(" ");
    let carton = $("#carton").text("0");
    let pcs = $("#pcs").text("0");
    
   
};
