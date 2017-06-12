function Location(place, landmarks, time, notes) {
  this.place = place;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function(){
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newLocation = new Location(inputtedPlace, inputtedLandmarks, inputtedTime, inputtedNotes);

    $("ul#add-location").append("<li><span class='location'>" + newLocation.place + "</span></li>");

    $(".location").last().click(function() {
  $("#show-location").show();
  $("#show-location h2").text(newLocation.place);
  $(".landmarks").text(newLocation.landmarks);
  $(".time").text(newLocation.time);
  $(".notes").text(newLocation.notes);

});

    $("input#new-place").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");






  });
});
