'use strict';
//salim
var left_img=document.getElementById('img1');
var center_img=document.getElementById('img2');
var right_img=document.getElementById('img3');
var rList = document.getElementById('listR');
var img1index =0;
var img2index=0;
var img3index=0;
var chartClick=[];
var chartView=[];
var Arrname=[];

var button = document.createElement('button');

        button.innerHTML='Show Rsselt';

        

        button.addEventListener('click',showR);

       function showR(){
        
        var litems ;

        for(var i =0;i<Products.prototype.imgarray.length;i++){
            chartClick[i]=Products.prototype.imgarray[i].click;
            Arrname[i]+=' View '+Products.prototype.imgarray[i].time_shown+' time';
      
          }
      
            

        for(var i = 0; i<Products.prototype.imgarray.length;i++)
        {
           litems=document.createElement('li');
           litems.textContent=Products.prototype.imgarray[i].pname+' show '+Products.prototype.imgarray[i].time_shown+
           ' and click  '+Products.prototype.imgarray[i].click; 
           rList.appendChild(litems);
             
        }
        var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: Arrname,
        datasets: [{
            label: 'Number of clicks',
            backgroundColor: '#393e46',
            borderColor: '#393e46',
            data: chartClick
        }]
    },

    // Configuration options go here
    options: {}
});


 var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: Arrname,
        datasets: [{
            label: 'Number of clicks',
            backgroundColor: '#393e46',
            borderColor: '#393e46',
            data: chartClick
        }]
    },

    // Configuration options go here
    options: {}
});

    };


var maxAttempts = 25;
var AttemptsCounter = 0;


function Products(name,Sorcel){
this.pname=name;
 this .sorcelink =Sorcel;
 this. time_shown=0;
 this.click=0;
Products.prototype.imgarray.push(this);
Arrname.push(name);
}
Products.prototype.imgarray=[];
new Products('bag','img/bag.jpg');
new Products('banana','img/banana.jpg');
new Products('bathroom','img/bathroom.jpg');
new Products('boots','img/boots.jpg');
new Products('breakfast','img/breakfast.jpg');
new Products('bubbblegum','img/bubblegum.jpg');
new Products('chair','img/chair.jpg');
new Products('cthulhu','img/cthulhu.jpg');
new Products('dog-duck','img/dog-duck.jpg');
new Products('dragon','img/dragon.jpg');
new Products('pen','img/pen.jpg');
new Products('pet-sweep','img/pet-sweep.jpg');
new Products('scissors','img/scissors.jpg');
new Products('shark','img/shark.jpg');
//console.log(Products.prototype.imgarray);

getIndexRandom();

left_img.addEventListener('click',userclick);
center_img.addEventListener('click',userclick);
right_img.addEventListener('click',userclick);

function userclick(event){
AttemptsCounter++;

if(AttemptsCounter<=maxAttempts){
 if(event.target.id === 'img1'){
     Products.prototype.imgarray[img1index].click++;
 }
 else if(event.target.id === 'img2'){
    Products.prototype.imgarray[img2index].click++;
 }
 else{
    Products.prototype.imgarray[img3index].click++;
 }
 getIndexRandom();

}
else{
    //show resselt
    rList.appendChild(button);
    left_img.removeEventListener('click',userclick);
    center_img.removeEventListener('click',userclick);
    right_img.removeEventListener('click',userclick);

}


}



function getIndexRandom(){
    var image1,image2,image3; 
    
    image1=img1index;image2=img2index;image3=img3index; 
   do{
        img1index=getrandom();
        

            do{
                img2index=getrandom();
                img3index=getrandom();
            }while(img1index ===img2index || img1index===img3index||img3index===img2index );
           

            
    }while(image1===img1index||image1===img2index||image1===img3index||
        image2===img1index||image2===img2index||image2===img3index ||
        image3===img1index||image3===img2index||image3===img3index);
    Products.prototype.imgarray[img1index].time_shown++;
    Products.prototype.imgarray[img2index].time_shown++;
    Products.prototype.imgarray[img3index].time_shown++;
    console.log(img1index,img2index,img3index);
    console.log(Products.prototype.imgarray[0].sorcelink);
    left_img.src=Products.prototype.imgarray[img1index].sorcelink;
    center_img.src=Products.prototype.imgarray[img2index].sorcelink;
    right_img.src=Products.prototype.imgarray[img3index].sorcelink;
};

function getrandom(){
var Rnumber =Math.floor(Math.random() *(Products.prototype.imgarray.length))

return Rnumber;
}

