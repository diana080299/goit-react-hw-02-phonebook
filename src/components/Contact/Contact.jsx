export const Contact = props => {
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };
  return (
    <ul>
      {props.props.map((contact, id) => (
        <li key={id}>
          {contact.name}: {formatNumber(contact.number)}
          <button type="button" onClick={() => props.onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
