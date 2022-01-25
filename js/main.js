var numArray = []


function themSo(){
    var num = Number(document.getElementById("inPut1").value)
    numArray.push(num)
    document.getElementById("txtThemSo").innerHTML = "Mảng Số : " +" [ " + numArray + " ]"
}
function toTalSoDuong(){
    var toTal = 0
    for (var i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0){
            toTal +=  numArray[i]
        }
    }
    document.getElementById("txtToTalSoDuong").innerHTML = "Tổng Số Dương Là : " + toTal
}

function demSoDuong(){
    var soDuong = 0
  for (var i = 0; i < numArray.length; i++) {
      if(numArray[i] > 0){
          soDuong++
      }
  }
  document.getElementById("txtDemSoDuong").innerHTML = "Số Dương Có Là : " + soDuong + " Số "
}
function demSoAm(){
    var soAm = 0
    for(var i = 0; i < numArray.length;i++){
        if(numArray[i] < 0){
            soAm++
        }
    }
    document.getElementById("txtDemSoAm").innerHTML = "Số Dương Có Là : " + soAm + " Số "
}

function soNhoNhat(){
    
    var min = numArray[0]
    for (var i = 0 ; i < numArray.length;i++) {
        if(min > numArray[i]){
            min = numArray[i]
        }
        
    }
    document.getElementById("txtSoNhoNhat").innerHTML = "Số Nhỏ Nhất Là : " +min
}
function soChanCuoiCung(){
    var count = 0 
    for (var i = 0 ; i < numArray.length;i++){
        if(numArray[i] % 2 ==0){
            
            count = numArray[i]
            
            
        }
        
    }
    document.getElementById("txtSoChanCuoiCung").innerHTML = "Số Chẵn Cuối Cùng : " +count
        
    
}
function sapXepTD(){
    for(var i = 0 ; i < numArray.length;i++){
        for(var j = 0;j < numArray.length;j++){
            if(numArray[j] > numArray[j + 1]){
                var temp = numArray[j]
                numArray[j] = numArray[j + 1]
               numArray[j + 1] = temp
            }
        }
    }
    document.getElementById("txtSapXepTD").innerHTML = "Sắp Xếp Tăng Dần : " + "[ " +numArray + " ] "
}

