<html>
<head>
<style type="text/css">
body
{
background-image:url("14.jpg");
background-size:100%;
}
#mymenu
{
background-Color:rgba(0,0,0,0.5);
Color:white;
font-size:25px;
text-align:left;
font-family:Bradley Hand ITC;
}
#mymenu ul li
{
text-decoration:underline;
display:inline-block;
padding:15px;
}
#mymenu ul li:hover
{
	background-Color:green;
	display:inline-block;
padding:15px;

}

table
{
    font-family:Bradley Hand ITC;
margin-top:100px;
background-Color:rgba(0,0,0,0.5);
Color:white;
margin-left:100px;
Font-size:25px;
}
.t2
{

border-radius:10px;
}
.B
{
background-Color:black;
Color:white;
border-radius:20px 0px 20px 0px;
Font-size:20px;
padding:12px;
border-color:white;
}
.B:hover
{
background-Color:white;
Color:black;
border-color:black;
border-radius:0px 20px 0px 20px;
font-size:20px;
padding:12px;
}

        </style>
        <script type="text/javascript">
            
        function demo(a)
{
var n=a.value.length;
if(n<=4)
{
	document.getElementById("i1").innerHTML='weak';
	document.getElementById("i1").style.color="red";
}
if(n>4 && n<=6)
{
	document.getElementById("i1").innerHTML='good';
	document.getElementById("i1").style.color="yellow";
}
if(n>6 && n<=8)
{
	document.getElementById("i1").innerHTML='strong';
	document.getElementById("i1").style.color="green";
}

	
}
        </script>
            
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
        <div id="mymenu">
<ul>
<li><a href="home.html"><font Color="white">Home</font></a></li>
<li><a href="about.html"><font Color="white">About</font></a></li>
<li><a href="contact.html"><font Color="white">Contact</font></a></li>
<li><a href="Regisvali.html"><font Color="white">Registration</font></a></li>
<li><a href="loginvali.html"><font Color="white">Login</font></a></li>
</ul>
</div>
<div id="data9">

<form action="RegisterValid">
<table cellpadding="20px">
    <tr>
    
        <th colspan="4"><font size="6"><u><b>Registration &nbsp;&nbsp;Form</b></u></font></th>


</tr>

<tr>
<td>Enter Roll no.</td>
<td><input type="text" class="t2" placeholder="Roll no." name="u1" id="p1"></td>
</tr>

<tr>
<td>Enter Name</td>
<td><input type="text" class="t2" placeholder="Name" name="u2" id="p2"></td>
</tr>

<tr>
<td>Enter Password</td>
<td><input type="password" class="t2" placeholder="Password" name="u3" id="p3" onkeydown="demo(this)" onblur="demo(this)"><span class="ps" id="i1"></span></td>
</tr>

<tr>
<td>Confirm Password</td>
<td><input type="password" class="t2" placeholder="Password" name="u4" id="p4"></td>
</tr>

<tr>
<td>Enter E-mail Id</td>
<td><input type="text" class="t2" placeholder="E-mail Id" name="u5" id="p5"></td>
</tr>

<tr>
<td>Enter Contact</td>
<td><input type="text" class="t2" placeholder="Contact" name="u6" id="p6"></td>
</tr>

<tr align="center">
<th colspan="4"><input type="submit" class="B" value="Register">
</th>
</tr>

</table>
</form>
</div>
</body>
</html>
