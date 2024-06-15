function m_to_km()
{
    x=document.getElementById("mile");
    y=document.getElementById("km");
    xm=parseInt(x.value);
    y.value=xm*1.60944;
}
function f_to_inch()
{
    x=document.getElementById("feet");
    y=document.getElementById("inch");
    xm=parseFloat(x.value);
    y.value=xm*12;
}
function m_to_cm()
{
    x=document.getElementById("meter");
    y=document.getElementById("cm");
    xm=parseFloat(x.value);
    y.value=xm*100;
}
function c_to_f()
{
    x=document.getElementById("Celsius");
    y=document.getElementById("Fahrenheit");
    xm=parseFloat(x.value);
    y.value=(xm*9/5)+32;
}
function f_to_c()
{
    x=document.getElementById("c");
    y=document.getElementById("f");
    xm=parseFloat(x.value);
    y.value=(xm-32)*(5/9);
}