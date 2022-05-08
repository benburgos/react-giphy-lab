const Gif = ({ gif }) => {
  if (gif) {
    const { data } = gif;
    const { title, embed_url } = data;
    return (
      <>
        <h4>{title}</h4>
        <h4>{embed_url}</h4>
        <iframe src={embed_url} width="480" height="368" frameBorder="0" />
        <h4>Powered by GIPHY</h4>
      </>
    );
  } else {
    <>
      <h4>Powered by GIPHY</h4>
    </>;
  }
};

export default Gif;

// example to implment the GIF image
// <iframe src="https://giphy.com/embed/3o6Mb3RYIfHmV8RcFG" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-7-the-simpsons-7x17-3o6Mb3RYIfHmV8RcFG">via GIPHY</a></p>
