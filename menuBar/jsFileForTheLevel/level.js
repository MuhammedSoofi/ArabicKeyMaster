let spanEl = document.querySelectorAll("#text span");
       let expectedWord
       let typedCharacters = '';
       let typeStart = document.getElementById("type-start")

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
                   expectedWord  = 'االااالالالالاالالالااالللااللااااللاالاللااااللاالا'
               break;
               
               case "Chapter2":
                   expectedWord = 'بتبتتتتبببتتببتتبتتتببببتبتبتببتبتبت'
                   
               break;
               
               case "Chapter3":
                  expectedWord ='البتتبتالالباباتببتالتبتبلاللبتتاتبلاللبتتا'
               break;

               case "Chapter4":
                  expectedWord='نينيننيننييييننينييننييننييننينينيننيييينن'
               break;

               case "Chapter5":
                  expectedWord='يتبا بلان نبتا بانت بيلت باني تابن يلبا يتنب بانل اتنب نبلت يتاب بنتا ابتاي بيلت باني'
               break;

               case "Chapter6":
                  expectedWord='مسمسممسسسمممسمسسسممسسسممسسمسممسسسممممسسممم'
               break;

               case "Chapter7":
                  expectedWord='كشكشششككككششكششكشكككشششكششكشكككششششكش'
               break;

               case "Chapter8":
                  expectedWord ='طشطططشششطططششططششطططططششطططششطططششططشش'
               break;

               case "Chapter9":
                  expectedWord ='بطل تكلم سلام مكتب بست كلم نمط طلب سمك كتاب شامل ملابس بني بنت كليم باسم سلطان يمتلك شمس'
               break;

               case "Chapter10":
                expectedWord ='فغغفففغغغفففغغففغفغفغغغغفغغفغغففغفغغففغ'
               break;

               case "Chapter11":
                expectedWord ='عقققعععققعععقققععققعقعققععققعقععققعققعععقق'
               break;

               case "Chapter12":
                expectedWord ='نمس كلم قطش شمل فلق طقس عمل غني قلم ملك شاف فقش عقل نقل منع لقم سمع شمم غمم نمي نفس'
               break;

               case "Chapter13":
                expectedWord ='هثثثهههثهثثههههثثهثهههثثهثهههثهثثهههثثثهههثهثهه'
               break;

               case "Chapter14":
                expectedWord ='بل بن نيل تل نعم لسان كلم ثماني مثل شمس بثق قلم بلق نفس كفاني قناع فقل معلق لثم علم بثق كثيف بقلم شمع بثقن'
               break;

               case "Chapter15":
                expectedWord ='خصخصصخصصخصصخخصصصخخصصصخخخصصخخخصصخخ'
               break;

               case "Chapter16":
                expectedWord ='حضححضضحححضضضحححضضححضضححضضضححضضضحح'
               break;
               
               case "Chapter17":
                expectedWord ='فقط عمل قطط هلال حصان فعل قلم هاتف خلق حلم ضحك عقل نصف تنضيف مثلث يابس بتاع فباس خامس خاص اخلاق'
               break;
               
               case "Chapter18":
                expectedWord ='ججددجججددجددجججددددججددددججددججددجددججججددججددجج'
               break;

               case "Chapter19":
                expectedWord ='كتاب قلم طالب بيت طعام سلام عمل مطعم طبيب مستشفي بلد صديق مال سعيد جديد قديم جميل قبيح معلم قبيح'
               break;

               case "Chapter20":
                expectedWord ='ةرةررةةررةةررةةرةةرةرةةررةةرةةررةةةرةةرةررةةرةرةررةر'
               break;

               case "Chapter21":
                expectedWord ='ريش مرس بلاد كثير حمص رماد كرش فصل مشرق بقشيش قمر خلص شاحب رقص شرح رفاه محاشي حصان صدر رشيق'
               break;

               case "Chapter22":
                expectedWord ='وؤوؤؤوووؤؤووؤؤؤوؤووؤؤووؤؤوؤؤؤوؤوؤؤوؤوؤؤوؤووؤووؤؤ'
               break;

               case "Chapter23":
                expectedWord ='ؤيل ؤادي ؤسطة حب ؤمني عمر غيمة فراشة قلب صلاة ربيع معرفة ؤخبر تمساح نهر شهر سمك بستان توت ؤهر'
               break;

               case "Chapter24":
                expectedWord ='زءززءززءءزءززءزءءءززءءزءءزززءءزءززءززءزءءزززءزءز'
               break;

               case "Chapter25":
                expectedWord ='ظئئظظئظئظئئظئظئئظئظظئئظظئظئئظظئئئظظظئظئئ'
               break;

               case "Chapter26":
                expectedWord ='لالاىىلاىىلاىلاىلاىىلالاىىلاىلالالاىىىلالاىىلاىىلالالاىىلاى'
               break;

               case "Chapter27":
                expectedWord ='قلب ضحك زهرة وداع حلم شمس نجمة جمال قصة سكون هدوء فرح مطر لون بحر وردة عطر سعادة جميل حبيب مساء'
               break;

               case "Chapter28":
                expectedWord ='ذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذذ'
               break;

               case "Chapter29":
                expectedWord ='سيارة مدينة بلد شمس قمر نجم بحر جبل حديقة زهرة نهر سماء تاريخ علم طبيب مهندس فنان مدير سياحة رياضة موسيقى فن عمل سفر سلام حرية'
               break;




               
               

               default:
                   console.log(ChapterHead)
               break;
               
             }
            
       }


 
 


 