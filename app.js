function getData(){
    let div2=document.querySelector("#result");
    while(div2.firstChild)
    {
        div2.removeChild(div2.firstChild);
    }
    let endpoint="https://randomuser.me/api/";
    let btn=document.querySelector("#btn");
    let img=document.createElement("img");
    img.src="./loading-buffering.gif";
    btn.innerHTML="";
    btn.appendChild(img);
    fetch(endpoint).then((res)=>{
        if(res.status!==200){
            alert("Error connecting to the server.")
        }
        else{
            return res.json();
        }
    }).then((data)=>{
        let gen=data.results[0].gender;
        let fname=data.results[0].name["first"];
        let lname=data.results[0].name["last"];
        let mob=data.results[0].phone;
        let img2=document.createElement("img");
        img2.src=data.results[0].picture["large"];
        div2.appendChild(img2);
        let p1=document.createElement("p");
        p1.innerHTML=`Name: ${fname} ${lname}`;
        let p2=document.createElement("p");
        p2.innerHTML=`Gender: ${gen}`;
        let p3=document.createElement("p");
        p3.innerHTML=`Phone number: ${mob} `;
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(p3);
    }).catch((error)=>{
        alert(`Error connecting to the server.${error}`);
    }).finally(()=>{
        btn.innerHTML="Show Person";
    });
}