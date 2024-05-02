let spanEl = document.querySelectorAll("#text span");
       let expectedWord
       let typedCharacters = '';
       let typeStart = document.getElementById("type-start")

      alert("Before you start, ensure that you switch the typing language to Arabic. Use appropriate spacing between letters and words. Failure to do so may result in one error.")

      let ChapterHead = document.querySelector("#chaptersHeading").innerHTML
       
     changeChapter(ChapterHead)
 
 
       window.addEventListener("keypress", changeBC);
       
       function changeBC(event) {
           let keyPressed = event.key;
           typedCharacters += keyPressed;
           let isCorrect = expectedWord.startsWith(typedCharacters);

           let wrongCharecter = 0
           
           // removing the starting message whan typing started
           typeStart.classList.add("divRemove")
                    
           // Iterate over each span element
           for (let i = 0; i < spanEl.length; i++) {
            
               if (i < typedCharacters.length) {
                   // Check if the typed character matches the expected character at this position
                   if (typedCharacters[i] === expectedWord[i]) {
                       spanEl[i].style.color = "rgb(173, 230, 196)"; // Correctly typed character
                        
                       btnCorrect(keyPressed)
                     
                   } else {
                       spanEl[i].style.color = "rgb(228, 80, 80)"; // Incorrectly typed character
                        
                       btnWrong(keyPressed)
                       wrongCharecter++
                        
                   }
                    
               } else {
                   // Reset color to black for any remaining characters
                   spanEl[i].style.color = "black";
                   
               }
               
           }
           if(expectedWord.length < typedCharacters.length+2){
           
           // result section 
             $("#result").addClass("result-container")

             setTimeout(()=>{
                $("h1.mistake-count").text(wrongCharecter)
             },2000)
             
           }
            

       }
       
       
       

       

       // changing the button background by pressing the keyboard
       function btnCorrect(key){
          var activeBtn =document.querySelector("." + key)
          activeBtn.style.backgroundColor ="green"

          setTimeout(function(){
            activeBtn.style.backgroundColor ="white"
          },150)  
       }

       function btnWrong(key){
        let activeBtn = document.querySelector("." + key)
        activeBtn.style.backgroundColor = "red"

        setTimeout(function(){
            activeBtn.style.backgroundColor ="white"
          },150) 

       }


       // changing the chapter content based on the lev
       function changeChapter(chapterNumber){
        
           switch (chapterNumber) {
               case "Chapter1":
                   expectedWord  = 'ا ا ل ا ا ا ل ا ل ا ل ا ل ا ا ل ا ل ا ل ا ا ا ل ل ل ا ا ل ل ا ا ا ا ل ل ا ا ل ا'
               break;
               
               case "Chapter2":
                   expectedWord = 'ب ت ب ت ت ت ت ب ب ب ت ت ب ب ت ت ب ت ت ت ب ب ب ب ت ب ت ب ت ب'
                   
               break;
               
               case "Chapter3":
                  expectedWord ='ا ل ب ت ت ب ت ا ل ا ل ب ا ب ا ت ب ب ت ا ل ت ب ت ب ل ا ل ل ب ت ت ا  '
               break;

               case "Chapter4":
                  expectedWord='ن ي ن ي ن ن ي ن ن ي ي ي ي ن ن ي ن ي ي ن ن ي ي ن ن ي ي ن ن ي ن ي'
               break;

               case "Chapter5":
                  expectedWord='يتبا بلان نبتا بانت بيلت باني تابن يلبا يتنب بانل اتنب نبلت يتاب بنتا ابتاي بيلت باني'
               break;

               case "Chapter6":
                  expectedWord='م س م س م م س س س م م م س م س س س م م س س س م م س س م س م م س س س م م م م س س م م م س'
               break;

               case "Chapter7":
                  expectedWord='ك ش ك ش ش ش ك ك ك ك ش ش ك ش ش ك ش ك ك ك ش ش ش ك ش ش ك ش ك ك ك ش ش ش ش ك ش'
               break;

               case "Chapter8":
                  expectedWord ='ط ش ط ط ط ش ش ش ط ط ط ش ش ط ط ش ش ط ط ط ط ط ش ش ط ط ط ش ش ط ط ط ش ش ط ط ش ش '
               break;

               case "Chapter9":
                  expectedWord ='بطل تكلم سلام مكتب بست كلم نمط طلب سمك كتاب شامل ملابس بني بنت كليم باسم سلطان يمتلك شمس'
               break;

               case "Chapter10":
                expectedWord ='ف غ غ ف ف ف غ غ غ ف ف ف غ غ ف ف غ ف غ ف غ غ غ غ ف غ غ ف غ غ ف ف غ ف غ غ ف ف غ'
               break;

               case "Chapter11":
                expectedWord ='ع ق ق ق ع ع ع ق ق ع ع ع ق ق ق ع ع ق ق ع ق ع ق ق ع ع ق ق ع ق ع ع ق ق ع ق ق ع ع ع ق ق ق'
               break;

               case "Chapter12":
                expectedWord ='نمس كلم قطش شمل فلق طقس عمل غني قلم ملك شاف فقش عقل نقل منع لقم سمع شمم غمم نمي نفس'
               break;

               case "Chapter13":
                expectedWord ='ه ث ث ث ه ه ه ث ه ث ث ه ه ه ه ث ث ه ث ه ه ه ث ث ه ث ه ه ه ث ه ث ث ه ه ه ث ث ث ه ه ه ث ه ث ه ه ه'
               break;

               case "Chapter14":
                expectedWord ='بل بن نيل تل نعم لسان كلم ثماني مثل شمس بثق قلم بلق نفس كفاني قناع فقل معلق لثم علم بثق كثيف بقلم شمع بثقن'
               break;

               case "Chapter15":
                expectedWord ='خ ص خ ص ص خ ص ص خ ص ص خ خ ص ص ص خ خ ص ص ص خ خ خ ص ص خ خ خ ص ص خ خ'
               break;

               case "Chapter16":
                expectedWord ='ح ض ح ح ض ض ح ح ح ض ض ض ح ح ح ض ض ح ح ض ض ح ح ض ض ض ح ح ض ض ض ح ح'
               break;
               
               case "Chapter17":
                expectedWord ='فقط عمل قطط هلال حصان فعل قلم هاتف خلق حلم ضحك عقل نصف تنضيف مثلث يابس بتاع فباس خامس خاص اخلاق'
               break;
               
               case "Chapter18":
                expectedWord ='ج ج د د ج ج ج د د ج د د ج ج ج د د د د ج ج د د د د ج ج د د ج ج د د ج د د ج ج ج ج د د ج ج د د ج ج د'
               break;

               case "Chapter19":
                expectedWord ='كتاب قلم طالب بيت طعام سلام عمل مطعم طبيب مستشفي بلد صديق مال سعيد جديد قديم جميل قبيح معلم قبيح'
               break;

               case "Chapter20":
                expectedWord ='ة ر ة ر ر ة ة ر ر ة ة ر ر ة ة ر ة ة ر ة ر ة ة ر ر ة ة ر ة ة ر ر ة ة ة ر ة ة ر ة ر ر ة ة ر ة ر ة ر ر ة ر ر'
               break;

               case "Chapter21":
                expectedWord ='ريش مرس بلاد كثير حمص رماد كرش فصل مشرق بقشيش قمر خلص شاحب رقص شرح رفاه محاشي حصان صدر رشيق'
               break;

               case "Chapter22":
                expectedWord ='و ؤ و ؤ ؤ و و و ؤ ؤ و و ؤ ؤ ؤ و ؤ و و ؤ ؤ و و ؤ ؤ و ؤ ؤ ؤ و ؤ و ؤ ؤ و ؤ و ؤ ؤ و ؤ و و ؤ و و ؤ ؤ و'
               break;

               case "Chapter23":
                expectedWord ='ؤيل ؤادي ؤسطة حب ؤمني عمر غيمة فراشة قلب صلاة ربيع معرفة ؤخبر تمساح نهر شهر سمك بستان توت ؤهر'
               break;

               case "Chapter24":
                expectedWord ='ز ء ز ز ء ز ز ء ء ز ء ز ز ء ز ء ء ء ز ز ء ء ز ء ء ز ز ز ء ء ز ء ز ز ء ز ز ء ز ء ء ز ز ز ء ز ء ز'
               break;

               case "Chapter25":
                expectedWord ='ظ ئ ئ ظ ظ ئ ظ ئ ظ ئ ئ ظ ئ ظ ئ ئ ظ ئ ظ ظ ئ ئ ظ ظ ئ ظ ئ ئ ظ ظ ئ ئ ئ ظ ظ ظ ئ ظ ئ ئ'
               break;

               case "Chapter26":
                expectedWord ='لا لا ى ى لا ى ى لا ى لا ى لا ى ى لا لا ى ى لا ى لا لا لا ى ى ى لا لا ى ى لا ى ى لا لا لا ى ى لا ى'
               break;

               case "Chapter27":
                expectedWord ='قلب ضحك زهرة وداع حلم شمس نجمة جمال قصة سكون هدوء فرح مطر لون بحر وردة عطر سعادة جميل حبيب مساء'
               break;

               case "Chapter28":
                expectedWord ='ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ ذ'
               break;

               case "Chapter29":
                expectedWord ='سيارة مدينة بلد شمس قمر نجم بحر جبل حديقة زهرة نهر سماء تاريخ علم طبيب مهندس فنان مدير سياحة رياضة موسيقى فن عمل سفر سلام حرية'
               break;




               
               

               default:
                   console.log(ChapterHead)
               break;
               
             }
            
       }


 
 


 