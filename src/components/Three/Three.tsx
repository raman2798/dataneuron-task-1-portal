import { FC, ReactElement } from 'react';

const Three: FC = (): ReactElement => {
  return (
    <div className="box" style={{ margin: 0, height: '100%', paddingBottom: '40px' }}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460" draggable="false" alt="github avatar" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>Components Three</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export { Three };
