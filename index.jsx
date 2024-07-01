import {View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({className, body = false, children, ...props}) => {
  return (
    <View className={clsx('mx-card', className)} {...props}>
      {!body && children}
      {body && <View className="mx-card-body">{children}</View>}
    </View>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  body: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
