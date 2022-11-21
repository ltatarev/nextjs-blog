/* eslint-disable max-len */
import PropTypes from 'prop-types';

export function RightArrow({
  fill,
  size,
  height,
  width,
  ...props
}) {
  return (
    <svg
      fill={fill}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_38_2)">
        <path d="M21.3353 10.6552C21.335 10.6549 21.3348 10.6546 21.3345 10.6544L17.0622 6.40265C16.7421 6.08413 16.2244 6.08532 15.9058 6.40543C15.5873 6.72549 15.5885 7.24318 15.9086 7.56173L18.777 10.4163H1.46107C1.00949 10.4163 0.643433 10.7823 0.643433 11.2339C0.643433 11.6855 1.00949 12.0516 1.46107 12.0516H18.777L15.9086 14.9061C15.5885 15.2247 15.5873 15.7424 15.9059 16.0624C16.2245 16.3826 16.7422 16.3837 17.0622 16.0652L21.3346 11.8135C21.3348 11.8132 21.335 11.8129 21.3353 11.8127C21.6555 11.4931 21.6545 10.9737 21.3353 10.6552Z" fill="black" />
      </g>
      <defs>
        <rect fill={fill} height="20.9316" transform="translate(0.643433 0.768066)" width="20.9316" />
      </defs>
    </svg>
  );
}

RightArrow.propTypes = {
  fill: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
