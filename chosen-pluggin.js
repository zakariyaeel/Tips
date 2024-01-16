// i faced in a project a problem, i couldn't modify the placeholder 
// here's a solution

jQuery(document).ready(($)=>{
  $('selected-element').chosen({
    placeholder_text_multiple:"new text",
  });

  // or 
  $('selected-element').val('your new placeholder'); // changing the default placeholder
})
