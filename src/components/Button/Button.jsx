import style from './Button.module.scss';

export function Button({ text, onClick, className, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`${style['btn']} ${style[className]}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
