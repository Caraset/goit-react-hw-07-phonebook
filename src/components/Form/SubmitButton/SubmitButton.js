import './SubmitButton.css';

export default function SubmitButton({ loading }) {
  return (
    <button className="button" type="submit" disabled={loading}>
      <div className="circle">
        <div className="cross top"></div>
        <div className="cross right"></div>
        <div className="cross center"></div>
        <div className="cross bottom"></div>
        <div className="cross left"></div>
      </div>
      <span className="button__text">Add contact</span>
    </button>
  );
}
