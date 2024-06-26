export default function RoadmapBox({
  title,
  content,
  image,
  color,
  title_color,
  background_color,
  url,
}) {

  return (
    <div
      className="roadmap-box"
      style={{
        "--box-color": color,
        "--title-color": title_color,
      }}
    >
      <div className="roadmap-box-circle">
        <a href={url || "#"} target="_blanck" className="circle" style={{
          "backgroundColor": background_color 
        }}>
          {!!image && (
            <img
              src={image}
              width="40"
              height="40"
              className="roadmap-image"
              alt={content}
            />
          )}
        </a>
      </div>
      <div className="roadmap-box-title">
        <p>{title}</p>
      </div>
      <div className="roadmap-box-content">
        <p data-aos="zoom-in" className="content">{content}</p>
      </div>
    </div>
  );
}
