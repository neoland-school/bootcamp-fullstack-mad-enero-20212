/**
 *
 *
 *
 *
 */

function Child({ onChange = () => {} }) {
  return <input onChange={onChange} type="text" />;
}

export default Child;
