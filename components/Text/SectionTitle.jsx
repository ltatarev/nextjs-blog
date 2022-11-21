import PropTypes from 'prop-types';

export function SectionTitle({
  children,
}) {
  return (
    <h4 className="my-10 text-3xl font-bold text-slate-800">
      {children}
    </h4>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
