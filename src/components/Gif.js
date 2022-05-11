const Gif = ({ gif }) => {
  if (gif) {
    const { data } = gif;
    const { title, embed_url } = data;
    return (
      <>
        <h4>{title}</h4>
        <iframe
          title={title}
          src={embed_url}
          width="480"
          height="368"
          frameBorder="0"
        />
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
