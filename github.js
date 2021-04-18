function github(){
    const username=document.getElementById("uname").value;
    const url='https://api.github.com/users/'+username+'/repos';
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then(data=>{
        table=document.createElement("TABLE");
        table.border="1";
        table.width="500";
        table.align="center"

        row=table.insertRow(-1)
        cell1=row.insertCell(-1)
        cell2=row.insertCell(-1)
        cell3=row.insertCell(-1)

        cell1.innerHTML="S_NO."
        cell2.innerHTML="Repository"
        cell3.innerHTML="Description"

          data.forEach((ele)=>{
          row1=table.insertRow(-1)
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)

          cell1.innerHTML=data.indexOf(ele)+1
          cell2.innerHTML=ele.name
          cell3.innerHTML=ele.description 
          })
        var div=document.getElementById("data");
        div.append(table); 
    })
    }