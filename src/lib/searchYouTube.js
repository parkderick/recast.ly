var searchYouTube = (options, callback) => {

  // var cb = () => console.log('success');
  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      id: '4ZAEBxGipoA'
    },
    callback
  );
};

export default searchYouTube;
