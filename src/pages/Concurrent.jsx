import { memo, useEffect, useState, useTransition } from 'react';
import Counter from '../components/Counter';
import EmptyList from '../components/EmptyList';
import { Concurrent as ProblemStatement } from '../components/Problems';
import { svg_grid, svg_gradient } from '../constants';
import { fetchPhotos } from '../utils';

// Memoize PhotoItem to prevent unnecessary re-renders
const PhotoItem = memo(({ id, title, url, thumbnailUrl }) => {
  const [src, setSrc] = useState(svg_gradient);
  return (
    <li className="photo-item flow" title={title}>
      <h4 className="text-capitalize text-ellipsis">{`(${id}) ${title}`}</h4>
      <img
        alt={title}
        src={src}
        loading="lazy"
        onError={() => setSrc(svg_grid)}
      />
    </li>
  );
});

const increment = 100;
const defaultSize = 100;

const Concurrent = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [isPending, startTransition] = useTransition();

  const [size, setSize] = useState(defaultSize);

  const [resultChunk, setResultChunk] = useState([]);

  useEffect(() => {
    const chunk = filteredPhotos.slice(0, size);
    setResultChunk(chunk);
  }, [size, filteredPhotos]);

  useEffect(() => {
    setSize(defaultSize);
  }, [filterText]);

  const handleLoadMore = () => {
    setSize(size + increment);
  };

  const handleFilterChange = (value) => {
    // High priority state change
    setFilterText(value);

    if (!allPhotos.length) return;
    if (!value.trim()) {
      setFilteredPhotos(allPhotos);
      return;
    }

    // Low priority state change
    startTransition(() => {
      const result = allPhotos.filter((photo) => {
        const textMatch =
          !value || photo.title.toLowerCase().includes(value.toLowerCase());

        return textMatch;
      });

      setFilteredPhotos(result);
    });
  };

  return (
    <section className="content-section">
      <ProblemStatement />

      <hr />

      <Counter />

      <hr />

      <h3>Concurrency</h3>
      <div className="button-group">
        <button
          className={`btn btn--primary`}
          onClick={() =>
            fetchPhotos((data) => {
              setAllPhotos(data);
              setFilteredPhotos(data);
              setFilterText('');
            })
          }
        >
          Fetch Photos
        </button>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter-text">Filter by title:</label>
          <input
            id="filter-text"
            type="text"
            placeholder="Filter..."
            value={filterText}
            onChange={(e) => handleFilterChange(e.target.value || '')}
            className="filter-input"
          />
        </div>
      </div>

      {filteredPhotos.length < 1 && <EmptyList />}

      {filteredPhotos.length > 0 && (
        <div>
          <div className="filter-summary">
            <p>
              Search matched {filteredPhotos.length} / {allPhotos.length}
            </p>
            <p>Showing the first {resultChunk.length}</p>
            {isPending && <span className="text-muted">(filtering...)</span>}
          </div>

          <ul className="photo-grid">
            {resultChunk.map((photo) => (
              <PhotoItem key={photo.id} {...photo} />
            ))}
          </ul>
        </div>
      )}
      <hr />
      {filteredPhotos.length > size && (
        <div class="center-flow">
          <button className="btn btn--primary m-auto" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default Concurrent;
