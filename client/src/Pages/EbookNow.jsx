// Assuming you have a Modal component that accepts props including children and a function to close the modal
function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black backdrop-blur-sm  bg-opacity-20 flex justify-center items-center">
      <div className="p-4 mt-5 w-full md:max-w-4xl  bg-white md:rounded-2xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-2 text-lg font-bold text-gray-600 hover:text-gray-800"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
