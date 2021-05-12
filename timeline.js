TimelineJS = (function ($) {
  function Timeline (id, data, options, major, minor) {
   
    // This non-runnable library does not know it's own major+minor, therefore
    // we have tp provide it from runnable library using me
    var libraryPath = 'TimelineJS-' + major + '.' + minor;

    // Inform TimelineJS where all CSS/JS is placed
    options = $.extend(true, {}, {
      script_path: new URL('.' + H5P.getLibraryPath(libraryPath) + '/js/', location.href).toString()
    }, options);

    return new TL.Timeline(id, data, options);
  };

  return Timeline;
})(H5P.jQuery);
