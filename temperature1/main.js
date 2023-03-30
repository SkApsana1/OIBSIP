function converter()
            {
                var op=document.querySelector("#option");
                var res=document.querySelector(".value");
                var ip=document.querySelector(".t").value;
                if(op.value=="fahrenheit")
                {
                    var c=(ip-32)*(5/9)
                    res.innerHTML=c+"°C"
                }
                if(op.value=="celsius")
                {
                    var f=ip*9/5+32
                    res.innerHTML=f+"°F"
                }
            }
            function clearForm()
            {
                document.getElementById('degree').value='';
            }
