//Changing Light to Dark
  $('img').css({'height': '150px', 'width': '150px'});

  $('.light').on('click', function(){
    $('body').css({'background-image': 'url("http://www.rascaldoglitterbox.com/sitebuilder/images/GRASS_BLADE.SKY_FOR_WEBSITE-850x389.jpg")',
      "background-size": "cover"});
  });

  $('.dark').on('click', function(){
    $('body').css({'background-image': 'url(img/trees.jpg)',
      "background-size": "cover"});
  });

//Forest Background
  $('.forest').on('click', function(){
    $('body').css({
      'background-image': 'url("http://www.rascaldoglitterbox.com/sitebuilder/images/GRASS_BLADE.SKY_FOR_WEBSITE-850x389.jpg")',
      'background-size':'cover'
    });
  });

  $('.forest').css("background-image", 'url("http://www.rascaldoglitterbox.com/sitebuilder/images/GRASS_BLADE.SKY_FOR_WEBSITE-850x389.jpg"');

  $('.textures').css("width", "150px");

//Low to High Sort
var petArray = $('.pet');
var lowBtn = $('.low');
var homePlacement = $('.image-container');
var lowHigh = petArray.sort(lowToHigh);

function lowToHigh(a, b) {
  var aHome = parseInt(a.dataset.price);
  var bHome = parseInt(b.dataset.price);

    if (aHome > bHome) {
      return 1;
    }
    else if (bHome > aHome) {
        return -1;
    }
    else {
        return 0;
    }
}

//High to Low Sort
var petArray2 = $('.pet');
var highBtn = $('.high');
var highLow = petArray2.sort(highToLow);
var homePlacement1 = $('.image-container');

function highToLow(a,b) {
  var aHome = parseInt(a.dataset.price);
  var bHome = parseInt(b.dataset.price);

    if (aHome < bHome) {
      return 1;
    }
    else if (bHome < aHome) {
        return -1;
    }
    else {
        return 0;
    }
}

// Price Range Buttons - IN PROGRESS
var pets = $('.pet');

function findRange(){
  var ranges = [];
  var labels = $('.filters label input');
  for (var i = 0; i < labels.length; i++) {
    if($(labels[i]).is(':checked')){
      ranges.push(labels[i].value);
    }
  }
  sortThings(ranges, pets);
}

function sortThings(ranges, things){
  pets.hide();
  var rangeAmt = [];
  if(ranges.length === 0){
    pets.show();
    return;
  }
  else{
    for (var i = 0; i < ranges.length; i++) {
      rangeAmt.push(getRanges(ranges[i]));
    }
  }
  for (var k = 0; k < rangeAmt.length; k++) {
    for (var j = 0; j < things.length; j++) {
      if(things[j].dataset.price >= rangeAmt[k][0] && things[j].dataset.price <= rangeAmt[k][1]){
        $(things[j]).show();
      }
    }
  }
}

function getRanges(num){
  switch (num){
    case '25':
      return [0, 25];
    case '50':
      return [25, 50];
    case '75':
      return [50, 75];
    case '100':
      return [75, 100];
    case '150':
      return [100, 150];
    case 'all':
      return [150, 1000];
  }
}






















