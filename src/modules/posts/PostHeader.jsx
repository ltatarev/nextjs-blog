import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { Tag } from '../tag';

export function PostHeader({
  title, subtitle, tag, date,
}) {
  const t = useTranslations('PostHeader');

  return (
    <div className="mt-10 place-content-center py-5 text-center align-text-bottom">
      <p className="inline text-4xl font-extrabold">{title}</p>
      <p className="ml-2 inline align-bottom text-3xl italic">- {subtitle}</p>
      <div className="mt-5 flex justify-center">
        <Tag removeSpace title={tag} />
      </div>
      <div className="mt-5 flex justify-end text-sm text-slate-500">
        {t('published')}: {date}
      </div>
    </div>
  );
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
