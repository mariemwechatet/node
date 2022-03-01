
import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/action'

const Edit = ({ task }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = (e) => {e.preventDefault()
    setShow(true)}

  const [consto, setConsto] = useState(task.Description)

  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={handleShow}
      >EDit</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          value={consto}
          onChange={(e) => setConsto(e.target.value)}
        ></input>{' '}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {e.preventDefault()
              dispatch(editTask(task.id, consto))
              handleClose()
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
