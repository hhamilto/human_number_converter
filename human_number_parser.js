function mparseInt(snum){
    console.log(1);
    snum = $.trim(snum);
    var tokens = snum.split(/[\s-]+/);
    // with a 'z' because we are so very street, yo.
    var holdz = [];
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i].replace(/-/,'').toLowerCase();
        var hold = null;
        if(token == 'zero' || token == ''){
            hold = {op:'=', val: 0};
        }else if(token == 'one'){
            hold = {op:'=', val: 1};
        }else if(token == 'two'){
            hold = {op:'=', val: 2};
        }else if(token == 'three'){
            hold = {op:'=', val: 3};
        }else if(token == 'four'){
            hold = {op:'=', val: 4};
        }else if(token == 'five'){
            hold = {op:'=', val: 5};
        }else if(token == 'six'){
            hold = {op:'=', val: 6};
        }else if(token == 'seven'){
            hold = {op:'=', val: 7};
        }else if(token == 'eight'){
            hold = {op:'=', val: 8};
        }else if(token == 'nine'){
            hold = {op:'=', val: 9};
        }else if(token == 'ten'){
            hold = {op: '=', val: 10};
        }else if(token == 'eleven'){
            hold = {op: '=', val: 11};
        }else if(token == 'twelve'){
            hold = {op: '=', val: 12};
        }else if(token == 'thirteen'){
            hold = {op: '=', val: 13};
        }else if(token == 'fourteen'){
            hold = {op: '=', val: 14};
        }else if(token == 'fifteen'){
            hold = {op: '=', val: 15};
        }else if(token == 'sixteen'){
            hold = {op: '=', val: 16};
        }else if(token == 'seventeen'){
            hold = {op: '=', val: 17};
        }else if(token == 'eighteen'){
            hold = {op: '=', val: 18};
        }else if(token == 'nineteen'){
            hold = {op: '=', val: 19};
        }else if(/\btwenty/.test(token)){
            hold = {op: '+', val: 20}
        }else if(/\bthirty/.test(token)){
            hold = {op: '+', val: 30};
        }else if(/\bfourty/.test(token)){
            hold = {op: '+', val: 40};
        }else if(/\bfifty/.test(token)){
            hold = {op: '+', val: 50};
        }else if(/\bsixty/.test(token)){
            hold = {op: '+', val: 60};
        }else if(/\bseventy/.test(token)){
            hold = {op: '+', val: 70};
        }else if(/\beighty/.test(token)){
            hold = {op: '+', val: 80};
        }else if(/\bnintey/.test(token)){
            hold = {op: '+', val: 90};
        }else if(/\bhundred/.test(token)){
            hold = {op: '*', val: 100};
        }else if(/\bthousand/.test(token)){
            hold = {op: '*', val: 1000};
        }else if(/\bmillion/.test(token)){
            hold = {op: '*', val: 1000000};
        }else if(/\bbillion/.test(token)){
            hold = {op: '*', val: 1000000000};
        }else if(/\btrillion/.test(token)){
            hold = {op: '*', val: 1000000000000};
        }else if(/\bquadrillion/.test(token)){
            hold = {op: '*', val: 1000000000000000};
        }else if(/\bquintillion/.test(token)){
            hold = {op: '*', val: 1000000000000000000};
        }
        if(hold != null){
            holdz.push(hold);
        }
    }
    console.log(holdz);
    var holds = [];
    var sum = 0;
    for(var i = 0; i < holdz.length; i++){
        // add in consecutive equals checking
        if(holdz[i].op == '+'){
            sum+= holdz[i].val;
        }else if(holdz[i].op == '='){
            sum+= holdz[i].val;
            holds.push({op: '=', val: sum});
            sum = 0;
        }else if(holdz[i].op == '*'){
            if(sum!=0) alert('fuck');
            holds.push(holdz[i]);
        }
    }
    console.log(holds);
    
    //upgrade: fuck 100s. do them a better way
    var holdz = [];
    for(var i = 0; i < holds.length; i++){
        if(holds[i].op == '=' && holds[i+1] != undefined && holds[i+1].op == '*' && holds[i+1].val == '100'){
            if(holds[i+2]!=undefined && holds[i+2].op == '='){
                console.log(i);
                holdz.push({op: '=', val: (holds[i].val * 100 + holds[i+2].val)});
                i+=2;
            }else{
                console.log(i);
                holdz.push({op: '=', val: (holds[i].val * 100 )});     
                i++;
            }
        }else{
            console.log(i);
            holdz.push(holds[i]);
        }
    }
    console.log(holdz);
            
    var multiplier = 1;
    for(var i = holdz.length - 1; i >= 0; i--){
        if(holds[i].op == '*'){
            multiplier *= holdz[i].val;
        }else if(holds[i].op == '='){
            sum += multiplier * holdz[i].val;
            multiplier = 1;
        }
    }
    return sum;
}
 
alert(mparseInt("five hundred sixty three trillion three hundred and three billion one hundred seventy six million three thousand and seventy nine").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
