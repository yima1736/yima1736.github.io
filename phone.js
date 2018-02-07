$(document).ready(function() {
  $("#tab_bar"). show();
  $("#add_contact").hide();
  $("#contact_list").hide();
  $("#tges").hide();
});


$("#dialer").click(function() {
  $("#content_dialer").show();
  $("#add_contact").hide();
  $("#contact_list").hide();
  $("#tges").hide();

});

$("#add").click(function() {
  $("#add_contact").show();
  $("#contact_list").hide();
  $("#content_dialer").hide();
  $("#tges").hide();

});

$("#list").click(function() {
  $("#add_contact").hide();
  $("#contact_list").show();
  $("#content_dialer").hide();
  $("#tges").hide();

});

$("#gestures").click(function() {
  $("#add_contact"). hide();
  $("#contact_list").hide();
  $("#content_dialer"). hide();
  $("#tges").show();
});

$("#n1").click(function(){
  $("#phone_number").val($("#phone_number").val() + "1");
});
$("#n2").click(function(){
  $("#phone_number").val($("#phone_number").val() + "2");
});
$("#n3").click(function(){
  $("#phone_number").val($("#phone_number").val() + "3");
});
$("#n4").click(function(){
  $("#phone_number").val($("#phone_number").val() + "4");
});
$("#n5").click(function(){
  $("#phone_number").val($("#phone_number").val() + "5");
});
$("#n6").click(function(){
  $("#phone_number").val($("#phone_number").val() + "6");
});
$("#n7").click(function(){
  $("#phone_number").val($("#phone_number").val() + "7");
});
$("#n8").click(function(){
  $("#phone_number").val($("#phone_number").val() + "8");
});
$("#n9").click(function(){
  $("#phone_number").val($("#phone_number").val() + "9");
});
$("#n0").click(function(){
  $("#phone_number").val($("#phone_number").val() + "0");
});
$("#n10").click(function(){
  $("#phone_number").val($("#phone_number").val() + "*");
});
$("#n11").click(function(){
  $("#phone_number").val($("#phone_number").val() + "#");
});

startX = 0;
startY = 0;
endX= 0;
endY= 0;


$("#gesture_area").mousedown(function(event) {
  endX = event.pageX;
  endY = event.PageY;
  $("#gesture_output").text("mouse up")


$("#gesture_area").mousedown(function(event) {
  startX = event.pageX;
  startY = event.PageY;
  $("#gesture_output").text("mouse down")



if (endX > startX) {
  $("#gesture_output").text("swipe right");
}
if(endX < startX){
  $("#gesture_output").text("swipe left");
}

});
});
