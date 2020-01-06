   <script>
        for (let i = 0; i < 16; i++) {
                $("#game").append(/*html*/`
                <div class="card">
                    <div class="front"></div>
                    <div class="back"></div>
                </div>
                `)               
            }
            for (let i = 0; i < $(".card").length; i++) {
                let add = i % ($(".card").length /2)+1;
                $(".card").eq(i).find(".back").css("background-image",`url(./card/${add}S.jpg)`);
                $(".card").eq(i).attr("data-card", add);

                let target = Math.floor(Math.random()*$(".card").length);
                $(".card").eq(target).insertAfter($(".card").eq(i));
            }

            $(".card").on("click", function(){
                if($(".open").length < 2 && !$(this).hasClass("open")){
                   $(this).addClass("open"); 
                }

                if($(".open").length == 2){
                    setTimeout(()=> {
                        $(".open").removeClass("open");
                    },1000)
                    if($(".open").eq(0).attr("data-card") == $(".open").eq(1).attr("data-card")){
                        $(".open").fadeTo(1000,0).addClass(".clear");
                    }
                    if($(".clear").length == $(".card").length){
                        setTimeout(()=>{
                            alert("恭喜過關");
                        },500);
                    }
                }
                
            })
    </script>
