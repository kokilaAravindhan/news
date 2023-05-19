var h1=document.createElement("h1");
h1 .innerHTML="News Details";
h1.style.textAlign="center";
h1.style.marginTop="30px";
h1.style.color="red"
h1.style.border="dotted"

var linebr=document.createElement("br");

var div1=document.createElement("div");
div1.setAttribute("class","row")
div1.style.margin="20px";
div1.style.textAlign="center";
div1.style.color="blue"

var row=document.createElement("div");
row.setAttribute("class","row");

var col1=document.createElement("div");
col1.setAttribute("class","col-sm-6");

var p1=document.createElement("p");
p1.innerHTML="Category Based on News";

var col2=document.createElement("div");
col2.setAttribute("class","col-sm-6");

var inputCategory=document.createElement("input");
inputCategory.setAttribute("type","text");
inputCategory.style.width="30%";
inputCategory.id="inputCategory"
inputCategory.placeholder="eg: science/technology/environment.."

var hr=document.createElement("hr");

var div2=document.createElement("div");
div2.setAttribute("class","row")
div2.style.margin="20px";
div2.style.textAlign="center";

var col3=document.createElement("div");
col3.setAttribute("class","col-sm-12");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginTop="10px"
button.addEventListener("click",bar);

col3.append(button,hr);
div2.append(col3);
col2.append(inputCategory);
col1.append(p1);
div1.append(row,col1,col2);
document.body.append(h1,linebr,div1,div2);



async function bar(){

    let inptext=document.getElementById("inputCategory").value;
    
    let url=`https://inshorts.deta.dev/news?category=${inptext}`;
    //console.log(url);
    let res=await fetch(url);
    console.log("res "+res);
   
    let res1= await res.json();
    console.log("res1 "+res1.data);
   
    for(var i in res1.data){

    var row1=document.createElement("div");
    row1.setAttribute("class","row");
    row1.style.marginLeft="30%";
    row1.style.textAlign="center";

    var row13=document.createElement("div");
    row13.setAttribute("class","row");
    //row13.style.marginTop="40px";
    //row13.style.textAlign="center";
    

    var col3=document.createElement("div");
    col3.setAttribute("class","col-sm-12");
    //col3.style.marginTop="40px";
    //col3.style.textAlign="center";

    var div3=document.createElement("div");
    div3.setAttribute("class","card")
    div3.style.width="30rem"
  
    //div3.style.marginTop="40px";
    //div3.style.textAlign="center";
       
     var img=document.createElement("img");
     img.setAttribute("class","card-img-top");
     img.src=res1.data[i].imageUrl;

     var div4=document.createElement("div");
     div4.setAttribute("class","card-body");
     
     
     var p=document.createElement("p");
     p.setAttribute("class","card-text");
     p.innerHTML=res1.data[i].content;

     var p1=document.createElement("p");
     p1.setAttribute("class","card-text")
     p1.innerHTML="<b>Author </b>"+res1.data[i].author+"<br><b>Date</b> "+res1.data[i].date;
    
    var linebr=document.createElement("br");

    div4.append(p,p1);
    div3.append(img,div4);
    col3.append(div3);
    row13.append(col3);
    row1.append(row13)
    document.body.append(row1,linebr);
    }

}