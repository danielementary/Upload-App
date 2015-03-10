var loadFile = function(input) {
    var output = document.getElementById('output');
    var srcImg = URL.createObjectURL(input.files[0]);
    output.src = srcImg;
    var hauteurpage = $( window ).height()*0.6;
    $("#output").css("max-height", hauteurpage)
};

$( document ).on( "pagecreate", function() {
    $("#btnCompression").click(function() {
        var input = $("#imageInput").val();
        
        if (input == "") {
            
            alert("Aucune image n'a été selectionnée");
            
        }
        else {
            var image = document.getElementById('imageInput');
            var imageFile = image.files[0];
            var sourceImage = document.getElementById('output');
            
            var cvs = document.createElement('canvas');
            var quality = 10;
            cvs.width = sourceImage.naturalWidth;
            cvs.height = sourceImage.naturalHeight;
            var ctx = cvs.getContext("2d").drawImage(sourceImage, 0, 0);
            var newImageData = cvs.toDataURL("image/jpeg", quality/100);
            var result_image = new Image();
            result_image.src = newImageData;
            
            var output = document.getElementById('output');
            var source = result_image.src;
            output.src = source;
            
            
            var fileImage = imageFile;
            var fileName = fileImage.name;
            fileImage.src = result_image.src;
            console.log(fileImage);
            console.log(fileName);
            console.log(fileImage.src);
        }
    });
});
    


$( document ).on( "pagecreate", function() {
    $( "#contraste" ).on( 'slidestop', function() {
            var valeurcontraste = $("#contraste").val();
            var contraste = 'contrast(' + valeurcontraste + ')';
            
            var valeurluminosite = $("#luminosite").val();
            var luminosite = 'brightness(' + valeurluminosite + ')';
            
            var valeursaturation = $("#saturation").val();
            var saturation = 'saturate(' + valeursaturation + ')';
            
            var attribut =  contraste + luminosite +  saturation;
            $("#output").css("-webkit-filter", attribut);
    });
    $( "#luminosite" ).on( 'slidestop', function() {
            var valeurcontraste = $("#contraste").val();
            var contraste = 'contrast(' + valeurcontraste + ')';
            
            var valeurluminosite = $("#luminosite").val();
            var luminosite = 'brightness(' + valeurluminosite + ')';
            
            var valeursaturation = $("#saturation").val();
            var saturation = 'saturate(' + valeursaturation + ')';
            
            var attribut =  contraste + luminosite +  saturation;
            $("#output").css("-webkit-filter", attribut);
    });
    $( "#saturation" ).on( 'slidestop', function() {
            var valeurcontraste = $("#contraste").val();
            var contraste = 'contrast(' + valeurcontraste + ')';
            
            var valeurluminosite = $("#luminosite").val();
            var luminosite = 'brightness(' + valeurluminosite + ')';
            
            var valeursaturation = $("#saturation").val();
            var saturation = 'saturate(' + valeursaturation + ')';
            
            var attribut =  contraste + luminosite +  saturation;
            $("#output").css("-webkit-filter", attribut);
    });
});