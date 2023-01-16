function createImage(name) {
    return new Image(name);                         // createImage() factory might look totally unnecessary
                                                    // why not instantiate the Image class by using the new operator directly
}
var image = createImage('photo.jpeg');
/***********************************************************************************/

// Tomorrow, if we want to refactor... we can simply change it here...
    // instead of changing at every place where use "new Image()"
    // think about localStorage.getItem() in 28 files
    // versus... localStorage.getItem() in only 1 factory file... all those 28 files calling localStorage.getItem() from this factoryFile

function createImage(name) {
    if (name.match(/\.jpeg$/)) {
        return new JpegImage(name);
    } else if (name.match(/\.gif$/)) {
        return new GifImage(name);
    } else if (name.match(/\.png$/)) {
        return new PngImage(name);
    } else {
        throw new Exception('Unsupported format');
    }
}
/***********************************************************************************/