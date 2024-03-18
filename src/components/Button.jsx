/* eslint-disable react/prop-types */
export default function Button({ children, classNames }) {
  return <button className={`button ${classNames}`}>{children}</button>;
}
