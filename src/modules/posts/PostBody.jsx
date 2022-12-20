/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import markdownStyles from './markdown-styles.module.css';

export function PostBody({ content }) {
  return (
    <div className="mx-auto mt-20">
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

PostBody.propTypes = {
  content: PropTypes.string.isRequired,
};
