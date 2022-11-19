import PropTypes from 'prop-types';
import styles from './Tag.module.css';

export const TAGS = { RECENZIJA: 'Recenzija' };

export const TagShape = PropTypes.oneOf(Object.values(TAGS));

export function Tag({ title }) {
  return (
    <p className={styles.tag}>{title}</p>
  );
}

Tag.propTypes = {
  title: TagShape.isRequired,
};
