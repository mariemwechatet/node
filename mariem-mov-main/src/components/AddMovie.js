import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { handelAdd } from '../redux/action'
import StarRating from './StarRating'


const AddMovie = () => {
    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState(1)
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        
        e.preventDefault()
        let newaddmovie = {
          image:image,
          name:name,
          rating:rating,
          date:date,
        }
        setImage('')
    setName('')
    setRating('')
    setDate('')
    dispatch(handelAdd(newaddmovie))
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
  let handelRating = (x) => {
    setRating(x)
  }
    return (
        <div>

             <button onClick={openModal} className="btn">Add</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<form onSubmit={handleSubmit}>
                <label >Movie Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <label >Image</label>
                <input type="url" value={image} onChange={e=>setImage(e.target.value)}/>

                <label >Date</label>
                <input type="date"  value={date} onChange={e=>setDate(e.target.value)}/>
                <StarRating rating={rating} handelRating={handelRating}/>
                <button className="btn" onClick={handleSubmit}>Save</button>
                <button className="btn" onClick={()=>closeModal()}>Cancel</button>

                
            </form>
      </Modal>
        </div>
    )
}

export default AddMovie;
