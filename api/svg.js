module.exports = async (req, res) => {
  const [width, height] = [450, 470];
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache, max-age=0");
  res.status(200).send(`
    <svg fill="none" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="${width}" height="${height}">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <input type="checkbox" />
        </div>
      </foreignObject>
    </svg>
  `);
};
