var shelfWidth;
var divided;
var noOfBooks;
var books = [];
var shelfs = [];
var dir;   
var i = 0;
var noOfShelfs;

$(document).ready(function() {
    dir = "resources/books/";
    shelfWidth = $("#firstshelf").width();
    divided = shelfWidth/86; //bookWidth = 86px;    
    noOfBooks = parseInt(divided) - 1;
    
    console.log("shelf width is " + shelfWidth + " px and book width is 86 px");
    console.log("the shelf can contain " +  noOfBooks + " books");
    
    $("#getImages").click(function() {
        $.ajax({
            //This will retrieve the contents of the folder if the folder is configured as 'browsable'
            url : dir,
            success: function(data) { 
                $(data).find("a:contains(" + "png" + ")").each(function () {
                    var filename = this.href.substring(this.href.lastIndexOf("/") + 1);
//                    var img = $("<img id='" + filename + "'>"); //Equivalent: $(document.createElement('img'))
//                    img.attr('src', dir + filename);
                    var img = $("<img />", {id: filename.substring(0, filename.length - 3), class: "book", src: dir + filename});
                    books[i] = img;
                    console.log("books[" + i + "]: " + books[i]);
                    i++;
                });
                console.log(books.length)
            }
        });    
    });

    $("#testBtn").click(function() {
        var nr = books.length/noOfBooks;
        noOfShelfs = parseInt(nr) + 1;
        var k = 0;
        for(var i = 0; i < noOfShelfs; i++) {
            var div = $("<div>", {id: "shelf" + (i + 1), class: "row"});
            
            var j = 0;
            while(j < noOfBooks) { 
                var div2 = $("<div>", {class: "col-xs-4 col-md-2"});
                div2.appendTo(div);
                div2.append(books[k]);
                k++;
                j++;
            }
                
            shelfs[i] = div;
            console.log(shelfs[i]);
        }

        for(var i = 0; i < parseInt(noOfShelfs); i++) {
            $('#shelfGrid').append(shelfs[i]);
        }
    });
});




