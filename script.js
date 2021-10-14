function f(){
    var input= document.getElementById('searchbox')
    // console.log('input',input)
    var filter= input.value.toUpperCase()
    var ul= document.getElementById('ul')
    var li= ul.getElementsByTagName('li')
    // console.log('filter',filter)
    // console.log('ul',ul)
    // console.log('li',li)

    for (i=0;i<li.length;i++){
        var a=li[i].getElementsByTagName('a')[0]
        // console.log('a value',a)
        var txtvalue= a.textContent || a.innerText
        // console.log(txtvalue)
        // console.log('mudit',txtvalue.toUpperCase().indexOf(filter))
        if(txtvalue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}
