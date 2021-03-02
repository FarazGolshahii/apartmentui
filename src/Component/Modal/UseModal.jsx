const { useState } = require("react");

const useModal = (names) => {
  const [modalState, setModalState] = useState(
    names.map((n) => ({ name: n, isActive: false, data: null }))
  );

  const toggleModal = (name, data) => {
    const newModalStates = modalState.map((m) => {
      if (m.name === name)
        return { name: m.name, isActive: !m.isActive, data: data };
      return m;
    });
    setModalState(newModalStates);
  };

  const getModalData = (name) => modalState.find((m) => m.name === name);

  return [modalState, toggleModal, getModalData];
};

export default useModal;
