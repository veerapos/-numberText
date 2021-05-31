function numberText(nString, webFlag) {
    // numberText.js
   
    // รูปแบบตัวเลข 0..9 และอื่น ๆ สำหรับพิมพ์ที่จอภาพ
       var n0Line1 = ' xxxxxx  '
       var n0Line2 = ' xx  xx  '
       var n0Line3 = ' xx  xx  '
       var n0Line4 = ' xx  xx  '
       var n0Line5 = ' xxxxxx  '
   
       var n1Line1 = ' xxx  '
       var n1Line2 = '  xx  '
       var n1Line3 = '  xx  '
       var n1Line4 = '  xx  '
       var n1Line5 = '  xx  '
   
       var n2Line1 = ' xxxxxx  '
       var n2Line2 = '     xx  '
       var n2Line3 = '  xxx    '
       var n2Line4 = ' xx      '
       var n2Line5 = ' xxxxxx  '
   
       var n3Line1 = ' xxxxxx  '
       var n3Line2 = '     xx  '
       var n3Line3 = '  xxxxx  '
       var n3Line4 = '     xx  '
       var n3Line5 = ' xxxxxx  '
   
       var n4Line1 = ' xx  xx  '
       var n4Line2 = ' xx  xx  '
       var n4Line3 = ' xxxxxx  '
       var n4Line4 = '     xx  '
       var n4Line5 = '     xx  '
   
       var n5Line1 = ' xxxxxx  '
       var n5Line2 = ' xx      '
       var n5Line3 = ' xxxxxx  '
       var n5Line4 = '     xx  '
       var n5Line5 = ' xxxxxx  '
   
       var n6Line1 = ' xxxxxx  '
       var n6Line2 = ' xx      '
       var n6Line3 = ' xxxxxx  '
       var n6Line4 = ' xx  xx  '
       var n6Line5 = ' xxxxxx  '
   
       var n7Line1 = ' xxxxxx  '
       var n7Line2 = '     xx  '
       var n7Line3 = '     xx  '
       var n7Line4 = '     xx  '
       var n7Line5 = '     xx  '
   
       var n8Line1 = ' xxxxxx  '
       var n8Line2 = ' xx  xx  '
       var n8Line3 = ' xxxxxx  '
       var n8Line4 = ' xx  xx  ' 
       var n8Line5 = ' xxxxxx  '
   
       var n9Line1 = ' xxxxxx  '
       var n9Line2 = ' xx  xx  '
       var n9Line3 = ' xxxxxx  '
       var n9Line4 = '     xx  '
       var n9Line5 = ' xxxxxx  '
   
       var colonLine1 = '   xx    '
       var colonLine2 = '   xx    '
       var colonLine3 = '         '
       var colonLine4 = '   xx    '
       var colonLine5 = '   xx    '

       var periodLine1 = '         '
       var periodLine2 = '         '
       var periodLine3 = '         '
       var periodLine4 = '   xx    '
       var periodLine5 = '   xx    '

       var nbLine1 = '   '
       var nbLine2 = '   '
       var nbLine3 = '   '
       var nbLine4 = '   '
       var nbLine5 = '   '
   
       var i = 0
       var line1 = ''
       var line2 = ''
       var line3 = ''
       var line4 = ''
       var line5 = ''
   
       // สร้างรูปแบบตัวเลขแต่ละบรรทัด (1..5)
       for (i = 0; i < nString.length; i++) {
     
           if (nString[i]=='0') {
               line1 += n0Line1;
               line2 += n0Line2;
               line3 += n0Line3;
               line4 += n0Line4;
               line5 += n0Line5;
           }
           else if (nString[i]=='1') {
               line1 += n1Line1;
               line2 += n1Line2;
               line3 += n1Line3;
               line4 += n1Line4;
               line5 += n1Line5;
           }
           else if (nString[i]=='2') {
               line1 += n2Line1;
               line2 += n2Line2;
               line3 += n2Line3;
               line4 += n2Line4;
               line5 += n2Line5;
           }
           else if (nString[i]=='3') {
               line1 += n3Line1;
               line2 += n3Line2;
               line3 += n3Line3;
               line4 += n3Line4;
               line5 += n3Line5;
           }
           else if (nString[i]=='4') {
               line1 += n4Line1;
               line2 += n4Line2;
               line3 += n4Line3;
               line4 += n4Line4;
               line5 += n4Line5;
           }
           else if (nString[i]=='5') {
               line1 += n5Line1;
               line2 += n5Line2;
               line3 += n5Line3;
               line4 += n5Line4;
               line5 += n5Line5;
           }
           else if (nString[i]=='6') {
               line1 += n6Line1;
               line2 += n6Line2;
               line3 += n6Line3;
               line4 += n6Line4;
               line5 += n6Line5;
           }
           else if (nString[i]=='7') {
               line1 += n7Line1;
               line2 += n7Line2;
               line3 += n7Line3;
               line4 += n7Line4;
               line5 += n7Line5;
           }
           else if (nString[i]=='8') {
               line1 += n8Line1;
               line2 += n8Line2;
               line3 += n8Line3;
               line4 += n8Line4;
               line5 += n8Line5;
           }
           else if (nString[i]=='9') {
               line1 += n9Line1;
               line2 += n9Line2;
               line3 += n9Line3;
               line4 += n9Line4;
               line5 += n9Line5;
           }
           else if (nString[i]==' ') {
               line1 += nbLine1;
               line2 += nbLine2;
               line3 += nbLine3;
               line4 += nbLine4;
               line5 += nbLine5;
           }
           else if (nString[i]==':') {
               line1 += colonLine1;
               line2 += colonLine2;
               line3 += colonLine3;
               line4 += colonLine4;
               line5 += colonLine5;
           }
           else if (nString[i]=='.') {
               line1 += periodLine1;
               line2 += periodLine2;
               line3 += periodLine3;
               line4 += periodLine4;
               line5 += periodLine5;
           }        
       }

       if (webFlag){
           return line1.replace(/ /g,'&nbsp; ') + '<br>' +
                  line2.replace(/ /g,'&nbsp; ') + '<br>' +
                  line3.replace(/ /g,'&nbsp; ') + '<br>' +
                  line4.replace(/ /g,'&nbsp; ') + '<br>' +
                  line5.replace(/ /g,'&nbsp; ') + '<br>' 
       }
       else{
            return line1 + '\n' +
                   line2 + '\n' +
                   line3 + '\n' +
                   line4 + '\n' +
                   line5 + '\n' 
       }
}


function numberPad(n){
    let webFlag = true

    /* รับค่า event OnClick จากหน้า webpage 0..9 = Clear */
    let eqFlag = !(document.getElementById("nTextBig").innerHTML === "");

    if(n === "Clear") {
        document.getElementById("nText").innerHTML = "";
        document.getElementById("nTextBig").innerHTML = "";
        eqFlag = false;
    }
    
    else if(n === "=" && !eqFlag) {
        if(document.getElementById("nText").innerHTML !== ""){
            document.getElementById("nTextBig").innerHTML = 
            numberText(document.getElementById("nText").innerHTML, webFlag);

            eqFlag = true;
        }
    }
    
    else if(!eqFlag) {
        document.getElementById("nText").innerHTML += n;
    }
}
   