import { useMemo } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Cover from '../../public/Cover.png';
import { Tag, TagShape } from '../Tag';
import styles from './Card.module.css';

const SUMMARY_LENGTH = 800;

export function Card({
  title, subtitle, summary, tag, date,
}) {
  const resolvedSummary = useMemo(
    () => (summary.length > SUMMARY_LENGTH
       && `${summary.substring(0, SUMMARY_LENGTH)}...`)
      || summary,
    [summary],
  );

  return (
    <div className={styles.card}>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-3">
          <Image placeholder="blur" src={Cover} />
        </div>
        <div className="col-span-8 md:col-span-5">
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.summary}>{resolvedSummary}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 place-content-between">
            <span className="col justify-self-start"><Tag title={tag} /></span>
            <span className="col justify-self-end">
              <p className={styles.date}>Objavljeno: {date}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tag: TagShape.isRequired,
  title: PropTypes.string.isRequired,
};
