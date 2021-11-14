import './DeleteBtn.css';

export default function DeleteBtn({ deleteContact }) {
  return (
    <button className="delete-button" type="button" onClick={deleteContact}>
      <div className="delete-logo">
        <div className="delete-button__one"></div>
        <div className="delete-button__two"></div>
      </div>
    </button>
  );
}
