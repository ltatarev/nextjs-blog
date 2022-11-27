import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const colors = ['secondary', 'error', 'success', 'primary'];

export function Filter({ title, index }) {
  return (
    <Button
      auto
      bordered
      ghost
      shadow
      className="mx-7 rounded-2xl uppercase hover:bg-neutral-600"
      color={colors[index]}
    >
      {title}
    </Button>
  );
}

Filter.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
