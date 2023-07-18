// $('#click').click(()=>{
//   $("#box").toggle(1000)
// })

// $('#click').click(()=>{
//   $("#box").fadeIn(1000)
// })


// $('#click').click(()=>{
//   $("#box").fadeToggle(1000)
// })

// $('#click').click(()=>{
//   $("#box").fadeTo(1000 ,0.4)
// })


//weth same bputton can slide down and up
// $('#click').click(()=>{
//   $("#box").slideToggle(1000)
// })


// $('#click').click(()=>{
//   $("#box").slideDown(1000)
// })



// $('#click').click(()=>{
//   $("#top").animate({width: '100%'},4000)
// })

// $('#click').click(()=>{
//   $("#top").animate({ 
//   opacity: '0.5',
//   height: '150px',
//   width: '150px'},8000)
// })

// $('#stop').click(()=>{
//   $("#top").stop()
// })



// $('#click').click(()=>{
//   $("#box").show(1000,()=>{
//     $("#box").slideDown(1000,()=>{
//       $("#box").fadeOut(1000)
//     })
//   })
// })


// $.get({
//     url:"https://jsonplaceholder.typicode.com/users",
//     cache: true,
//     success:function(res){
//         $.each(res, function (key, value) {
//             $('#exampleid').append("<ul>\
//                         <li>"+value.name+"</li>\
//                         </ul>");
//         })
//     },
    
//     error:function(res){
//         console.log(res)
//     }
// })

// $.get({
//     url:"https://jsonplaceholder.typicode.com/users",
    
//     success:function(res){
        
//         let text =""
//        for(let i =0 ; i< res.length; i++)
//        text +=`<li>${res[0].name}</li>`
//        {
//         $('#list').html(text)
//        }
//     },
    
//     error:function(res){
//         console.log(res)
//     }
// })

// $.get({
//         url:"https://jsonplaceholder.typicode.com/users",
        
//         success:function(res){
            
//             let text =res.map((user)=>`<li>${user.name}</li>`)
//             $('#list').html(text)
//         }
//         })


$('#click').click(()=>{
 let username=$("#username").val()

 let urlapi="https://api.github.com/users/"+username
 $.get({    
    url:urlapi,
     success:function(res){


        // window.open(res.html_url)
        $("#img").attr("src",res.avatar_url)
        console.log(res.avatar_url)

        $("#login").text(res.login)
        console.log(res.login)
        $("#id").text(res.id)
        console.log(res.id)
     }
             
})
})































