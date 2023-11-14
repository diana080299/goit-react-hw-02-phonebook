export const Filter = props => {
  return (
    <div>
      <h3 style={{ fontSize: 30 }}>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        value={props.filter}
        onChange={props.onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </div>
  );
};
