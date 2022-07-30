
$( document ).ready(function() { 
  vat_Popover_Init();
});

function vat_Popover_Init(){

// popover 
$("[data-bs-toggle=popover]").each(function(i, obj) {
 var id = $(this).attr('id')
 console.log(id)
$(this).popover({
   container: 'body',
    html: true,
    placement: $(this).attr('data-placement'),
//  trigger: 'focus',
    // customClass: '' + id +'-pop',
    sanitize: false,
    template: '<div class="popover '+id+'-pop"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
  content: function () {
     actualcontent = $('#popover-content-' + id).find(".content").clone();
     return actualcontent
    }
})
 

}); // popover each

// $("[data-bs-toggle=popover]").on('show.bs.popover', function (e) {
$("[data-bs-toggle=popover]").on('click', function (e) {
    $("[data-bs-toggle=popover]").not(this).popover('hide');
    // $("[data-bs-toggle=popover]").not(this).popover('destroy');
    // $(".popover").remove(); 
    // $(this).popover('show')
});


$("[data-bs-toggle=popover]").on('shown.bs.popover', function(){

   
 var id = $(this).attr('id')
 $(this).addClass($(this).attr('data-icon-deactive'))
 $(this).removeClass($(this).attr('data-icon-active'))
 $('#popover-content-' + id).find(".content").remove();
 // $('[name="radio"]').off().on("input",RadioInput)

}); 

$("[data-bs-toggle=popover]").on('hide.bs.popover', function(){
 var id = $(this).attr('id')

 var lastcontent = $(document).find('.'+ id +'-pop').find(".content").clone();
 // console.log(lastcontent)
 $(lastcontent).appendTo('#popover-content-' + id);
$(this).data("bs.popover").inState = { click: false, hover: false, focus: false }
 $(this).removeClass($(this).attr('data-icon-deactive'))
 $(this).addClass($(this).attr('data-icon-active'))


}); 


}