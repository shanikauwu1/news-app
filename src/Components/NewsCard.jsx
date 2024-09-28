import newsImg from "../assets/news.jpg";

export const NewsCard = ({ title, description, url, src }) => {
  return (
    <div
      className="card bg-dark text-light m-3 d-inline-block px-2 py-2"
      style={{ maxWidth: "340px", minWidth: "340px", minHeight: "500px" }}
    >
      <img
        src={src ? src : newsImg}
        className="card-img-top"
        style={{ height: "200px", width: "320px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 100)
            : "Here no more description abouth this articles"}
        </p>
        <a href={url} className="btn btn-danger">
          Read More
        </a>
      </div>
    </div>
  );
};
