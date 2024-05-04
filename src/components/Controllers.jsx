import "./Controllers.css";

function Slider() {
  return (
    <ul className="controller">
      <li className="controller__indicator"></li>
      <li className="controller__indicator"></li>
      <li className="controller__indicator"></li>
    </ul>
  );
}

function Pagination() {
  return (
    <ul className="pagination">
      <a href="#" className="pagination__control">
        &#8592;
      </a>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">...</a>
      </li>
      <li>
        <a href="#">9</a>
      </li>
      <li>
        <a href="#">10</a>
      </li>
      <a href="#" className="pagination__control">
        &#8594;
      </a>
    </ul>
  );
}

export { Slider, Pagination };
