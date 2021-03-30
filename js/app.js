'use strict';

// get form id:
let form = document.getElementById('form');
//////////////////////////////////////////////////////////////////////////////////
//check localstorage:
if(localStorage.getItem('article') === null){
  localStorage.setItem('article' , JSON.stringify([]));
}

// constructor:
function Article (articlename ,articletitel , articlesubject ,articlecontent,creationday ,numberoflikes ){
  this.articlename=articlename;
  this.articletitel=articletitel;
  this.articlesubject = articlesubject;
  this.articlecontent=articlecontent;
  this.creationday =creationday;
  this.numberoflikes =numberoflikes;
//   this.articleimg=`./img/${articleimg}.jpg`;
}
Article.all=[];

Article.prototype.getrandomnumber =function () {
  return Math.random() * (500 - 1) + 1;
};

// get data from the form
form.addEventListener('submit' , submithandel);
function submithandel(event){
  event.preventDefault();

  let articlename = event.target.name.value;
  let articletitel = event.target.titel.value;
  let articlesubject = event.target.subject.value;
  let articlecontent= event.target.textarea.value;
  let creationday= `${event.target.day.value}${event.target.month.value}${event.target.year.value}`;
  let numberoflikes=Article.all.getrandomnumber();
  console.log(numberoflikes);
  // let articleimg= event.ta..value;
  new Article (articlename ,articletitel ,articlesubject ,articlecontent ,creationday ,numberoflikes);
  // store data in local storge:
  localStorage.setItem('article' , JSON.stringify(Article.all));
}

//


