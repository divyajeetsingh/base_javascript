<html>
<head>
<title>This is a javascript project  </title>



<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">


</head>
<body>




<div class="w3-container w3-red">
  <h2 id="google"></h2>
  <p id="demo"></p>
</div>

</body>
<script>
var google = ["diyajeet","singh","is ","here"];
var len =google.length;
var text;
for(i=0;i<len;i++){
text + = "<li>" + google[i] + "</li>";


}
document.getElementById("demo").innerHTML = text;
</script>

</html>