function myFunction() {
  var h1 = document.getElementById("holding1");
  var h2 = document.getElementById("holding2");
  var h3 = document.getElementById("holding3");
  var h4 = document.getElementById("holding4");
  var h5 = document.getElementById("holding5");
  var h6 = document.getElementById("holding6");
  var h7 = document.getElementById("holding7");
  var h8 = document.getElementById("holding8");
  var h9 = document.getElementById("holding9");
  var h10 = document.getElementById("holding10");
  var h11 = document.getElementById("holding11");
  var h12 = document.getElementById("holding12");
  var h13 = document.getElementById("holding13");
  var h14 = document.getElementById("holding14");
  var t1 = document.getElementById("ticker1");
  var t2 = document.getElementById("ticker2");
  var t3 = document.getElementById("ticker3");
  var t4 = document.getElementById("ticker4");
  var t5 = document.getElementById("ticker5");
  var t6 = document.getElementById("ticker6");
  var t7 = document.getElementById("ticker7");
  var t8 = document.getElementById("ticker8");
  var t9 = document.getElementById("ticker9");
  var t10 = document.getElementById("ticker10");
  var t11 = document.getElementById("ticker11");
  var t12 = document.getElementById("ticker12");
  var t13 = document.getElementById("ticker13");
  var t14 = document.getElementById("ticker14");
  var mh1 = document.getElementById("mapholding1");
  var mh2 = document.getElementById("mapholding2");
  var mh3 = document.getElementById("mapholding3");
  var mh4 = document.getElementById("mapholding4");
  var mh5 = document.getElementById("mapholding5");
  var mh6 = document.getElementById("mapholding6");
  var mh7 = document.getElementById("mapholding7");
  var mh8 = document.getElementById("mapholding8");
  var mh9 = document.getElementById("mapholding9");
  var mh10 = document.getElementById("mapholding10");
  var mh11 = document.getElementById("mapholding11");
  var mh12 = document.getElementById("mapholding12");
  var mh13 = document.getElementById("mapholding13");
  var mh14 = document.getElementById("mapholding14");


  if (h2.style.display === "none") {
    h2.style.display = "block";
    var newest = "2";
  } 

  else if (h3.style.display === "none") {
    h3.style.display = "block";
    var newest = "3";
  }

  else if (h4.style.display === "none") {
    h4.style.display = "block";
    var newest = "4";
  }

  else if (h5.style.display === "none") {
    h5.style.display = "block";
    var newest = "5";
  }

  else if (h6.style.display === "none") {
    h6.style.display = "block";
    var newest = "6";
  }

  else if (h7.style.display === "none") {
    h7.style.display = "block";
    var newest = "7";
  }

  else if (h8.style.display === "none") {
    h8.style.display = "block";
    var newest = "8";
  }

  else if (h9.style.display === "none") {
    h9.style.display = "block";
    var newest = "9";
  }

  else if (h10.style.display === "none") {
    h10.style.display = "block";
    var newest = "10";
  }

  else if (h11.style.display === "none") {
    h11.style.display = "block";
    var newest = "11";
  }

  else if (h12.style.display === "none") {
    h12.style.display = "block";
    var newest = "12";
  }

  else if (h13.style.display === "none") {
    h13.style.display = "block";
    var newest = "13";
  }

  else if (h14.style.display === "none") {
    h14.style.display = "block";
    var newest = "14";
  }

  else{
    window.alert("You may not add any more holdings, the maximum is 14.")
  }
}
function create() {
  var h1 = document.getElementById("holding1");
  var h2 = document.getElementById("holding2");
  var h3 = document.getElementById("holding3");
  var h4 = document.getElementById("holding4");
  var h5 = document.getElementById("holding5");
  var h6 = document.getElementById("holding6");
  var h7 = document.getElementById("holding7");
  var h8 = document.getElementById("holding8");
  var h9 = document.getElementById("holding9");
  var h10 = document.getElementById("holding10");
  var h11 = document.getElementById("holding11");
  var h12 = document.getElementById("holding12");
  var h13 = document.getElementById("holding13");
  var h14 = document.getElementById("holding14");
  var t1 = document.getElementById("ticker1").value;
  var t2 = document.getElementById("ticker2").value;
  var t3 = document.getElementById("ticker3").value;
  var t4 = document.getElementById("ticker4").value;
  var t5 = document.getElementById("ticker5").value;
  var t6 = document.getElementById("ticker6").value;
  var t7 = document.getElementById("ticker7").value;
  var t8 = document.getElementById("ticker8").value;
  var t9 = document.getElementById("ticker9").value;
  var t10 = document.getElementById("ticker10").value;
  var t11 = document.getElementById("ticker11").value;
  var t12 = document.getElementById("ticker12").value;
  var t13 = document.getElementById("ticker13").value;
  var t14 = document.getElementById("ticker14").value;
  var c1 = document.getElementById("change1").value;
  var c2 = document.getElementById("change2").value;
  var c3 = document.getElementById("change3").value;
  var c4 = document.getElementById("change4").value;
  var c5 = document.getElementById("change5").value;
  var c6 = document.getElementById("change6").value;
  var c7 = document.getElementById("change7").value;
  var c8 = document.getElementById("change8").value;
  var c9 = document.getElementById("change9").value;
  var c10 = document.getElementById("change10").value;
  var c11 = document.getElementById("change11").value;
  var c12 = document.getElementById("change12").value;
  var c13 = document.getElementById("change13").value;
  var c14 = document.getElementById("change14").value;
  



 
  
  localStorage.setItem("t1",t1);
  localStorage.setItem("t2",t2);
  localStorage.setItem("t3",t3);
  localStorage.setItem("t4",t4);
  localStorage.setItem("t5",t5);
  localStorage.setItem("t6",t6);
  localStorage.setItem("t7",t7);
  localStorage.setItem("t8",t8);
  localStorage.setItem("t9",t9);
  localStorage.setItem("t10",t10);
  localStorage.setItem("t11",t11);
  localStorage.setItem("t12",t12);
  localStorage.setItem("t13",t13);
  localStorage.setItem("t14",t14);

  localStorage.setItem("c1",c1);
  localStorage.setItem("c2",c2);
  localStorage.setItem("c3",c3);
  localStorage.setItem("c4",c4);
  localStorage.setItem("c5",c5);
  localStorage.setItem("c6",c6);
  localStorage.setItem("c7",c7);
  localStorage.setItem("c8",c8);
  localStorage.setItem("c9",c9);
  localStorage.setItem("c10",c10);
  localStorage.setItem("c11",c11);
  localStorage.setItem("c12",c12);
  localStorage.setItem("c13",c13);
  localStorage.setItem("c14",c14);
  window.open("heatmap.html");


}







