TimelineJS = (function ($) {
  function Timeline (options, major, minor) {
    // This non-runnable library does not know it's own major+minor, therefore
    // we have tp provide it from runnable library using me
    var libraryPath = 'TimelineJS-' + major + '.' + minor;

    options.js = H5P.getLibraryPath(libraryPath) + '/js/timeline-min.js';
    options.css = H5P.getLibraryPath(libraryPath) +'/css/timeline.css';

    createStoryJS(options);
  };

  return Timeline;
})(H5P.jQuery);
