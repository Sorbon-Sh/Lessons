const Modal = ({ handleClose, children }) => {
  return (
    <div
      className="absolute top-0 start-0 h-screen w-full bg-black bg-opacity-40 grid place-items-center"
      onClick={handleClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="p-4 bg-white rounded-xl"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
