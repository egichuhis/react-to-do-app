import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li key={itemProp.id}>{itemProp.title}</li>;

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
