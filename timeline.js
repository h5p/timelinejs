TimelineJS = (function ($) {
  function Timeline (id, data, options, major, minor) {
   
    // This non-runnable library does not know it's own major+minor, therefore
    // we have tp provide it from runnable library using me
    var libraryPath = 'TimelineJS-' + major + '.' + minor;

    // Inform TimelineJS where all CSS/JS is placed
    $.extend(true, {}, {
      script_path: H5P.getLibraryPath(libraryPath) + '/'
    }, options);

    return new TL.Timeline(id, data, options);
  };

  return Timeline;
})(H5P.jQuery);
