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


function display1(){
   $("#btn-position").html(`
   <div id="btn-totalQty" class="row text-center">
   <div>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(7)">7</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(8)">8</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(9)">9</button>
   </div>
   <div>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(4)" >4</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(5)">5</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(6)">6</button>
   </div>
   <div>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(1)">1</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(2)">2</button>
       <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(3)">3</button>
   </div>
   <div>
   <button class="btn m-2 px-3 fs-4 btn-primary" onclick="digit(0)">0</button>   
    </div>
 </div>

   `)
}

function display2(){
    $("#btn-position").html(`
    <div id="btn-totalQty" class="row text-center">
    <div>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(7)">7</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(8)">8</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(9)">9</button>
    </div>
    <div>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(4)" >4</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(5)">5</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(6)">6</button>
    </div>
    <div>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(1)">1</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(2)">2</button>
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(3)">3</button>
    </div>
    <div>
    
        <button class="btn m-2 px-3 fs-4 btn-primary" onclick="insertNumber(0)">0</button>    
    </div>
  </div>
 
    `)
 }

    function digit(number){
        let existingNumber = $("#totalQty").val();
        $("#totalQty").val(existingNumber + number);     
    }

    function insertNumber(value){
        let existingNumber = $("#ctnPerPcs").val();
        $("#ctnPerPcs").val(existingNumber + value); 
        
    }
 
