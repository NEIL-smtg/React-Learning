import React from 'react';
import Form from './components/Form/Form';
import Lists from './components/Lists/Lists';
import Modal from './components/Modal/Modal';

function App() {
	const [data, setData] = React.useState([]);
	const [modal, setModal] = React.useState(false);
	const [modalInfo, setModalInfo] = React.useState({});

	const dataOnSubmit = (item) => {
		setData((prev) => {
			return [
				...prev,
				item
			]
		});
	}

	function toggleModal(info) {
		setModalInfo(info);
		setModal(!modal);
	}
	

	return (
		<div>
			<Form onSubmit={dataOnSubmit} toggleModal={toggleModal}/>
			{data.length && <Lists data={data} />}
			{modal && <Modal toggleModal={toggleModal} modalInfo={modalInfo}></Modal>}
		</div>
	);
}

export default App;
